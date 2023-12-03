import {BuildOptions} from "./types";
import webpack from 'webpack';
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, port, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolve(),
        plugins: buildPlugins(paths),
        devServer: isDev ? buildDevServer(port) : undefined
    }
}