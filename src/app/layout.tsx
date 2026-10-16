import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "p.ramazanakyol.me — Discord Dynamic Preview Generator",
  description: "Dynamic Open Graph image and preview embed generator for Discord. Share custom stylish preview cards with clean URLs.",
  metadataBase: new URL("https://p.ramazanakyol.me"),
  openGraph: {
    title: "p.ramazanakyol.me — Discord OG Generator",
    description: "Generate instant dynamic preview embeds for Discord with custom text and subtitles.",
    images: ["/api/og?title=p.ramazanakyol.me&subtitle=Discord+OG+Generator"],
  },
  twitter: {
    card: "summary_large_image",
    title: "p.ramazanakyol.me — Discord OG Generator",
    description: "Generate instant dynamic preview embeds for Discord with custom text and subtitles.",
    images: ["/api/og?title=p.ramazanakyol.me&subtitle=Discord+OG+Generator"],
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
