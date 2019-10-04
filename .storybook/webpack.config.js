module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: require('./babel.config')
      },
      {
        loader: 'react-docgen-typescript-loader'
      }
    ]
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: '@storybook/source-loader'
      }
    ],
    enforce: 'pre'
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
