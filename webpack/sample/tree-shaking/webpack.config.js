const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/js/app.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./js/bundle.js",
    clean: {
      keep: /index.html$/,
    },
  },
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ["Math.random"],
          },
        },
      }),
    ],
  },
  stats: {
    usedExports: true,
  },
};
