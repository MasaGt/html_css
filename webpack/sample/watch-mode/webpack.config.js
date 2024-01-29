const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/js/app.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./js/bundle.js",
  },
  //   watch: true,
};
