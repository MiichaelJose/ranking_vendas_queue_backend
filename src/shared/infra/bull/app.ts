import corsExpress from 'cors'
import Express, { json } from 'express'

var path = require('path')

import 'express-async-errors'
import 'reflect-metadata'

import helmetExpress from 'helmet'

// eslint-disable-next-line import-helpers/order-imports
import { Routes } from '@shared/infra/http/routes'
import '@shared/containers'
import Queues from './queues'
import { config } from '@shared/config'
import QueryAUth, { signinToken } from '@shared/middlewares/AuthValidations'
import { appErrorMiddleware } from '@shared/utils/AppError'
import * as Sentry from '@sentry/node'
import sentryConfig from '@shared/config/sentry'

class Application {
    private readonly express

    constructor() {
        this.express = Express()

        this.express.use(
            Express.json({
                limit: '2000mb',
            })
        )
    }

    private startConfig(): void {}

    private database(): void {}

    private middlewares(): void {
        this.express.use(json())
        // this.express.use(useragent.express());

        if (config.get('environment') === 'production') {
            this.express.use(
                corsExpress({
                    exposedHeaders: [
                        'X-Pagination-Total-Rows',
                        'content-type',
                        'content-length	',
                    ],
                })
            )
            this.express.use(helmetExpress())
            this.express.disable('x-powered-by')
        } else {
            this.express.use(
                corsExpress({
                    origin: '*',
                    allowedHeaders: '*',
                    exposedHeaders: '*',
                })
            )
        }
    }

    private loadRoutes(): void {
        Routes(this.express)
    }

    // this function init the ui of bullmq and create express application
    async initUI() {
        this.express.post('/admin/login', (req, res) => {
            const { username, password } = req.body
            if (
                username === config.get('appUsername') &&
                password === config.get('appPassword')
            ) {
                const result = signinToken(username)

                return res.json({
                    status: true,
                    token: result,
                })
            }

            return res.json({
                status: false,
                message: 'Usuário e/ou senha inválidos',
            })
        })

        this.express.use(
            '/public',
            Express.static(path.resolve(`${__dirname}../../dashboard`))
        )

        this.express.get('*', (req, res) => {
            res.sendFile(path.resolve(`${__dirname}./../../public/login.html`))
        })
    }

    private onError() {
        //this.express.use(Sentry.Handlers.errorHandler());
        this.express.use(
            appErrorMiddleware({
                defaultMessage: 'Internal Error!',
                defaultStatusError: '500 Internal Server Error',
                defaultCode: 'internalError',
            })
        )
    }

    private async startProcess(): Promise<void> {
        const monitor = await Queues.process()

        this.express.use('/admin/:token/monitor', QueryAUth(), monitor.router)
    }

    async start(port: number, callback: () => void): Promise<void> {
        await this.startConfig()
        await this.database()
        this.middlewares()

        this.loadRoutes()

        this.onError()

        await this.startProcess()

        await this.initUI()

        await this.express.listen(port, callback)
    }
}
export default new Application()
