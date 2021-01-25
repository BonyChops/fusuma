'use strict';

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const css = require('./css');

function prod() {
  return {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].bundle.js',
      chunkFilename: '[name].[id].[chunkhash].bundle.js',
    },
    module: {
      rules: [css('prod')],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[id].[chunkhash].css',
      }),
      // github pages doesn't support brotli
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        minRatio: 0.8,
      }),
      // new webpack.optimize.AggressiveMergingPlugin() // if use this, canvas will be broken
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            safe: true,
            discardComments: {
              removeAll: true,
            },
          },
        }),
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
      runtimeChunk: 'single',
    },
  };
}

module.exports = prod;