<p align="center">
  <a href="./README.md"> English </a> | <a href="./README.zh-CN.md"> 简体中文 </a> | 日本語
</p>

<h1 align="center"> Vuestic Admin </h1>

<p align="center">
  38+のカスタムUIコンポーネントと美しいデザインのVue.js無料管理画面テンプレート</br>
  開発者  <a href="https://epicmax.co">Epicmax</a>.
  デザイン <a href="#">Vasili Savitski</a>
</p>

<p align="center">
  <a href="https://vuestic.epicmax.co"> デモ </a> | <a href="[THEME_URL]"> 新しい白いテーマのデモ </a> | <a href="https://github.com/epicmaxco/vuestic-admin/wiki"> 説明書 </a>
</p>

<p align="center">
  <a href="https://vuestic.epicmax.co" target="_blank">
    <img src="https://i.imgur.com/RMchKNW.jpg" align="center" width="888px"/>
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/epicmaxco/vuestic-admin">
    <img src="https://img.shields.io/circleci/build/github/epicmaxco/vuestic-admin/master" alt="Circleci">
  </a>
</p>

<h2>
  <a href="[THEME_URL]" target="_blank">
    新しい白いテーマのデモ
  </a>
</h2>

<p align="center">
  <a href="[THEME_URL]" target="_blank">
    <img src="https://i.imgur.com/DnFcrjD.png" align="center" width="888px"/>
  </a>
</p>

## インストール方法

まず初めに、事前に必要なソフトが全てインストールされていることを確認してください。

- [Node.js](https://nodejs.org/en/) (>=8.9)
- [npm](https://www.npmjs.com/get-npm) バージョン 3+ (あるいは[yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)バージョン 1.16+) と[Git](https://git-scm.com/).

必要なソフトウェアがインストールされていることを確認できたら、次に示す簡単なステップに沿って Vuestic Admin をインストールして、ご使用ください。

```
# repoをクローン
$ git clone https://github.com/epicmaxco/vuestic-admin.git myproject

# appディレクトリに移動し、dependenciesをインストール
$ cd myproject

```

npm をご使用の方：

```
$ npm install

# localhost:8080（デフォルト）でホットリロードを使ってサーブ
$ npm run dev

# プロダクション用にビルド
$ npm run build

# プロダクション用にビルドして、バンドルアナライザーレポートを閲覧
$ npm run build --report
```

yarn をご使用の方：

```
$ yarn install

# localhost:8080（デフォルト）でホットリロードを使ってサーブ
$ yarn dev

# プロダクション用にビルド
$ yarn build

# プロダクション用にビルドして、バンドルアナライザーレポートを閲覧
$ yarn build --report
```

## 機能

[レスポンシブレイアウト](https://vuestic.epicmax.co/#/admin/dashboard) |
[チャート (Chart.js)](https://vuestic.epicmax.co/#/admin/statistics/charts) |
[プログレスバー](https://vuestic.epicmax.co/#/admin/statistics/progress-bars) |
[フォーム](https://vuestic.epicmax.co/#/admin/forms/form-elements) |
[セレクト](https://vuestic.epicmax.co/#/admin/forms/form-elements) |
[デートピッカー](https://vuestic.epicmax.co/#/admin/forms/form-elements) |
[チェックボックス・ラジオ](https://vuestic.epicmax.co/#/admin/forms/form-elements) |
[スタティックテーブル・データテーブル](https://vuestic.epicmax.co/#/admin/tables/data) |
[medium エディタ](https://vuestic.epicmax.co/#/admin/forms/medium-editor) |
[スムーズタイポグラフィ](https://vuestic.epicmax.co/#/admin/ui/typography) |
[ボタン](https://vuestic.epicmax.co/#/admin/ui/buttons) |
[折りたたみ](https://vuestic.epicmax.co/#/admin/ui/collapses) |
[カラーピッカー](https://vuestic.epicmax.co/#/admin/ui/color-pickers) |
[タイムライン](https://vuestic.epicmax.co/#/admin/ui/timelines) |
[トースト](https://vuestic.epicmax.co/#/admin/ui/notifications) |
[ツールチップ](https://vuestic.epicmax.co/#/admin/ui/popovers) |
[ポップオーバー](https://vuestic.epicmax.co/#/admin/ui/popovers) |
[アイコン](https://vuestic.epicmax.co/#/admin/ui/icons/) |
[スピナー](https://vuestic.epicmax.co/#/admin/ui/spinners) |
[モーダル](https://vuestic.epicmax.co/#/admin/ui/modals) |
[ファイルアップロード](https://vuestic.epicmax.co/#/admin/ui/file-upload) |
[チップ](https://vuestic.epicmax.co/#/admin/ui/chips) |
[ツリー](https://vuestic.epicmax.co/#/admin/ui/tree-view) |
[カード ](https://vuestic.epicmax.co/#/admin/ui/cards) |
[レーティング](https://vuestic.epicmax.co/#/admin/ui/rating) |
[スライダー](https://vuestic.epicmax.co/#/admin/ui/sliders) |
[チャット](https://vuestic.epicmax.co/#/admin/ui/chat) |
[マップ (MapLibre, Yandex, Leaflet, amMap)](https://vuestic.epicmax.co/#/admin/maps/maplibre-maps) |
[ログイン/登録ページテンプレート](https://vuestic.epicmax.co/#/auth/login) |
[404 ページテンプレート](https://vuestic.epicmax.co/#/admin/pages/404-pages) |
[i18n](https://vuestic.epicmax.co/#/admin/dashboard)

## ブラウザサポート

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## 支援メンバー

素晴らしい PR、課題、アイデアをご提供いただきいつもありがとうございます。[参加](https://github.com/epicmaxco/vuestic-admin/blob/master/.github/CONTRIBUTING.md)いただける方を常に受け付けています!

[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/0)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/0)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/1)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/1)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/2)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/2)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/3)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/3)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/4)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/4)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/5)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/5)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/6)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/6)[![](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/images/7)](https://sourcerer.io/fame/smartapant/epicmaxco/vuestic-admin/links/7)

## あなた方に仕事を依頼することはできますか？

はい！一声おかけください：[hello@epicmax.co](mailto:hello@epicmax.co) </br>
ぜひ一緒に仕事をしましょう！その他これまでやってきた仕事 - [epicmax.co](https://epicmax.co)

## ソーシャルネットワーク

Vuestic の最新ニュースを受け取ろう！[Twitter](https://twitter.com/epicmaxco)や [Facebook](https://facebook.com/epicmaxco)でフォローしてください。

## ライセンス

[MIT](https://github.com/epicmaxco/vuestic-admin/blob/master/LICENSE) license
