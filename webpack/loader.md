### ローダーとは

- 主にJavaScript以外のファイルをバンドルできるようにするプログラムのこと
    - cssや画像などjs以外のファイルはそのままの形式だとwebpackでバンドルできない
    - よってバンドルする前にローダーをかませて、css/img/jsxなどその他の画像をバンドル可能な形式に変する　必要がある

- 変換するファイルによって利用するローダーが異なる
    -　cssの変換に必要なローダーと画像ファイルの変換に必要なローダーは異なる

- すべてのローダーがファイル変換のプログラムではない
    - ESLintでコードチェックを行うローダーもある

---

### 主なローダー

- [babel-loader](./babel-loader.md)
    - jsやjsxファイルのトランスパイルのためのローダー

- [css-loader](./css-loader.md)
    - cssをjsファイルに埋め込むためのローダー

- [style-loader](./css-loader.md)
    - cssをhtmlのスタイルタグとして変換して出力するローダー
    - cssはビルドファイルに含めなくてよくなる　
    - htmlファイルが肥大化するので、デメリットもある

- [sass-loader](./css-loader.md)
    - sassをcssに変換するためのローダー
    - sass-loaderを使うためにはsass(Dart Sass)かnode-loaderのインストールも必要  
        *Dart Sass: Sassをコンパイルするためのモジュール
    - node-sassは非推奨らしい
    - sass-loaderはSassをコンパイルするためのモジュールを利用するローダーのイメージ?(babel-loaderもbabel_core必要だったし)

-[post-css-loader](./css-loader.md)
    - PostCSSを使うためのローダー
    - このローダーを使うためにはpostcssのインストールも必要  
        *postcss: 本体
    - [PostCSSについてはこちら](../css/PostCSS.md)

---

### ローダーの使い方

```js
module.exports = {
    module: {
        rules: [
            // ここに{}でローダーごとの設定をくくる
            {
                use: "ローダー名",
                test: 対象ファイル(正規表現で拡張子を指定するのが一般的),
                include: 対象パス                
            },
            {
                // 別のローダーの設定
            }
        ]
    }
}
```

---

### その他

- includeに複数パスを指定する
    - 配列で複数のパスをincludeに設定できる

```js
module.exports = {
    ...
    modue: {
        rules: [
            {
                ...
                include: [
                    path.resolve(~~),
                    path.resolve(~~),
                ],
            },
        ],
    },
};
```

<br>

- 複数のローダーの使い方
    - 複数のローダーを使う際はmodule.rules.useに配列で渡す  
    *実行順は渡した能登は逆の順番で実行される  
    今回の例だとloader3 -> loader2 -> loader1の順で実行される

```js
module.exports = {
    module: {
        rules: [
            {
                use: ["loader1", "loader2", "loader3"],
            }
        ]
    }
};
```
