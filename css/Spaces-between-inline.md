### インラインレベルの要素の間にスペースが入ることがある

- HTMLソースコードにて、インラインレベル要素の間に改行ある場合、そのインラインレベルの要素の間にスペースが入る

スペースが入らないケース
```html
<span>item1</span><span>item2</span><span>item3</span>
```
<span>item1</span>item2</span><span>item3</span>

<br>

スペースが入るケース
```html
<span>item1</span>
<span>item2</span>
<span>item3</span>
```
<span>item1</span>
<span>item2</span>
<span>item3</span>

---

###　解決法

- 親要素のフォントサイズを0にする
    - 改めて子要素の方で、いちいちfont-sizeを指定しなければいけない
```html
<div class="parent">
    <span>item1</span>
    <span>item2</span>
    <span>item3</span>
</div>
```
```css
.parent {
    font-size: 0;
}
.parent p {
    /* これがいちいちめんどくさい */
    font-size: 1rem; 
}
```
<br>

- タグの途中で改行する
```html
<span>item1</span
><span>item2</span
><span>item3</span>
```
<br>

- 改行をコメントアウトする
```html
<span>item1</span><!-- 
--><span>item2</span><!-- 
--><span>item3</span>
```
<br>

- displayをblockにする
```html
<span>item1</span><span>item2</span><span>item3</span>
```
```css
span {
    float: left
    /* ただし、親要素で回り込みの解除が必要 */
}
```
*floatにすると、その要素は暗黙的に display:block になる
<br>

- flexboxを利用する
```html
<div class="parent">
    <span>item1</span>
    <span>item2</span>
    <span>item3</span>
</div>
```
```css
.parent {
    display: flex;
}
```