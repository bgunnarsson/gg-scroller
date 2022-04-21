/**
 * Webpack main configuration file
 */

const path = require('path');
const paths = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');
const optimize = require('./optimization');
const resolve = require('./resolve');

module.exports = (env, argv) => {
  const isProduction = argv && argv.mode === 'production';
  const isNjksDev = argv && env.njksDev;
  const isNjksProduction = argv && env.njksProd;

  const config = {
    isProduction,
    isNjksDev,
    isNjksProduction,
  }

  return {
    mode: argv ? argv.mode : 'development',
    devtool: isProduction ? false : 'eval-source-map',

    // styles.ts is used for hot reload...
    entry: {
      scripts: path.resolve(paths.source, 'scripts', 'scripts.ts'),
      styles: isProduction || isNjksProduction ?
        path.resolve(paths.source, 'styles', 'styles.scss') :
        path.resolve(paths.source, 'styles', 'styles.ts'),
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

    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    context: paths.app,

    devServer: devServer(config),

    module: {
      rules: rules(config),
    },

    optimization: optimize(config),

    plugins: plugins(config),
    resolve,
    target: 'web',
  }
};
