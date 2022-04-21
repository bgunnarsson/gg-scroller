/**
 * Webpack main configuration file
 */

const path = require('path');
const optimize = require('./optimization');
const paths = require('./paths');
const plugins = require('./plugins');
const resolve = require('./resolve');
const rules = require('./rules');

module.exports = (env, argv) => {
  const isProduction = argv && argv.mode === 'production';

  const config = {
    isProduction
  }

  return {
    mode: argv ? argv.mode : 'development',
    devtool: 'source-map',
    entry: {
      index: path.resolve(paths.source, 'index.ts')
    },
    output: {
      path: paths.build,
      filename: isProduction ? '[name].min.js' : '[name].js',
      chunkFilename: isProduction ? '[name].[chunkhash:6].js' : '[name].js',
      publicPath: isProduction ? '/build/' : '/',
      globalObject: 'this',
      pathinfo: false,
      assetModuleFilename: 'assets/[name][ext]',
    },
    context: paths.app,
    module: {
      rules: rules(config),
    },
    optimization: optimize(config),
    plugins: plugins(config),
    resolve,
    // target: 'web',
  }
};
