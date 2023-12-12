<link href="./styles/transform.css" 
rel="stylesheet"></link>

### transformプロパティとは

- 指定した要素を移動、回転、変形させることができるプロパティ

```css
selector {
    transform: function(value);
}
```
*functionにはscale(), skewX(),translate(),rotateなどがある

---

### scale()

- 要素を拡大/縮小する

```css
selecter {
    scale(x方向の倍率, y方向の倍率);
    scaleX(倍率)
    scaleY(倍率)
}
```


例
```html
<div class="container">
    scaled(2, 0.5);
</div>
```
```css
.container:hover {
    /* x方向に0.5倍縮小する */
    transform: scale(2, 1);
}
```
<div class="container1">
    scaled(2, 0.5);
</div>

---

### skew()

- 要素を傾かせる

---

### translate()

-　要素を移動させる

---

### rotate()

- 要素を回転させる