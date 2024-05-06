import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgrOptions: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    }]
  };

  const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });

  const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

  const cssLoader = buildCssLoader(isDev);

  // Если не используем тайпскрипт - нужен babel-loader
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|jpg|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader];
}
