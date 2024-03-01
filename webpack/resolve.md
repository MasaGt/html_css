### webpackconfig.jsの　resolveとは

- 依存関係を解決するための設定項目

- 主な設定項目
    - resolve.extensions: ソースコードに記載するimportにてimport対象のファイル拡張子を省略できるようになる設定
    - resolve.alias: パスにエイリアスを設定できる　

---

### resolve.extensionの使い方

```js
// webpack.config.js
module.exports = {
    ~
    resolve: {
        extensions: [".js", ".jsx"],
    }
}
```

これで以下のようにインポートできる
```js
import { インポート対象 } from "(jsかjsxの)対象ファイル";
/**
 * requireでも同じ
*/
```

---

### resolve.aliasの使い方

```js
// webpack.config.js
module.exports = {
    resolve: {
        alias: {
            "エイリアス名1": パス1,
            "エイリアス名2": パス2,
        }
    }
};
```

例: 以下のような構成のプロジェクトがあるとする
```
project
    |- image
    |   |- bg1.png
    |- js
        |- app.js
```

```js
// webpack.config.js
module.exports = {
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, "image"),
        }
    }
};
```

```js
// app.js
import "@img/bg1.png"
```

*エイリアス名の最後に$をつけることで、以下のような挙動になる
```js
// webpack.config.js
module.exports = {
    resolve: {
        alias: {
            img$: path.reolve(__dianame, "image/bg.png")
        },
    },
};
```

```js
// app.js
import "img"; //完全マッチするのでimage/pngを指す
import "img/header.jpeg"; //完全マッチではないので、img/header.jpegをさす
```

