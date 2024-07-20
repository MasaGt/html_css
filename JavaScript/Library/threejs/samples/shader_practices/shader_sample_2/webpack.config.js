const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // shaderファイルの処理
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
      },
      {
        // 画像ファイルの処理
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
};
