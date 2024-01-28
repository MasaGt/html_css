### webpackの設定ファイルを別々に分けて、ビルドに時に必要な設定ファイルをマージして実行できる

- 何が嬉しいのか
    - 開発ビルドと本番ビルドで別々の設定ファイルに分けてもつことができる

---

### 利用例

- webpack共通設定はwebpack.common.jsでもつ

- 本番ビルドの設定はwebpack.prod.jsでもつ

- 開発ビルドの設定はwebpack.dev.jsでもつ

```js
// webpack.common.js
const path = require("path");

module.exports = {
    entry: ~.js
    output: {
        output: path.resolve(__dirname, "output path"),
        filename: "output file name",
    },
};
```

<br>

```js
// webpack.dev.js

// 設定ファイルマージのためのモジュール
const { merge } = require("webpack-merge");

// 共通部分のインポート
const commonConfig = require("webpack.common.jsのパス");

module.exports = merge(commonConfig, {
    mode: "develop",
    // 開発ビルド独自の設定
    module: {
        // 本番ビルドで使うローダー
    },
    plugins: [
        // 開発ビルドで使うプラグイン
    ],
});
```

<br>

```js
// webpack.prod.js

// 設定ファイルマージのためのモジュール
const { merge } = require("webpack-merge");

// 共通部分のインポート
const commonConfig = require("webpack.common.jsのパス");

module.exports = merge(commonConfig, {
    //本番ビルド独自の設定
    mode: "pruduction",
    module: {
        // 本番ビルドで使うローダー
    },
    plugins: [
        // 本番ビルドで使うプラグイン
    ]
});
```

<br>

実行の際はwebpackコマンドに--configで実行ファイルのパスを渡して上げる必要がある  
そのため、以下のようにpackage.jsonに書いてあげると楽

```json
"scripts":
    "dev": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
```
* npm run dev で開発ビルド開始、npm run build で本番ビルド開始