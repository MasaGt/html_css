const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "js", "target.js"),
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        include: path.resolve(__dirname, "src", "js"),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
};
