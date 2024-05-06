### 事象

親要素に opacity を設定し、半透明にしたが、子要素も同じ opacity が設定されてしまった

子要素に別途 opacity を設定しても適用されない

```html
<div class="container">
    <p class="text">
        Hello, world!
    </p>
<div>
```

```css
.container {
    background-color: black,
    opacity: .2
}

.text {
    color: white,
    opacity: 1.0
}
```

<img src="../img/issue_opacity.png" />

---

### 原因

opacity は子要素に継承されるプロパティではないが、opacity が設定された要素全体に適用されるものらしい

---

### 解決策

親要素にて opacity 単体で設定するのではなく、background-color に rgba で設定する

```html
<div class="container">
    <p class="text">
        Hello, world!
    </p>
</div>
```

```css
.conatiner {
    background-color: rgba(0, 0, 0, .2)
}

.text {
    color: white
}
```