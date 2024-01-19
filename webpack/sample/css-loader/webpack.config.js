const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "js", "app.js"),
  module: {
    rules: [
      {
        // css系ローダーの設定
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.scss$/,
        include: path.resolve(__dirname, "src", "scss"),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
};
