/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const paths = require('./paths');
const fs = require('fs');
const path = require('path');

module.exports = ({
  isProduction = false
}) => {
  const productionPlugins = [];

  const developmentPlugins = [];

  const plugins = [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(paths.assets),
    //       to: path.resolve(paths.build, 'assets'),
    //       toType: 'dir',
    //       globOptions: {
    //         ignore: ['*.DS_Store', 'Thumbs.db'],
    //       },
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
    }),
  ];

  if (isProduction) {
    return productionPlugins.concat(plugins);
  }

  return developmentPlugins.concat(plugins);
};
