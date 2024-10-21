import knex, { Knex } from 'knex'
import pg from 'pg'

import { config } from '@shared/config'

import configuration from './knexfile'

let dbConfig: Knex.Config

// console.log(config.get('environment'));
if (config.get('environment') === 'production') {
    dbConfig = configuration.production
} else {
    dbConfig = configuration.development
}

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => {
    return parseInt(value, 10)
})

pg.types.setTypeParser(pg.types.builtins.FLOAT8, (value: string) => {
    return parseFloat(value)
})

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => {
    return parseFloat(value)
})

const connection = knex(dbConfig)

export { connection }
