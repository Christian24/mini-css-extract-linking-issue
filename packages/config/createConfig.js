const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = function (dir, publicPath, devServer) {
  return {
    entry: path.resolve(dir, "index.js"),
    mode: "development",
    output: {
      path: dir + "/dist",
      publicPath: publicPath,
    },
    module: {
        rules: [{test: /\.css$/, use: [MiniCssExtractPlugin.loader]}] 
    },


    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(dir, "index.html") }, new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})),
    ],
    devServer: devServer,
  };
};
