### CSS系のローダー(主要なもの)

- cssローダーはめちゃくちゃ多くある

- ここに書くのは、css-loader/style-loader/sass-loaderについてのみ

- post-css-loaderについても追記

---

### style-loader/css-loader/sacc-loaderの設定方法

- ポイント  
    - ローダーの実行順が大切  
        sass-loader -> css-loader -> style-loader

    - まずはSassをcssにコンパイルする処理が必要

    - 次にcss-loaderでcssをjsファイルに変換するイメージ

    - 最後に、style-loaderでhtmlにstyleタグでjsスタイルファイルの内容を埋め込むイメージ  
    *style-loaderで処理した後に、ビルドファイルとしてhtmlを出力するイメージだが、
    あくまで最終的にビルドされるのはjsファイル。htmlファイルはそのビルドされたjsファイルを読み込むだけ。

```js
module.exports = {
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: //処理対象のファイル,
                include: //path
            },
        ],
    },
};
```

#### イメージが湧きやすい説明の引用

- style-loader: [JSで読み込んだCSSを、HTMLに読み込ませるためのnpmパッケージです。HTMLのstyleタグとして書き出されます。](https://corecolors.net/webpack-css/#rtoc-6)

---

### 注意点

- css-loderでcssファイルをモジュール化して、アウトプットしたjsファイルをhtmlで読み込んでも、スタイルは反映されない  
    ->style-loaderでモジュール化したスタイルをstyleタグでhtmlに埋め込めるように処理しないといけない。

---

### post-css-loaderの使い方

- ローダーの実行順に注意

```js
module.exports = {
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader", "postcss-loader"],
                test: ~,
                include: ~,
            }
        ]
    }
};
```

---

### cssをjsファイルから読み込む方法

```js
import "~~/~~/~.css";
```
*この方法は基本的にwebpackでしか使えないものと思っていい  
*ちなみに、importで画像ファイルやcssファイルを読み込むこと自体はECMAScriptの仕様違反ではないらしい -> [参考](https://blog.uhy.ooo/entry/2020-06-06/webpack-loader-spec-compliance/)