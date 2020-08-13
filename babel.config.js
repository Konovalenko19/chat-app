module.exports = (api) => {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
        ],
        plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-classes',
            '@babel/plugin-transform-parameters',
            '@babel/plugin-transform-property-literals',
            [
                '@babel/plugin-transform-runtime',
                { corejs: { version: 3, proposals: false } },
            ],
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-template-literals',
            'babel-plugin-styled-components',
        ],
    };
};