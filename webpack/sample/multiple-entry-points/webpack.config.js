const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "/src/js/app.js"),
    search: path.resolve(__dirname, "/src/js/search.js"),
  },
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "[name].bundle.js",
  },
};
