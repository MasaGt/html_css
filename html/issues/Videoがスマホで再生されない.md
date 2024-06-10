### 事象

video タグを使って動画を背景で自動再生した

- PCでは自動で再生されており問題なし

- iPhone では自動再生されず、停止したまま

- Android では確認してない

<br>

```js
// tsxファイル
const BgVideo = () => {
    return <video
              className="video"
              src="/sample_video.mp4"
              autoPlay
              loop
              muted
              ></video>;
};
```

---

### 原因

playsinline 属性をつけていなかったことが原因

<br>

playsinline 属性とは

- インライン = 全画面表示で動画を再生せず、要素の範囲内で動画を再生する

$\color{red} iOSのSafariではplaysinline属性を付与していないとautoplay属性を有効にしていても自動再生されない$

<br>
<br>

ちなみに、動画の全画面表示とは以下のような状態

<img src="../img/issues/issues-video-tag_1.PNG" />

---

### 解決策

video タグに playsinline 属性を追加する

```js
// tsxファイル
const BgVideo = () => {
    return <video
              className="video"
              src="/sample_video.mp4"
              autoPlay
              loop
              muted
              playsInline // 追加
              ></video>;
};
```