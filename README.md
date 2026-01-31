# Lark Onboarding Proposal System

Lark（飛書）導入コストシミュレーター - 企業が複数の生産性ツールからLarkへ移行する際のROIとコストメリットを計算するWebベースツールです。

## 概要

このツールは、複数のSaaSツールをLarkに統合することによるコスト削減と生産性向上を可視化し、経営層向けの導入提案書を自動生成するシステムです。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フロントエンド | Vanilla JavaScript（フレームワーク不使用） |
| スタイリング | Tailwind CSS (CDN) + カスタムCSS |
| アイコン | Base64エンコードされたデータURL |
| デプロイ | スタティックサイト（GitHub Pages対応） |
| フォント | Inter, Outfit (Google Fonts) |

## 主要機能

### 1. インタラクティブ計算機
- 従業員数入力（スライダー＋数値入力）
- 業種選択（9業種：IT、製造、金融、など）
- 4カテゴリ32ツール以上から既存ツールを選択

### 2. コスト分析
- 既存ツールの年間コスト計算
- Lark導入コストの試算
- ROI（投資収益率）の自動計算
- ツール切替による生産性ロスの定量化

### 3. レポート生成
- 経営層向け包括的な提案書自動生成
- コスト比較表
- 導入ロードマップの可視化
- PDF出力対応（印刷最適化CSS）

## プロジェクト構造

```
lark-onboarding-proposal/
├── index.html          # メインHTML
├── assets/
│   ├── css/
│   │   ├── main.css    # メインスタイルシート
│   │   └── print.css   # 印刷用スタイルシート
│   ├── js/
│   │   ├── config.js   # 設定・データ（業種、ツール定義）
│   │   ├── state.js    # アプリケーション状態管理
│   │   ├── main.js     # メインロジック・UIレンダリング
│   │   └── app.js.bak  # 旧単一ファイル（バックアップ）
│   ├── images/
│   │   └── lark_hero_background.png
│   └── logos/          # パートナー/サービスロゴ（32ファイル）
└── nojekyll.txt        # GitHub Pages用
```

## アーキテクチャ

**モジュール分割（リファクタリング済み）**

| ファイル | 役割 |
|---------|------|
| `config.js` | 業種リスト、ツールカテゴリ、Larkプラン定義 |
| `state.js` | アプリケーション状態（従業員数、選択ツール、画面状態など） |
| `main.js` | UIレンダリング、イベントハンドラー、計算ロジック |
| `main.css` | 一般スタイル、アニメーション、カスタムスクロールバー |
| `print.css` | 印刷用レイアウト、ページ制御、A4最適化 |

## 対応競合ツール

| カテゴリ | ツール例 |
|---------|---------|
| コミュニケーション | Slack, Microsoft Teams, Zoom, Google Meet |
| ドキュメント | Notion, Confluence, SharePoint |
| ワークフロー | Calendly, Docusign |
| ストレージ | OneDrive, Dropbox, Google Drive |
| その他 | Salesforce, Asana, Trello, HubSpot |

## アプリケーションモード

| モード | 説明 |
|-------|------|
| Webアプリモード | インタラクティブな計算機UI |
| レポート表示モード | 印刷/PDF用の提案書表示 |

## デザイン

- ブランドカラー：Larkブルー（#0066FF）とティール（#00D0B6）
- 日本語ローカライズ済みUI
- モバイルファーストのレスポンシブデザイン
- 印刷最適化されたスタイルシート

## ローカルで実行

### Python（標準ライブラリ）

```bash
# プロジェクトディレクトリで実行
python3 -m http.server 8080

# ブラウザでアクセス
# http://localhost:8080
```

### Node.js

```bash
# npxを使用（インストール不要）
npx serve

# またはポート指定
npx serve -l 8080
```

### VS Code Live Server

1. 「Live Server」拡張機能をインストール
2. `index.html` を右クリック
3. 「Open with Live Server」を選択

## 使い方

1. ローカルサーバーを起動し、ブラウザでアクセス
2. 従業員数と業種を入力
3. 現在使用しているツールを選択
4. コスト分析とROIを確認
5. 提案書を生成・PDF出力

## デプロイ

スタティックサイトホスティング（GitHub Pages、Netlify、Vercelなど）で即座に公開可能です。

```bash
# GitHub Pagesの場合
git push origin main
```

## ライセンス

（必要に応じて追加してください）
