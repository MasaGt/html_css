### 複数のエントリーポイントを　設定する

- module.export.entryに<font color="red">オプジェクトを渡し</font>、複数のエントリーポイントをプロパティとして設定する

---

### 使い方

```js
module.exports = {
    entry: {
        エントリーポイント名: パス
    },
    output: {
        ~
        //↓[name]はエントリーポイント名に変換される
        filename: "[name].js",
    },
};
```

---

### 