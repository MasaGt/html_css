### ブロックレベルとインラインレベルの要素

- HTML5から新たなカテゴリーが導入され、HTML要素の分類としてのブロックレベル/インラインレベルは廃止された

- displayプロパティのblock/inline/inline-blockはまだ存在しており、有効

---

### block/inline/inline-blockの違い

**display: block**
- widthとheightの指定が可能
- widthの初期値: 親要素のwidthを引き継ぐ
- heightの初期値: コンテンツの高さ
- 改行が入る
- margineが効く

<br>

**display: inlines**
- インライン要素は文章の一部として扱われる
- widthとheightの指定ができない
- widthの初期値: コンテンツの幅
- heightの初期値: コンテンツの高さ
- 改行が入らない
- 上下のmergineが効かない
- 上下のpaddingが効くが、しない方がいい
<br>

**display: inline-block**
- インライン要素は文章の一部として扱われる
- widthとheightの指定ができる
- widthの初期値: 親要素のwidthを引き継ぐ
- heightの初期値: コンテンツの高さ
- 改行が入らない
- mergine/paddngが効く
