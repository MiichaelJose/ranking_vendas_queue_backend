import schema, { StatusName } from "./schema";

export default (string: StatusName): number => {
  return schema[string];
};
