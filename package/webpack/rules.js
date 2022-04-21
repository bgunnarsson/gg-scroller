/* eslint-disable */

const path = require('path');
const paths = require('./paths');

module.exports = ({
  isProduction = false
}) => {
  const typescript = {
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'ts-loader',
    exclude: /node_modules/
  };

  let config = [
    typescript
  ];

  return config;
};
