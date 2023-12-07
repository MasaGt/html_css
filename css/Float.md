<link href="./styles/float.css" rel="stylesheet"></link>

### Float使用時の注意点

- floatwを適用した要素は親要素の高さに影響を与えなくなるので、親の高さが0になってしまうことがよくある

以下だと、wrapperの高さが0になる
```html
<div class="wrapper">
    <div class=item>item</div>
</div>
```
```css
.wrapper {
    border: blueviolet 2px solid;
}
.item {
    float: left;
    background-color: aqua;
}
```

<div class="wrapper">
    <div class="item">item</div>
</div>

---

### 親要素の高さが0にならないようにする解決法

- clearfixという手法を使う

- floatの親要素の::afterにclear:bothを指定する
```html
<div class="wrapper">
    <div class=item>item</div>
</div>
```
```css
.wrapper {
    border: blueviolet 2px solid;
}
.item {
    float: left;
    background-color: aqua;
}
.wrapper::after {
    content: '';
    display: block;
    clear: both;
}
```
<div class="wrapper clear">
    <div class=item>item</div>
</div>

