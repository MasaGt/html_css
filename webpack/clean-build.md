### クリーンビルドとは

- 一旦ビルドによって、作成されたクラスファイルなどのファイルを削除し、全てのモジュールをビルドしなおすこと

- webpack4までは、clean-webpack-pluginなどのプラグインが必要だったが、webpack5からクリーンビルドの機能が提供された。

---

### 使い方

module.outputオプジェクトにclean: trueを追加する

```js
module.exports = {
    output: {
        ~
        clean: true,
    },
};
```
*outputのpath配下お全てのファイルはビルド時に削除されてしまうため注意

---

### クリーンビルド時に特定のファイルは削除対象から外したい

output.cleanオブジェクトにkeep: /拡張子/を追加する

```js
module.exports = {
    output: {
        ~
        clean: {
            keep: /index.html/,
        },
    },
};
```
*これでoutput.path設定されたフォルダ内のindex.htmlはビルド時に削除されなくなった
