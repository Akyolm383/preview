import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "p.ramazanakyol.me — Universal Social Link Preview Generator",
  description: "Dynamic Open Graph cards for Discord, WhatsApp, X (Twitter), Telegram & Instagram. Share custom preview embeds with clean URLs.",
  metadataBase: new URL("https://p.ramazanakyol.me"),
  alternates: {
    canonical: "https://p.ramazanakyol.me",
  },
  openGraph: {
    title: "p.ramazanakyol.me — Universal Social OG Generator",
    description: "Generate instant dynamic preview embeds for Discord, WhatsApp, X & Telegram with custom text.",
    url: "https://p.ramazanakyol.me",
    siteName: "p.ramazanakyol.me",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "https://p.ramazanakyol.me/api/og?title=p.ramazanakyol.me&subtitle=Universal+Social+Preview",
        width: 1200,
        height: 630,
        alt: "p.ramazanakyol.me Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "p.ramazanakyol.me — Universal Social OG Generator",
    description: "Generate instant dynamic preview embeds for Discord, WhatsApp, X & Telegram with custom text.",
    images: ["https://p.ramazanakyol.me/api/og?title=p.ramazanakyol.me&subtitle=Universal+Social+Preview"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-obsidian text-text-high antialiased selection:bg-blurple selection:text-white">
        {children}
      </body>
    </html>
  );
}
