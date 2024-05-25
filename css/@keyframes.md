### @keyframesとは

アニメーション開始から終了するまでどのようなアニメーションをするのか指定できるCSSの記法のこと

```css
@keyframes 任意のキーフレーム名 {
    0% {
        0%時点でのcssプロパティ: 値;
    }
    100%: {
        100%時点でのcssプロパティ： 値;
    }
}
```

<font color="red">keyframes の定義だけではアニメーションとして動かない</font>

---

### animation プロパティとは

animation プロパティには定義した　＠keyframes を設定する

animation プロパティには @keyframes で設定した要素の変化に加え、 "何秒かけて変化させるか"、 "何回アニメーションさせるか"　といった設定を行う

```css
.対象クラス名 {
    animation: 定義済みkeyframe名;
    animation-duration: 2s;
    animation-iteration-count: infinite; 
    /* そのほかにもいろいろなアニメーションの設定がある */
}
```

---

### 例

```html
<div class="box"></div>
```

```css
@keyframes grow{
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}

.box {
    /* 2秒かけて1回だけアニメーションする */
    height: 200px;
    animation: grow;
    animation-duration: 2s;
    animation-iteration-count: 1;
}
```

<img src="./img/keyframes_1.gif" />