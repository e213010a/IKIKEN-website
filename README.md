# IKEIKEN Labs コーポレートサイト

株式会社医療継承研究所（IKEIKEN Labs）のコーポレートサイト。Next.js（App Router）+ TypeScript + Tailwind CSS + Motion で構築。英語をデフォルトロケールとし、日本語は `/ja` 配下で提供する多言語構成。

## セットアップ

```bash
npm install
cp .env.example .env.local  # 環境変数を設定（未設定でも動作するようフォールバックあり。詳細は下記「環境変数」参照）
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます（英語）。日本語版は [http://localhost:3000/ja](http://localhost:3000/ja)。

## 環境変数

`.env.example` を参照。

| 変数 | 用途 | 未設定時の挙動 |
|---|---|---|
| `RESEND_API_KEY` | お問い合わせフォームの送信（[Resend](https://resend.com)） | 実送信されず、送信内容がサーバーログに出力されるのみ |
| `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` | News・Team・沿革の取得元（[microCMS](https://microcms.io)） | 各セクションが空リストとして表示される（ビルド・表示は落ちない） |

## ディレクトリ構成

```
app/
  [locale]/            各ページ（EN/JPで共通。/, /our-business, /about, /recruit, /news, /news/[id], /contact）
  api/contact/         お問い合わせフォームのAPI Route（ロケール非依存）
components/
  layout/              Header, Footer
  motion/              スクロール演出の共通プリミティブ（FadeIn, FloatIn, Reveal, StickyPin）
  sections/            ページごとのセクションコンポーネント
  ui/                  Button, Container, SectionHeading, Logo, LocaleSwitch など
content/
  site.en.ts / site.ja.ts   ロケール別のコピー文言
  site.ts                   ロケール選択・localizeHref等のヘルパー（Locale型はここ）
lib/
  microcms.ts          microCMSクライアント（News/Team/沿革の取得）
  validation.ts        お問い合わせフォームのバリデーション(zod)
  resend.ts            Resendクライアント
  motion.ts            モーションのeasing/durationトークン
proxy.ts               ロケールルーティング（英語はプレフィックスなし、日本語は/jaへ書き換え）
public/                画像・アイコン等の静的アセット
```

## コンテンツ管理（microCMS）

News・Team・沿革は microCMS で非エンジニアが編集できます。各エンドポイントのフィールド構成:

**`news`（リスト形式）**
| フィールドID | 種類 |
|---|---|
| `title_JP` / `title_EN` | テキスト |
| `date` | テキスト（例: `2026-08-05`） |
| `category` | 複数選択セレクト |
| `body_JP` / `body_EN` | リッチエディタ（任意。設定すると詳細ページが生成される） |
| `image` | 画像（任意） |

**`member`（リスト形式）**
| フィールドID | 種類 |
|---|---|
| `name_JP` / `name_EN` | テキスト |
| `role_JP` / `role_EN` | テキスト |
| `bio_JP` / `bio_EN` | テキスト（複数行） |
| `photo` | 画像（任意） |



いずれも1件のエントリで日英両方のフィールドを管理する構成です。

## 今後差し替えが必要な素材

- `content/site.en.ts` の `aboutPage.overview` にある会社概要（所在地・設立・代表者など）を確定情報に更新
- `.env.local`（および本番のVercel環境変数）に `RESEND_API_KEY` を設定し、お問い合わせフォームの実送信を有効化

## コマンド

- `npm run dev` — 開発サーバー起動
- `npm run build` — 本番ビルド（型チェック含む）
- `npm run lint` — ESLint

## デプロイ

Vercel でのデプロイを想定しています。デプロイ時は環境変数（`RESEND_API_KEY` / `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY`）をVercelのProject Settings → Environment Variablesに設定してください。
