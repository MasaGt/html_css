### px/em/rem

- px: 文字通り~pxで文字サイズを指定

- em: 親要素のfont-sizeを1とした倍率

- rem: html要素(root)のfont-sizeを1とした倍率

---
### emとrem

```css
.parent {
    font-size: 10px;
}
.child {
    font-size: 1.5em; /* 10px * 1.5 = 15px */
}

html {
    font-size: 15px;
}
.item {
    font-size: 2rem; /* 15px * 2 = 30px */
}
```

---

### rootのfont-size

- 多くのブラウザではrootのfont-sizeは16px

- rem(時にはem)での計算をやりやすくするために、rootのfont-sizeを10pxにしておきたい場合には font-size: 62.5%; にすることが多い

- 16px * 62.5 = 10px

```css
html {
    font-size: 62.5%;
}
```

---

### 注意事項

ユーザーがブラウザのデフォルト文字サイズを16pxから変更していた場合、remで設定した文字が意図しない表示になる

例: デフォルトサイズを24pxに変更していた場合、rootの文字の大きさが以下のようになる  
24 * 62.5% = 15px

それでもrootの要素を1として~~倍で表示することができるので、pxで固定で決めるよりもem/remを使った方がいい