### webpack.config.jsとは

- webpackの設定ファイル
    - どこをエントリーポイントにするのか
    - どのファイルをバンドル対象にするのか
    - ローダー、プラグインの設定
    -　などなどの設定をカスタマイズできる

---

### 基本的な書き方

```js
module.export = {
    <項目> : <値>
}
```

---

### 基本的な設定項目

- mode: ビルドのモード  
    - development: 開発モードでビルドする  
    - production: 本番モードでビルドする  

    *両者の違い  
    productionモードではファイルの圧縮/軽量化、モジュールの最適化などを行うため、developmentビルドに比べて時間がかかる。

<br>

- entry: エントリーポイント(ファイル)の指定  
    *デフォルトでは"./src/index.js"

<br>

- output: ビルドファイルに関する設定  
    - ビルドファイルの出力先  
        *デフォルトでは"dist/"
    - ビルドファイル名  
    - などなど  
   
    *ビルドファイルの出力先には<font color="red">絶対パス</font>を指定しないとエラーが発生する

<br>

例:
```js
// パス指定の際に便利なのでpathモジュールをインポート
const path = require("path");

module.exports = {
    mode: "development"
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }
}
```
*__dirnameはこのファイルがある階層のパスを返す

<br>

webpackの設定は以下みたいな感じ
```
project
    |-index.js <- エントリーポイント
    |-dist <-ビルドの際に作られる
        |-main.js <- バンドルされたファイル
    |-webpack.config.js
```

---