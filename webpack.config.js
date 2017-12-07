var HelloWorldPlugin = require('./Plugin/HelloWorldPlugin'),
    FileListPlugin = require('./Plugin/FileListPlugin'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./entry.js",
        lib: [  './ES6/counter',
                './ES6/calculator',
                './Partial/btnChangeBackgroundHandle']
    },
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack - the new rock star of build tools',
            header: 'Webpack - header',
            filename: 'admin.html',
            template: 'Layout/index.html'
        }),
        new webpack.ProvidePlugin({
            es6Calc: './ES6/calculator'
        }),
        new webpack.DefinePlugin({ ENV: JSON.stringify('dev')}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: 'common.js'
        }),
        new HelloWorldPlugin({options: true}),
        new FileListPlugin({options: true})
    ]
}
