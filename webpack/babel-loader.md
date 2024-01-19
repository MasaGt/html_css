### babel-loaderとは

- jsやjsxファイルのトランスパイルのためのローダー
- そのほかに必要なモジュール
    - @babel/core: babel本体
    - @babel/preset-env: babelが変換処理に使うプラグインのプリセット

*@babel/preset-envについて:  
babelは以下の処理でトランスパイルを行う
1. jsファイルを解析
2. 解析したファイルをASTに変換
3. ASTに何らかの変換処理を行う
4. ASTをjsファイルに変換  

手順3の際に変換処理に何も指定しなければ、トランスパイルは行われず、元のjsファイルが出力される  
babel/preset-envとは、ターゲットのブラウザ情報などから(細かく変換処理の指定をしなくても)変換処理に必要なプラグインを決めてくれるプラグインのプリセット

---

### webpack/config.jsにbabel-loaderの登録

- babel-loaderおよびbabel関連のモジュールをインストールしただけでは意味がない

- webpack.config.jsにbabel-loaderを使いますよという旨の記述をする必要がある

```js
module.exports = {
    module: {
        rules: [ //ローダーの登録ごとに{}でくくる
            {
                use: "babel-loader", //ローダー名
                test: /\.js$/, //処理対象ファイルの拡張子
                include: , //処理対象フォルダ
                exclude: , //処理対象外フォルダ(基本的にincludeの方を使う)
            },
        ]
    }
};
```
*testの設定値は正規表現を使っている。$は文末を意味する。

**これだけではまだ不充分。<font color="red">変換処理に使うプラグインを指定していないから</font>**

---

### 変換に使うプラグインの指定

- 2つ方法がある
    1. webpack.config.jsに記載する
    2. .babelrc(babel.config.js)に記載する

<br>

例: webpack.config.jsに記載する場合
```js
module.exports = {
    ..
    module: {
        rules: [
            {
                use: "babel-loader"
                options: { //ここでpresetsプロパティに設定する
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    }
}
```

<br>

例: .babelrcに記載する方法
```
{
    "presets": ["@babel/preset-env"]
}
```

<br>

例: babel.config.jsに記載する方法
```js
module.exports = {
    presets: ["@babel/preset-env"],
};
```