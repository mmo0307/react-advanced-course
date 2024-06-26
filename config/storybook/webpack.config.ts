import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    rootStyles: path.resolve(__dirname, '..', '..', 'src', 'app', 'styles'),
    locales: '',
    buildLocales: ''
  };

  config!.resolve!.modules!.push(paths.src);

  config!.resolve!.extensions!.push('.ts', '.tsx');

  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
    '@styles': paths.rootStyles
  };

  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://react-advance-server.vercel.app'),
      __PROJECT__: JSON.stringify('storybook')
    })
  );

  return config;
};
