# IKEIKEN.lab コーポレートサイト

株式会社医療継承研究所（IKEIKEN.lab）のコーポレートサイト。Next.js（App Router）+ Tailwind CSS + Motion で構築。

## セットアップ

```bash
npm install
cp .env.example .env.local  # RESEND_API_KEY を設定（未設定でも動作、送信内容はログ出力のみ）
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## ディレクトリ構成

```
app/                 各ページ（/, /product, /about, /team, /contact, /api/contact）
components/
  layout/            Header, Footer
  motion/            スクロール演出の共通プリミティブ（FadeIn, Reveal, Parallax, StickyPin）
  sections/          ページごとのセクションコンポーネント
  ui/                Button, Container, SectionHeading, Logo など
content/             コピー文言（site.ts）・チームメンバー情報（team.ts）
lib/                 バリデーション(zod)・Resendクライアント・モーショントークン
public/brand/        ロゴ・製品写真の配置先（現在プレースホルダー）
```

## 今後差し替えが必要な素材

- `public/brand/` にロゴ画像・製品写真を配置し、`components/ui/Logo.tsx` 等のプレースホルダーを差し替え
- `content/team.ts` にチームメンバーの実データ（氏名・役職・写真・経歴）を反映
- `content/site.ts` の `aboutPage.overview` にある会社概要（所在地・設立・代表者）を確定情報に更新
- `.env.local` に `RESEND_API_KEY` を設定し、お問い合わせフォームの実送信を有効化

## コマンド

- `npm run dev` — 開発サーバー起動
- `npm run build` — 本番ビルド（型チェック含む）
- `npm run lint` — ESLint

## デプロイ

Vercel での デプロイを想定しています。デプロイ時は環境変数 `RESEND_API_KEY` の設定を忘れずに。
