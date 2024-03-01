### CSS 変数とは

- プログラミング言語の変数のように使いまわせる値

---

### 使い方

- \-\-変数名: 値; で定義する

- 変数名の大文字/小文字は区別される

- 変数の参照の際は var(\-\-変数名); で参照する

```css
/* 変数の定義 */
--variable_name: value;

/* 変数の参照 */
prop: var(--variable_name);
```

---

### CSS 変数のスコープ

- プログラミング言語の変数のように、 css の変数にもスコープがある

- 変数が宣言されたクラスセレクタと親子関係にない要素は、その変数にアクセスできない

```html
<div class="div1">
    div1
</div>

<div class="div2">
    div2
</div>
```

```css
.div1 {
    --var1 = 10px;
}

.div2 {
    /* 参照できない */
    font-size: var(--var1);
}
```

<br>

- 変数が宣言されたセレクタの子要素は、その変数にアクセスできる
```js
<div class="parent">
    parent

    <div class="parent_child">
        parent_child

        <div class="child_child">
            child_child
        </div>
    </div>
</div>
```

```css
.parent {
    --var1: 10px;
}

.parent_child {
    /* 参照できる */
    font-size: var(--var1);
}

.child_child {
    /* 参照できる */
    font-size: var(--var1);
}
```

---

###　一般的な変数の宣言場所

- 一般的には :root 疑似クラスの中で変数の宣言を行うことが多い
    - 他のどの要素からでも参照できるようになるから

```css
:root {
    --var1: 10px;
    --var2: "black";
}

.selector1 {
    /* 参照できる */
    font-size: var(--var1);
}

.selector2 {
    /* 参照できる */
    background-color: var(--var2);
}
```

---

### :root　とは

- html と同じ DOM ツリーのルート要素を指す

- html セレクターよりも<font color="red">詳細度は高い</font>

```css
/* html で指定するよりも詳細度は高い */
:root {
    pro: val;
}

/* 上記は実質以下と同じ */
html {
    prop: val;
}
```