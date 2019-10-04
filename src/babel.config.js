module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { shippedProposals: true, useBuiltIns: 'usage', corejs: '3' }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'react-hot-loader/babel',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties'
  ]
};
