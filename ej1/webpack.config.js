const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const jsRule = {
    test: /\.js$/,
    exclude: '/node_modules/',
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }
}

module.exports = {
    mode:'development',
    devServer : {
        contentBase: path.join(__dirname, 'dist')
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [jsRule]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'yeferson',
            template: './src/index.html'
        })
    ]
}