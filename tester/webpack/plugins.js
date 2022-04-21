/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const fs = require('fs');
const path = require('path');

module.exports = ({
  isProduction = false,
  isNjksDev = false,
  isNjksProduction = false,
}) => {
  const productionPlugins = [];

  const developmentPlugins = [];

  const plugins = [

    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].min.css' : '[name].css',
    }),

    // TODO: Ignore svg folder and files
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.assets),
          to: path.resolve(paths.build, 'assets'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
      ],
    }),
  ];

  let templateFileNames;
  let htmlPlugins;
  let cleaner;

  if (isNjksDev || isNjksProduction) {
    cleaner = [
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
      }),
    ]

    templateFileNames = fs.readdirSync(paths.templates)
      .filter((file) => path.extname(file).toLowerCase() === '.njk')
      .map((file) => file.slice(0, -4));

    htmlPlugins = templateFileNames.map((templateName) => new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: templateName === 'index' ? `${templateName}.html` : `${templateName}/index.html`,
      template: path.resolve(paths.templates, `${templateName}.njk`),
      favicon: path.resolve(paths.source, 'assets', 'images', 'favicon.ico'),
    }));
  }

  if (isNjksDev) {
    return developmentPlugins.concat(plugins).concat(cleaner).concat(htmlPlugins);
  }
  else if (isNjksProduction) {
    return productionPlugins.concat(plugins).concat(cleaner).concat(htmlPlugins);
  }
  else if (isProduction) {
    return productionPlugins.concat(plugins);
  }

  return developmentPlugins.concat(plugins);
};
