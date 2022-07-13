const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    hot: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, "src")
    },
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Assets: path.resolve(__dirname, "src/assets")
    }
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      entry: "index.js",
      title: "Blackshell free from CRA",
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    })
  ],
};