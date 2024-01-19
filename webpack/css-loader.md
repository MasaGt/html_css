### CSS系のローダー(主要なもの)

- cssローダーはめちゃくちゃ多くある

- ここに書くのは、css-loader/style-loader/sass-loaderについてのみ

---

### 設定方法

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