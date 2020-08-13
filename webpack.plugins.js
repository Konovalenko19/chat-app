const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = (isProd) => {
    const base = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Chat App',
            template: './src/index.html',
            inject: 'body',
            minify: isProd,
        }),
    ];

    return base;
};

module.exports = plugins;