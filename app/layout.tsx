import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteconfig } from "@/config/site";

const fontNotoSansJP = Noto_Sans_JP({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteconfig.name,
    template: `%s | ${siteconfig.name}`
  },
  description: siteconfig.description,
  keywords: ["Next.js", "React.js", "TailwindCSS", "shadcn/ui"],
  authors: [
    {
      name: "rikuriku",
      url: siteconfig.url,
    }
  ],
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteconfig.url,
    title: siteconfig.name,
    description: siteconfig.description,
    siteName: siteconfig.name,
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn("bg-background antialiased min-h-screen", fontNotoSansJP.className)}
      >
        {children}
      </body>
    </html>
  );
}
