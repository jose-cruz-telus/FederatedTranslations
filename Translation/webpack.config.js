const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'Translation',
      filename: 'remoteEntry.js',
      exposes: {
        './ChangeLang': './src/ChangeLang',
        './Text': './src/Text',
        './Config': './src/i18next'
      },
      remotes: {
        Translation: 'Translation@http://localhost:3003/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-i18next'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
