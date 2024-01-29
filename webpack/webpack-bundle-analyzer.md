- バンドルファイル内で使っているモジュールサイズを可視化する

- 使い方

```js
/**
 * webpack-bundle-analyzerのインポート
 * BundleAnalyzerPluginプロパティを参照していることに注意
*/
const WebpackBundleAnalyzer = requrie("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    ~
    plugins: [new WebpackBundleAnalyzer()],
};
```

npm run ~ でwebページが開かれ、各モジュールサイズが見れる。  