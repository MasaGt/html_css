### imgタグについて

 - imgタグはデフォルトではインライン要素


 ---

###　レスポンシブ対応

#### scrset 属性

- ディスプレイの解像度や画面サイズによって、表示する画像を切り替える属性

- デバイスピクセル比によって、画像を切り替える
    - デバイスピクセル比の指定には x という単位を使う
    - デバイスピクセル比 1 の時には画像 1 を表示し、デバイスピクセル比が 2 の時には画像 2 を表示する
```html
<img srcset="画像1のパス 1x, 画像2のパス 2x">
```

- 画面サイズによって、画像を切り替える
    - 画像のパス <半角スペース> その画像の横幅 (px) で指定する
    - 横幅は px を意味するが、 srcsetでは w で指定する

- <font color="red">画面サイズで画像を切り替える時は sizes 属性も一緒に指定しなければ効かない</font>

```html
<img srcset="画像1のパス 600w, 画像2のパス 1200w">
```

#### sizes 属性

- 画像要素の幅を指定する

- メディアクエリの時のように media-feature-rule を指定することもできる

- 以下の例の意味は
    - 画面幅が 620 px 以下の時は、対象の画像要素の幅を 400 px にする
    - 画面幅が 840 px 以下の時は、対象の画像要素の幅を 600 px にする
    - それ以外の場合(画面幅が 840 px よりも大きい場合)、対象の画像要素の幅を 100 vw にする

```html
<img
    sizes="
        (width <= 620px) 400px, 
        (width <= 840px) 600px,
        100vw"
/>
```

#### srcset と　sizes を一緒に使ってみる

- 以下のように機能する
    - まずは sizes により、画面幅によって対象の画像要素の幅が決まる
    - 次に srcset から、決められた画像の要素の幅に一番近いサイズの画像を選択し表示する


- 以下の例の意味は
    - 画面幅が 640 px 以下の時
        - 対象 img 要素の幅は 320 px になる
        - そして、そのサイズに違い img1.png を表示する
    - 画面幅が 920 px 以下の時
        - 対象 img 要素の幅は 640 px になる
        - そして、そのサイズに近い img2.png を表示する
    - 画面幅が 920 px より大きい時
        - 対象 img 要素の幅は 920 px になる
        - そして、そのサイズに近い img3.png を表示する
```html
<img
    srcset="
        ./img/img1.png 320w,
        ./img/img2.png 640w,
        ./img/img3.png 920w,
    "
    sizes="
        (width <= 640px) 320px,
        (width <= 920px) 640px,
        920px
    "
/>
```

#### srcset と sizes を指定しても src を指定すること

- srcset と sizes まだに対応していないブラウザのために src 属性は指定すること