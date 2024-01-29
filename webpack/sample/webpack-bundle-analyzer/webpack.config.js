const path = require("path");

// 利用するプラグインのインポート
const webpackAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "js", "app.js"),
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "bundle.js",
  },
  plugins: [new webpackAnalyzer()],
};
