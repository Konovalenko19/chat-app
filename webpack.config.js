const path = require('path');
const chalk = require('chalk');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;
const pathSrc = path.resolve(__dirname, 'src');
const pathDist = path.resolve(__dirname, 'dist');
const isProd = ENV === 'production';

console.log(chalk.bold.magenta(`WEBPACK MODE: ${ENV}\n`));

const config = {
    entry: `${pathSrc}/index.js`,
    mode: ENV || 'production',
    output: {
        filename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
        path: pathDist,
    },
    devServer: {
        contentBase: pathDist,
        compress: true,
        port: PORT,
        hot: true,
        open: true,
    },
};

module.exports = config;