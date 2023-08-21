const path = require('path');
const HtmlWebpackPlungin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve( __dirname, '..', './src/index.tsx' ),
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    resolve: { // resolve import App from "./App" as /.App.tsx
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/, // babel processes every .ts .js .tsx .jsx file exculding the node modules
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // images gifs & icons
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/, // fonts & svgs
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        
        // inject the bundle.js file into the index.html file and place that html file in the build folder
        new HtmlWebpackPlungin({
            template: path.resolve(__dirname, '..', './src/index.html')
        })
    ]
    
}