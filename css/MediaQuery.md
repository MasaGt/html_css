### メディアクエリとは

- 特定の条件を満たす場合にスタイルを当てることができる技術
    - 例: ビューポートの幅が600pxより広い画面の時にはスタイルAを適用し、600px以下の時にはスタイルBを適用する。

---

### 書き方

```css
@media media-type and (media-feature-rule) {
  /* スタイルを記述 */
}
```

media-typeが指定したタイプ  
(andなので)かつ  
media-feature-ruleに当てはまるとき、上記スタイルが適用される

- media-type   
    - print:　印刷時に適用するスタイル
    - screen: 画面を持つデバイスで表示した時のスタイル
    - speech: 音声デバイス時のスタイル
    - all: 全て

- media-feature-rule
    - width:　画面(viewport)幅
    - height: 画面(viewport)の高さ
    - aspect-ratio: アスペクト比  

    などなど

---

### より複雑な条件を設定する

- 論理演算子  
    
1. and: 複数のmedia-typeやmedia-feature-ruleを組み合わせる
```css
@media screen and (min-width: 600px) and (orientation: landscape) {
    /*
    [画面を持つデバイス]
    かつ
    [ビューポートの幅が少なくとも 600 ピクセル]
    かつ
    [デバイスがランドスケープモード]
    の場合にのみ適用される
    */
}
```

<br>

2.  ,(or): 指定した条件ののセットどれかに当てはまる場合にスタイルを適用できる  
カンマでクエリセットを追加する
```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
    /* 
    [画面をもつデバイス]
    かつ
    [ビューポートの幅が少なくとも 600 ピクセル]
    または
    [デバイスがランドスケープ]
    の場合に適用される
    */
}
```

<br>

3. not: 条件に一致しない場合にスタイルを適用する
```css
@media not print and (orientation: landscape) {
    /* 
    [印刷画面ではなく]
    かつ
    [オリエンテーションがポートレート]
    の場合にのみスタイルが適用される
    */
}
```

---

### より複雑な条件を設定する2

- 比較演算子  
    - \<  
    - \>
    - \<=
    - \>=

```css
@media (width >= 480px) {
    /*
    ビューポートの幅が480px以上の時
    にこのスタイルを適用する
    */
}
```
*@media (media-feature-rule)は  
@media all and (media-feature-rule)の省略形

---

### min/max-widthについて

- min-width: 最低でもビューポートの幅が~~pxある時にスタイルが適用される
```css
@media (min-width: 380px) {
    /*
    ビューポートの幅が380px以上の時にスタイルが適用される
    */
}
```

- max-width: 最高でもビューポートの幅が~~pxある時にスタイルが適用される
```css
@media (max-width: 380px) {
    /*
    ビューポートの幅が380px以下の時にスタイルが適用される
    */
}
```

*上記は以下のようにも書き換えられる
```css
@media (width <= 380px) {
    /*
    ビューポートの幅が380px以上の時にスタイルが適用される
    */
}

@media (width >= 380px) {
    /*
    ビューポートの幅が380px以下の時にスタイルが適用される
    */
}
```
*ビューポートの幅が380pxちょうどの時、380px以下のスタイルが適用された後、380px以上のスタイルも適用される。

---

### ブレイクポイントの設定

- ブレイクポイント: スタイルを切り替える境界値  
    例: 画面幅480px以上/以下でスタイルを切り替える  
    ->480pxがブレイクポイント

現在では様々な画面サイズのデバイスがあるため、「(特定の)あるデバイスで見たときにはこのスタイルを適用する」といったブレイクポイントの設定方法は難しい。

->コンテンツが壊れ始める(もしくは見にくくなる)境界でブレイクポイントを設定すると良い

---

### mobile first vs desktop first

- mobile first: 基本はスマホの小さいビューポートサイズ用のCSS、タブレット/デスクトップへのスタイルはメディアクエリを使用する
```css
/* basic style is for mobile */
~~~~

@media (width > 780px) {
/* the style for tablet */
}

@media (width > 1280px) {
/* the style for desktop */
}
```

<br>

- desktop first: 基本はPCの大きいビューポートサイズ用のCSS、タブレット/スマホへのスタイルはメディアクエリを使用する
```css
/* basic style is for desktop*/
~~~~

@media (width < 780px) {
/* the style for tablet */
}

@media (width < 380px) {
/* the style for mobile phone */
}

```