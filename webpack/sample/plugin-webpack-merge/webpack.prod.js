//production config
const { merge } = require("webpack-merge");
const terserPlugin = require("terser-webpack-plugin");

//load common config
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new terserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
