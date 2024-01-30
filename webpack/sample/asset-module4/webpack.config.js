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
        //css処理系
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src/scss/"),
      },
      {
        // Asset Module
        test: /\.(jpe?g|png|svg|gif)$/,
        type: "asset",
        generator: {
          filename: "./images/[name][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 4,
          },
        },
      },
    ],
  },
};
