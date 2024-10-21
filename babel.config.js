module.exports = {
    plugins: [
        'babel-plugin-transform-typescript-metadata',
        [
            'module-resolver',
            {
                alias: {
                    '@modules': './src/modules',
                    '@shared': './src/shared',
                    '@services': './src/services',
                },
            },
        ],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],
    ignore: ['**/*.spec.ts'],
}
