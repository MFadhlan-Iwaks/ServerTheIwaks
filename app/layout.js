import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://theiwaks.example.com";
const SITE_TITLE = "Server the IWAKS — Survival Vanilla Java & Bedrock";
const SITE_DESC =
  "Server Minecraft survival vanilla yang santai, damai, dan berfokus pada kreativitas. Berdiri sejak Januari 2026. Cross-platform Java & Bedrock!";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | the IWAKS",
  },
  description: SITE_DESC,
  keywords: [
    "Minecraft", "server Minecraft", "survival vanilla", "Java Edition",
    "Bedrock Edition", "the IWAKS", "server Indonesia", "cross-platform",
  ],
  authors: [{ name: "the IWAKS" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "the IWAKS",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#4CAF50",
};

const themeBootstrap = `
(function(){try{var t=localStorage.getItem('iwaks-theme');if(t==='mewah'){document.documentElement.dataset.theme='mewah';document.body&&(document.body.dataset.theme='mewah');}}catch(e){}})();
`.trim();

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
