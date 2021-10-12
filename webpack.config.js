const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,

                use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        "sass-loader",
                        {
                            loader: "sass-loader",
                            options: {
                              // Prefer `dart-sass`
                              implementation: require.resolve("sass"),
                            },
                          },
                    ]
                }
            ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "..." //read JS compression
        ]
    },
    plugins: [ 
        new HtmlWebPackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }), 
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
}