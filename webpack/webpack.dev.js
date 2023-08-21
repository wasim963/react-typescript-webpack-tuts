const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development', // process.env.mode as development,
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        // to define custom env variables
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Wasim')
        }),
        // react-refresh - new & experimental version of Hot-module-replacement for react components
        // if u edit a file and save, the states of other components doesn't change
        new ReactRefreshWebpackPlugin()
    ]
}