### backgroundの使い方

- backgroundは以下のショートハンドラ
    - background-color
        - 背景の色(defaultはtransparent)
    - background-image
        - 背景に設定する画像
    - background-repeat
        - 背景画像の繰り返し方向
    - background-position
        - 背景画像の位置
    - background-size
        - 背景画像のサイズ
    - background-attachment
        - 背景画像のスクロールの有無

    *backgroudn-sizeだけは、background-positionの後ろに/で続けて指定する必要がある

```css
.container {
    background: url(~~) top/contain; /* backgroud-position/background-size*/
}

/* このようにも書ける */
.container {
    background-image: url(~~);
    background-position: top;
    background-size: contain;
}
``` 

---

### 注意事項

- backgroundで指定すると、指定していない項目があっても、その項目には初期値で指定したことになる

```css
.container {
    background-color: blue;
    background: url(~~); 
    /* 
    * ↑ここで
    * background-color: transparent;
    * (default)に上書きされる
    */
}
```

解決方法  
先にショートハンドラプロパティを書き、それに関するプロパティは後ろに書いて上書きしてく or ショートハンドラの中で忘れずに設定する
```css
.container {
    background: url(~~); 
    background-color: blue;
}

/* or */

.container {
    background: url(~~) blue; 
}
```