### 静的ファイルをバンドルする

- Assset Moudleとはwebpack5から追加された画像などの静的ファイルをバンドルするための機能

- 以前のバージョンでは静的ファイルをバンドルするために、raw-loader/url-loader/file-loaderなどのローダーを利用する必要があった

---

### 使い方

- (ローダーみたいに)module.rulesの中に書く

- 出力方法によって設定を変える

<br>

基本的な書き方
```js
module.exports = {
    module: {
        rules: [
            {
                // Asset Moduleの設定
                test: /対象拡張子/,
                type: "出力方法の指定",
                //その他オプション
            }
        ]
    }
}
```

---

### 利用的る出力方法(type)

- asset/resource: 静的ファイルを別フォルダに出力する  
    *このオプションを選択した場合、generatorオプションも設定しなければならない

- asset/inline: 静的ファイルをデータURLに変換するオプション(これで、静的ファイルをjsファイルなんかに埋め込める)  
    *静的ファイルをjsにバンドルすると、バンドルのサイズが大きくなり、読み込みに時間がかかる

- asset/source: 静的ファイルをテキストとして出力するオプション

- asset: 静的ファイルをデータURLに変換するか別フォルダにそのまま出力するかを自動で選択する  
    例:一定のサイズ以下はインライン化して、それ以上のサイズの静的ファイルはバンドルせずに出力する  
    *このオプションを選択した場合、generatorとデータURL変換するしないの条件を決める必要がある

---

### type: "asset/resource"

- generatorオプション: 静的ファイルの出力先や、出力ファイル名などを決めるオプション

今回は、output.path配下にassetsというフォルダを作り、そこに静的ファイルを出力する
```js
module.exports = {
    module: {
        rules: [
            {
                // デフォルトの出力先はoutput.path
                test: /対象拡張子/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/[name][ext]",
                },
            },
        ],
    },
};
```
*filenameについて  
[name]はバンドル前のファイル名、  
[ext]はバンドル前の拡張子  

---

### type: "asset"

- generator: 静的ファイル出力する際のファイル名

- parser: 静的ファイルをバンドル化するしないの条件などを設定する

```js
module.exports = {
    module: [
        rules: [
            {
                type: "asset",
                test: /対象拡張子/,
                generaor: {
                    filename: ファイルネーム,
                },
                parser: {
                    dataUrlCondition: {
                        //4KB以上のファイルはバンドル化せず出力する
                        maxSize: 1024 * 4, 
                    }
                }
            },
        ],
    ],
};
```
*parser.daraUrlCondition: データURL変換する条件を設定するオプション  
*daraUrlCondition.maxSize: データURL変換対象の最大ファイルサイズ(多分デフォルトの単位はbyte)

---

### データURLとは

- 小さなファイルをインラインで埋め込むことができるURLスキーム

- 何が嬉しいのか  
    -> 画像など、htmlでimgタグにsrc="path"でリンクを書くと、html解析時に、その画像を取ってこようとする。しかし、データURLを使えばhtmlにインラインで埋め込まれているので、別途画像を取りに行かない。