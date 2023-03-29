const { merge } = require('webpack-merge');

const webpack = require('webpack');
const path = require('path');
const base = require('./base');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
require('dotenv').config();

module.exports = merge(base, {
    mode: "development",

    plugins: [
        //Set variables for the development environment
        new webpack.DefinePlugin({
            'process.env': {
                'MODE': JSON.stringify('dev-local'), //environment mode
                'SERVER_URL': JSON.stringify(process.env.LOCAL_SERVER_URL), //a variable read in from the .env file
                'FEATURE_FLAG_1': JSON.stringify(true), //a feature flag with it's value set to true
            }
        }),
    ],
});