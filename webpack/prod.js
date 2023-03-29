const { merge } = require('webpack-merge');

const webpack = require('webpack');
const path = require('path');
const base = require('./base');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(base, {
    mode: "production",

    output: {
        filename: "app.js",
        clean: true,
    },
    devtool: false,


    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: 'src/assets', noErrorOnMissing: true },
                // Configure 
                // the path from where webpack will copy your assets from and the  
                // path where it will put it when the build is done, change it     
                // according to your app organization   
            ],
        }),

        //Set variables for the production environment
        new webpack.DefinePlugin({
            'process.env': {
                'MODE': JSON.stringify('production'), //environment mode
                'SERVER_URL': JSON.stringify('example.renderheads.com'), //setup the variable for production server
                'FEATURE_FLAG_1': JSON.stringify(false), //a feature flag with it's value set to false
            }
        }),
    ],
});