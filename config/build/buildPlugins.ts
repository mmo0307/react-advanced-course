import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import {BuildPaths} from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({html}: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ];
}