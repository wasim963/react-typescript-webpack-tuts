const webpack = require('webpack')

module.exports = {
    mode: 'production', // process.env.mode as development,
    devtool: 'source-map',
    plugins: [
        // to define custom env variables
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codeevolution')
        })
    ]
}