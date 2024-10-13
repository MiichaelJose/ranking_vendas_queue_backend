import { config } from "@shared/config";
import { NextFunction, Request, Response } from "express";
import { selectStatus, Status4XXNames, Status5XXNames } from "@shared/helpers/http-status-schema";

export interface ISingleError {
  message: string;
  uniqueCode: string;
  index?: string[];
  details?: {
    [key: string]: any;
  };
}

class AppError {
  public readonly errors: ISingleError[] = [];

  public readonly statusCode: number = 400;

  constructor(error: ISingleError[]) {
    this.errors = this.errors.concat(error);
  }
}

interface IConfigAppError {
  defaultMessage: "Internal Error" | string
  defaultCode: "internalError" | string
  defaultStatusError: 500 | number | Status4XXNames | Status5XXNames
}

function appErrorMiddleware({
  defaultMessage,
  defaultCode,
  defaultStatusError,
}: IConfigAppError): any {
  return (
    error: any,
    _: Request,
    response: Response,
    next: NextFunction
  ): void | Response => {
    if (config.get("environment") !== "production") {
      console.error(error);
    }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        errors: error.errors.map((element) => {
          return {
            uniqueCode: element.uniqueCode,
            message: element.message,
            details: element.details,
            index: element.index,
          };
        }),
      });
    }

    const defaultStatusErrorInternal =
      typeof defaultStatusError === "number" ? defaultStatusError : selectStatus(defaultStatusError);

    return response.status(error.status || defaultStatusErrorInternal || 500).json({
      errors: [
        {
          message: defaultMessage || "Internal Error",
          uniqueCode: defaultCode || "internalError",
        },
      ],
    });
  };
}

export { AppError, appErrorMiddleware };
