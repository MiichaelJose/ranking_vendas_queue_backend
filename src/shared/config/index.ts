import convict from 'convict'
import 'dotenv'

const config = convict({
    environment: {
        doc: 'The application environment.',
        format: ['production', 'development', 'ci', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    jwt: {
        doc: 'The application JWT Security SHA265.',
        format: '*',
        default: '',
        env: 'HASH_AUTH_SECRET',
    },
    appUsername: {
        doc: 'The application Username',
        format: '*',
        default: '',
        env: 'APP_USERNAME',
    },
    appPassword: {
        doc: 'The application Password',
        format: '*',
        default: '',
        env: 'APP_PASSWORD',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3009,
        env: 'PORT',
        arg: 'port',
    },
    db: {
        url: {
            doc: 'Database url postgress',
            format: '*',
            default: '',
            env: 'DATABASE_URL',
        },
    },
    redis: {
        cacheUri: {
            doc: 'The redis cache uri.',
            format: '*',
            default: '',
            env: 'REDIS_CACHE_URI',
        },
        queueUri: {
            doc: 'The redis cache uri.',
            format: '*',
            default: '',
            env: 'REDIS_CACHE_URI',
        },
    },
    application: {
        url: {
            doc: 'Application URL',
            format: String,
            default: 'http://localhost:8080',
            env: 'APP_URL',
        },
        version: {
            doc: 'Application version',
            format: String,
            default: '0.0.1',
            env: 'npm_package_version',
        },
    },
    sentry: {
        dsn: {
            doc: 'Sentry DSN',
            format: String,
            default: '',
            env: 'SENTRY_DSN',
        },
    },
})

export { config }
