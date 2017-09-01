const webpack = require('webpack');
const path = require('path');

process.traceDeprecation = true;

module.exports = {
  devtool: 'cheap-eval-source-map',

  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'client/index.js'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public/bundles'),
    filename: '[name].js',
    publicPath: '/public/bundles/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
