const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production', // process.env.mode as development,
  devtool: 'source-map',
  plugins: [
    // to define custom env variables
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codeevolution'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
