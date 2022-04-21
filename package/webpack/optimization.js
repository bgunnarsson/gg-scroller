const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({
  isProduction = false
}) => ({
  // runtimeChunk: 'single',
  minimize: isProduction,
  minimizer: [
    new TerserPlugin({
      parallel: isProduction,
    }),
  ],
});
