const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: { // new line
    static: { // new line
      directory: path.join(__dirname, "dist"), // new line
    }, // new line
  },
  devtool: 'eval-source-map',
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin({
        verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Pizza Parlor',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};