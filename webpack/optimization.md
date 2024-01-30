### バンドルファイルの最適化

- 最適化にも色々な処理がある
    - ファイルを圧縮したり、不要なコードを削除したりなど

---

### Three Shaking

- 利用されておらず不要なコードを除去すること

---

### 利用方法

- ビルドのモードをproductionにする

- モードがdevelopmentの場合,optimization.usedExportsをtrueにする
    ```js
    module exports= {
        optimization: {
            usedExports: true,
        }
    };
    ```

---

### どんなコードがtree shaking対象になるのか

```js
// math.js
export const square = (x) => {
    return x*x;
}

export const cube = (x) => {
    return x*x*x;
}
```

<br>

```js
// index.js
// math.jsの一部分だけを利用する
import { cube } from "math.jsのパス";

//処理
```

<br>

```js
// webpack.config.js
/**
 * 本番ビルドにすると、自動でtree shakingされる
 * よって、math.jsのsquareはバンドルファイルから除去される
*/
module.exports = {
    mode: "production",
    ~
};
```

違う方法

```js
// webpack.config.js
module.exports = {
    mode: "develpoment",
    optimization: {
        usedExports: true,
    }
};
```

---

### tree shakingの実行結果を見てみたい場合

- stats.usedExportsを設定する　

- stats.usedExports: exportされたものの中でimportされたもの、つまり実際に使われているものを表示するオプション

```js
module.exports = {
    status: {
        usedExports: true,
    },
};
```

---

### tree shakingされないコードもある

- 副作用のあるコードとして扱われるとtree shakingの対象外になる

- 副作用のあるコードとは  
    関数の外部の状態を変化させるコード(グローバル変数とか)

<br>

#### 例
```js
//math.js
export const square = () => {~};
export const cube = () => {~};
export const random = Math.random();
```

<br>

```js
// app.js
import { cube } from "math.jsのパス"
```

productionビルドすると、Math.ramdom()がバンドルされてしまっている  
-> webpack側で"これは副作用のあるコードで、これはないコード"という判断はできない  

よって、package.jsonにて副作用のあるファイルを指定することができる

```json
"name": "プロジェクト名",
sideEffect: false,
~
```

sideEffect: fasleにすると、すべてのファイルにて副作用のあるコードなしと伝える  
*しかし、以下のケースにて意味がなかった  
↓Math.random()がバンドルされてしまう
```js
//math.js
export const square = () => {~};
export const cube = () => {~};
export const random = Math.random();
```

<br>

```js
// app.js
import { cube } from "math.jsのパス"
```

これを解決するにはterser-webpack-pluginを使った

---

### terser-webpack-pluginで副作用のないコードの除去

- npm instal -D terser-webpack-plugin しておくこと

```js
// webpack.config.js
module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        //副作用のない関数を指定する
                        pure_funcs: ["Math.random"],
                    },
                },
            }),
        ],
    }
}
```

---

### なぜpakcge.jsonのsideEffectsに指定してなくてもtree shakingできなかったのか

- 以下のような状況でmath.jsのMath.randomがtree shakingされなかった理由


```js
//math.js
export const square = () => {~};
export const cube = () => {~};
export const random = Math.random();
```

<br>

```js
// app.js
import { cube } from "math.jsのパス"
```

- app.jsでmath.jsのcubeは読み込まれているため、math.jsは普通に読み込まれるため、randomだけ除去することができないらしい  
[参考サイト:4. ES6 の class を tree shaking する 2 つの方法](https://www.kabuku.co.jp/developers/tree-shaking-in-2018)

- やはり、このような場合はterser-webpack-pluginを使って除去するのが正しかったらしい


