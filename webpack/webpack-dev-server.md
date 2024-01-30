### webpack-dev-serverとは

- webpack経由で、開発サーバーを立ち上げれるモジュール

- サーバーはホットリロード機能搭載

---

### 使い方

1. webpack-dev-serverのインストール
```bash
npm install -D webpack-dev-server
```

2. webpack.config.jsにサーバーの定義を追加する
```js
module.exports = {
    devServer: {
        static: {
            directory: サーバーの起点ディレクトリ,
        },
        port: ポート番号,
        open: 実行時にブラウザを自動で開くかどうか,
        lazy: ホットリロードをオンにするかしないか,
        host: 外部からアクセスするようのホスト,
        ...
    }
};
```

3. コマンドで起動する(package.jsonにnpm scriptで登録すると楽)

```bash
# コマンドで打つと
./node_modules/webpack-dev-server/bin/webpack-dev-server.js
```

```json
// package.json
"scripts":
    "start": "webpack serve"
    // もしくは "webpack-dev-server"
```

*webpack-dev-serverはビルドを残さない(outputに設定したディレクトリにバンドルファイルを出力しない)  
よって、バンドルファイルが必要な場合は別途webpackでbuildする必要がある

---

### 使用例

```js
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 8080,
        open: true
    }
};
```
-> 起動時に自動でブラウザを開き、ポート8080にて、__dirname/public配下のindex.htmlを表示する。
