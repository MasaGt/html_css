const path = require("path");

//プラグインのインポート
const cssPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "js", "app.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src", "scss"),
        use: [cssPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new cssPlugin({
      filename: "./css/style.css",
    }),
  ],
};
