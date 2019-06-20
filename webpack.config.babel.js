const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyjs = require('uglifyjs-webpack-plugin');

export default () => ({
    //mode: 'production',
    mode: 'development',
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'jsca-kits-1.0.0.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'JscaPKI'
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        },
        jquery: 'jQuery',
        axios: 'axios',
        bluebird: {
            commonjs: 'bluebird',
            commonjs2: 'bluebird',
            amd: 'bluebird',
            root: 'Promise'
        }

    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new uglifyjs({
          uglifyOptions: {
            ie8: true,
          }
        })
    ]
});