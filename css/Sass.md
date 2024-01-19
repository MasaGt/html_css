### Sassとは

- cssを拡張したメタ言語  
    *メタ言語とは、ある言語に別のルールを定義するために使われる言語のこと  

- Sassでできること
    - スタイルの入れ子ができる　
    - 変数の利用
    - 四則演算
    - 関数
    - ミックスイン・継承  
        *ミックスイン: スタイル等をあらかじめ変数として定義しておいて、欲しいときに呼び出し使い回す機能  

---

### SASS / SCSSとは

- Sass: cssのメタ言語

- SASS: Sassの記法の一つ。ファイル拡張子が.sass

- SCSS: Sassの記法の一つ。ファイル拡張子が.scss

---

### 記法によるスタイルの書き方の違い

- SCSS: cssっぽい書き方

- SASS: {}を使わず、;も文末につけない。その代わりにインデントが役割を持つ。

```css
/* cssでの書き方 */
.paragraph {
    font-size: 16px;
}
.paragraph .min-text {
    font-size: 12px;
}
```

```SCSS
.paragraph {
    font-size: 16px;
    .min-text { // ここが入れ子になっている
        font-size: 12px;
    }
}
```

```Sass
paragraph
    font-size: 16px
    .min-text
        font-size: 12px
```
