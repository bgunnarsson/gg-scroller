const paths = require('./paths');

module.exports = {
  extensions: [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
  ],

  modules: [
    'node_modules',
    paths.modules,
    paths.assets,
  ],

  alias: paths,
};
