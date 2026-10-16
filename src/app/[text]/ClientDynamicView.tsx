"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Copy, Download, Share2, Sparkles } from "lucide-react";
import { getThemeConfig } from "@/lib/platform";

interface ClientDynamicViewProps {
  title: string;
  subtitle: string;
  theme: string;
  ogImageUrl: string;
}

export default function ClientDynamicView({
  title,
  subtitle,
  theme,
  ogImageUrl,
}: ClientDynamicViewProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const formatSlug = (str: string) => {
    return str
      .trim()
      .split(/\s+/)
      .map((part) => encodeURIComponent(part))
      .join("+");
  };

  const canonicalUrl = `https://p.ramazanakyol.me/${formatSlug(title)}${
    subtitle ? `?${formatSlug(subtitle)}` : ""
  }`;

  const [fullUrl, setFullUrl] = useState(canonicalUrl);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href.replace(/%20/g, "+"));
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const themeConfig = getThemeConfig(theme);
  const spineColor = themeConfig.spineClass;

  return (
    <main className="min-h-screen bg-obsidian text-text-high flex flex-col justify-between p-4 md:p-8">
      {/* Top Bar */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between pb-6 border-b border-surface-border/50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Oluşturucuya Dön</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
          <span className="text-xs font-mono text-emerald uppercase tracking-wider font-semibold">
            Discord Ready
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full my-auto py-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-1 border border-surface-border text-xs text-text-sec mb-6 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-blurple" />
          <span>Discord Canlı Önizleme Kartı</span>
        </div>

        {/* Discord Chat Simulator Card */}
        <div className="w-full max-w-2xl bg-surface-chat rounded-lg border border-surface-border/60 p-5 text-left shadow-2xl mb-8">
          {/* User message header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/avatar.png"
                alt="Ramazan"
                width={40}
                height={40}
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">p.ramazanakyol</span>
                <span className="text-[10px] bg-blurple text-white px-1.5 py-0.5 rounded font-mono font-medium">
                  BOT / APP
                </span>
                <span className="text-xs text-text-gutter">Bugün saat 15:24</span>
              </div>
              <p className="text-xs font-mono text-text-muted mt-0.5 break-all">
                {fullUrl}
              </p>
            </div>
          </div>

          {/* Discord Embed Container */}
          <div className="relative flex rounded bg-surface-card border border-white/5 overflow-hidden pl-3 py-3 pr-4">
            {/* Left Accent Spine */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${spineColor}`} />

            <div className="w-full">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider font-semibold mb-1">
                p.ramazanakyol.me
              </p>

              <h3 className="text-base font-bold text-white mb-1">{title}</h3>

              {subtitle && (
                <p className="text-xs text-text-sec mb-3">{subtitle}</p>
              )}

              {/* Dynamic Image Container */}
              <div className="mt-2 rounded overflow-hidden border border-white/10 bg-black aspect-[1200/630] relative w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ogImageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-text-gutter font-mono">
                <span>Discord Large Image Embed</span>
                <span>1200×630 PNG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-6 py-3 rounded font-medium text-sm transition-all duration-200 ${
              copied
                ? "bg-emerald text-black shadow-glow-emerald"
                : "bg-blurple hover:bg-blurple/90 text-white shadow-glow"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Link Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Paylaşım Linkini Kopyala</span>
              </>
            )}
          </button>

          <a
            href={ogImageUrl}
            download={`${title}-preview.png`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded bg-surface-1 border border-surface-border text-sm text-text-high hover:border-white/30 transition-all font-medium"
          >
            <Download className="w-4 h-4" />
            <span>Görseli İndir (PNG)</span>
          </a>

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-3 rounded bg-surface-1 border border-surface-border text-sm text-text-muted hover:text-white transition-all font-medium"
          >
            <span>Yeni Link Oluştur</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center py-4 border-t border-surface-border/50 text-xs text-text-gutter">
        <p>
          p.ramazanakyol.me • Vercel Edge Serverless • Powered by Next.js & Satori
        </p>
      </footer>
    </main>
  );
}
