const { merge } = require('webpack-merge');

const webpack = require('webpack');
const path = require('path');
const base = require('./base');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(base, {
    mode: "development",


    plugins: [
        //Set variables for the development environment
        new webpack.DefinePlugin({
            'process.env': {
                'MODE': JSON.stringify('debug'), //environment mode
                'SERVER_URL': JSON.stringify('127.0.0.1'), //setup the variable for a debug server
                'FEATURE_FLAG_1': JSON.stringify(true), //a feature flag with it's value set to true
            }
        }),
    ],
});