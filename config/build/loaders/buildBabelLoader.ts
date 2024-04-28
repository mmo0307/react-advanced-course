import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildLoadersProps {
  isDev: boolean;

  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildLoadersProps) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX: isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [
              babelRemovePropsPlugin,
              {
                props: ['data-testid']
              }
            ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  };
}
