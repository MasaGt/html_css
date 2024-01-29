const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/js/app.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src/scss"),
      },
      {
        // Asset Moduleの設定
        test: /\.(jpe?g|gif|png|svg)$/,
        type: "asset/inline",
      },
    ],
  },
};
