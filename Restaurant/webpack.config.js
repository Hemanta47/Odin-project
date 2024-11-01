const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    global: './src/global.css',
    home: './src/pages/home/home.js',
    about: './src/pages/menu/menu.js',
    contact: './src/pages/contact/contact.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', // Serve 'home.html' as 'index.html'
      template: './src/pages/home/home.html',
      chunks: ['global', 'home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: './src/pages/menu/menu.html',
      chunks: ['global', 'about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/pages/contact/contact.html',
      chunks: ['global', 'contact'],
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
};
