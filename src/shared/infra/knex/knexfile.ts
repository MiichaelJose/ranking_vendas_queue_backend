import 'dotenv/config'
import { Knex } from 'knex'

import { config } from '@shared/config'

interface IConfig {
    development: Knex.Config
    production: Knex.Config
}

const configKnex: IConfig = {
    development: {
        client: 'pg',
        debug: true,
        connection: config.get('db.url'),
    },
    production: {
        client: 'pg',
        debug: false,
        connection: config.get('db.url'),
    },
}

export default configKnex
