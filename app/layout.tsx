import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.company.brand} | ${site.company.tagline}`,
    template: `%s | ${site.company.brand}`,
  },
  description: site.hero.body,
  openGraph: {
    title: `${site.company.brand} | ${site.company.tagline}`,
    description: site.hero.body,
    siteName: site.company.brand,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout is the correct place for this; the rule only understands the Pages Router */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&family=Shippori+Mincho:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
