### watchモードとは

- ファイルを監視し、変更があったらその都度ビルドをかけてくれる機能

- いちいち自分でビルドを手で打たなくていいので楽

- キャッシュが効くのでビルド時間が短くなるらしい

---

### 利用方法

2つの利用方法がある

1. webpack.config.json内でwatchモードを有効にする

2. webpackコマンドの引数でwatchモードを有効にする

<br>

方法1
```js
module.exports = {
    watch: true,
    ~
};
```

<br>

方法2
```json
"scripts": {
    "build": "webpack --watch",
},
```

もしくは
```bash
node_modules/webpack-cli/bin/cli.js --watch
```