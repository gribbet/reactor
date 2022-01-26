/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const development = process.env.NODE_ENV !== "production";

module.exports = {
  mode: development ? "development" : "production",
  devtool: "source-map",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[contenthash:8].js",
    assetModuleFilename: "assets/[name].[contenthash:8][ext][query]"
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: ({ runtime }) => runtime === "main"
    }
  },
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".webpack")
  },
  devServer: {
    port: 1234,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    })
  ]
};
