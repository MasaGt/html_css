### WAI-ARIA　とは

- 目や耳の不自由な方達にもWebサイトが使いやすくなるよう考慮された、HTMLの補足的な仕様のことらしい

- 例: div タグでボタンを実装した場合、 web ページの読み上げ機能でうまく読み上げてくれるのか?

- 

---

### Role 属性とは

- 要素に指定できるアトリビュート(属性)

- グローバル属性のため、HTML5の要素であればどんな要素にも指定可能

- role 属性が設定された要素は、読み上げ機能 (VoiceOver) 利用時に設定されたロールが読み上げられる

```html
<nav role="navigation">
</nav>
```

- role 属性には　何でもかんでも好きな値を設定していいわけではなく、**決められえている属性値を設定する**

- ロールには大まかな分類として以下のようなロール群がある

    - ランドマークロール
        - navigation など、ページ全体のレイアウトに関するロール

    - 文書構造ロール (Document Structure Role)
        - コンテンツの一部の構造を説明するためのロール
        - **このロールは使用すべきではない**、その代わり、適切なタグを使って構造を記述していくことが求められる
        - 文章構造ロールに対応する html タグがない場合に限り、このロール群に属する値を設定できる

    ```html
    <div role="math">
        1 + 1 = 2
    <div>
    ```

    - ウィジェットロール (Widget Role)
        - UI を表すためのロール
        - 文書構造ロールと同様に、まずは適切な html タグを使うことが優先される。　もしなかったら、このロール群に属する値を設定する　
    
    ```html
    <!-- checkboxでスイッチの要素を作った場合 -->
    <input
        id="switch"
        type="checkbox"
        role="switch"
    />
    ```

- さらに詳しくは以下のサイトを参照
    - [WAI-ARIAのrole属性一覧](https://qiita.com/nezurika/items/eac689a97895a27b8791)
    - [公式(日本語)ページ](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles)
    
---

### aria-lable 属性とは

- 要素に指定できるアトリビュート(属性)

- グローバル属性のため、HTML5の要素であればどんな要素にも指定可能

- 通常は aria-lable 属性が web ページに与える影響は無い

- 読み上げ機能 ( VoiceOver ) を利用したときなど、その要素は設定された aria-lable の値が読み上げられる

```html
<body>
    <p aria-lable="VoiceOver時はこっちも読み上げられる">テキスト(VoiceOver時も読み上げられる)</p>
</body>
```

---

### aria-describedby 属性とは

- aria-describedby が指定されている要素の解説を行っている要素を指定できる属性
    - aria-describedby には、その要素を解説している要素の id 名を渡す

- 下記の例では、 p 要素は button 要素の説明をしている
    - button 要素の aria-describedby に p 要素の id を指定することで、 p 要素は button 要素の解説をしていると関連づけることができる
```html
<button aria-describedby="button-desc">submit</button>
<p id="button-desc">submit the form to create an user account</p>
```

---

### aria-live 属性とは

- aria-live を指定した要素に動的な更新があったとき、スクリーンリーダーに読み上げよう伝える機能

- 主な使い所としては、フォームのエラー項目に aria-live を指定する
    - バリデーションチェックが失敗し、クライアント側でエラー項目を動的に設定した場合、読み上げの対象になる

- aria-live に指定できるのは以下の3つの値
    - "off": 要素が更新されても、ユーザーに伝達しない=読み上げられない
    - "polite": ユーザーの操作がアクティブでは無いタイミングなどにユーザーに伝達する
    - "assertive": 要素が更新されたら即座にユーザーに伝達する

```htlm
<form>
    <input
        type="number"
    />

    <!-- このdiv要素が更新されたらユーザーに伝達される -->
    <div
        class="input-error"
        aria-live="polite"
    >
        please input only numbers
    </div>

    <button type="submit">submit</button>
</form>
```

---

### aria-atomic 属性とは

- aria-atomic を指定した要素が更新された時、更新箇所だけユーザーに伝達するのではなく、** aria-atomic を指定した要素の子要素も伝達するよう**指定する機能

- aria-atomic には以下の2つの値を指定できる
    - true: aria-atomic を指定した要素の全体をユーザーに伝達する
    - false: 変更箇所のみユーザーに指定する

```html
<div aria-atomic="true">
    <h1>Title</h1>

    <!-- もしlabel要素が更新された場合、div要素全体を更新箇所としてユーザーに伝達する -->
    <label>message</label>
<div>
```