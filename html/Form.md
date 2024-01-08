### formの基本的な使い方

```html
<form action="送信先のurl" method="送信方法(get/post)">
    <部品となるinput要素>
    <input type="submit" value="submit">
    <!-- <button>で、押下時に送信処理をスクリプトで書く方法もある -->
</form>
```

**input要素にname属性をつけることで、サーバー側でどの項目の値かを識別することができる**

---

### cssでinput要素を指定する方法

```css
input[type="inputの種類"] {
    プラパティ: 値;
}

/* 例 */
input[type="text"] {
    font-size: 14px;
}
```

----

### その他

- input要素はinline-block要素

- form要素のactionがない場合: 現在のページが送信先になる。