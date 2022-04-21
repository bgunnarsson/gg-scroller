const paths = require('./paths');
const environment = require('./environment');

module.exports = ({
  isProduction = false,
  isNjksDev = false,
}) => {
  return {
    // https: {
    //   key: paths.certKey,
    //   cert: paths.certFile,
    //   ca: paths.certFile,
    // },
    server: {
      type: 'https',
      options: {
        key: paths.certKey,
        cert: paths.certFile,
        ca: paths.certFile,
      },
    },
    // contentBase: paths.devServerContent,
    // compress: false,
    port: environment.port,
    open: isNjksDev,
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 300,
    //   ignored: /node_modules/,
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    // disableHostCheck: true, // Temp fix: https://github.com/webpack/webpack-dev-server/issues/1604
  }
};
