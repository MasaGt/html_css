### jsにバンドルされたcss部分を別cssファイルに出力するプラグイン


- 最終的な出力はcssなのでプラグインである

- css-loaderと一緒に使う
    - 実行順は css-loaderでcssをjsにバンドルする -> プラグインの提供するloaderでjsにバンドルされたスタイル部分をcssに出力する

---

### 基本的な使い方

```
project
    |- public
    |   |- css
    |   |   |- output.css
    |   |- js
    |       |- bundle.js
    |- src
    |   |- css
    |   |   |-s tyle.css
    |   |- js
    |       |- app.js
    |-webpack.config.js
```

<br>

webpack.config.js
```js
const path = require("path");
//プラグインのインポート
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    /**
     *  mode/entry/outputの設定
     */
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                /**
                 * test/includeの設定
                 */
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/output.css", //output css file name
            /**
             * その他にもオプションがある
            */
        }),
    ]
};
```
*mini-css-extract-pluginのfilename以外のオプションは[こちら](https://runebook.dev/ja/docs/webpack/plugins/mini-css-extract-plugin)  
*cssの出力先はmodule.output.pathと同じ

---

もっと詳細な使い方は[こちら](https://ui.appleple.blog/JS/entry-100.html)