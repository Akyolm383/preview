"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Zap,
  Globe2,
  Code2,
  Share2,
  MessageCircle,
  Layers,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { formatTurkishText } from "@/lib/turkish";
import { getThemeConfig } from "@/lib/platform";

export default function Home() {
  const [slugText, setSlugText] = useState("merhaba");
  const [subtitle, setSubtitle] = useState("");
  const [theme, setTheme] = useState<string>("auto");
  const [platform, setPlatform] = useState<"discord" | "whatsapp" | "twitter" | "instagram">("discord");
  const [copied, setCopied] = useState(false);

  // Active theme is automatically determined by platform tab unless user locks a specific theme
  const effectiveTheme = theme === "auto" ? platform : theme;
  const themeConfig = getThemeConfig(effectiveTheme);
  const spineColor = themeConfig.spineClass;

  // Compute shareable URL with + for spaces
  const domain = "p.ramazanakyol.me";
  const toPlusSyntax = (str: string) => {
    return str
      .trim()
      .split(/\s+/)
      .map((part) => encodeURIComponent(part))
      .join("+");
  };

  const cleanSlug = toPlusSyntax(slugText) || "merhaba";
  const cleanSubtitle = toPlusSyntax(subtitle);

  let shareablePath = `/${cleanSlug}`;
  if (cleanSubtitle) {
    shareablePath += `?${cleanSubtitle}`;
    if (theme !== "auto") {
      shareablePath += `&theme=${theme}`;
    }
  } else if (theme !== "auto") {
    shareablePath += `?theme=${theme}`;
  }

  const fullShareUrl = `https://${domain}${shareablePath}`;

  // Image source for real-time preview
  const liveOgImageUrl = `/og.png?title=${cleanSlug}${
    cleanSubtitle ? `&sub=${cleanSubtitle}` : ""
  }&theme=${effectiveTheme}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullShareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isTr = slugText.includes("?tr") || subtitle.includes("?tr");
  const renderedTitle = formatTurkishText(slugText || "merhaba", isTr);
  const renderedSubtitle = formatTurkishText(subtitle, isTr);

  // Clean, fun, safe-for-production presets
  const presetList = [
    { text: "merhaba", sub: "dunya" },
    { text: "c_ok+g_uzel", sub: "harika" },
    { text: "anlad_im", sub: "kral" },
    { text: "gunaydin", sub: "herkese?tr" },
    { text: "yeni+proje", sub: "v2.0" },
    { text: "tamam abi", sub: "anladık" },
  ];

  return (
    <main className="min-h-screen bg-obsidian text-text-high flex flex-col justify-between selection:bg-blurple selection:text-white relative overflow-hidden">
      {/* Background radial ambient glow & blueprint grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blurple/12 via-emerald/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 blueprint-grid pointer-events-none -z-10 opacity-60" />

      {/* 1. Floating Pill Navigation */}
      <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 pt-2">
        <nav className="max-w-6xl mx-auto rounded-full px-5 sm:px-6 py-3 bg-[#0F1117]/85 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blurple to-emerald/80 flex items-center justify-center text-white font-bold text-sm shadow-glow">
              P
            </div>
            <span className="font-headline font-bold text-base sm:text-lg text-white tracking-tight">
              p.ramazanakyol.me
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono bg-white/5 text-text-sec border border-white/10 font-medium">
              <Sparkles className="w-3 h-3 text-blurple" />
              Dynamic Social OG Engine
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-text-muted">
              <span>Discord</span>
              <span>•</span>
              <span>WhatsApp</span>
              <span>•</span>
              <span>X (Twitter)</span>
              <span>•</span>
              <span>Instagram</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-xs font-mono text-emerald">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="font-semibold">Edge Global Ready</span>
            </div>
          </div>
        </nav>
      </header>

      {/* 2. Hero & Interactive Workbench (Asymmetric Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 w-full">
        {/* Hero Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-panel border border-white/10 text-xs text-text-sec mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald" />
            <span className="font-mono text-[11px]">Sıfır Yapılandırma • Anında Önizleme Linki</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight leading-tight">
            Evrensel Sosyal Medya <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blurple via-emerald to-white bg-clip-text text-transparent">
              Dinamik Önizleme Stüdyosu
            </span>
          </h1>
          <p className="text-sm sm:text-base text-text-sec mt-3 leading-relaxed">
            Tek bir URL ile Discord, WhatsApp, X ve Instagram için platformun kendi tasarım diliyle optimize edilmiş Open Graph kartları üretin.
          </p>
        </div>

        {/* Workbench Layout (5 cols left, 7 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Embed Configuration (5 cols) */}
          <div className="lg:col-span-5 bg-surface-panel rounded-2xl border border-surface-border p-6 shadow-2xl specular-border relative">
            <div className="mb-5 pb-4 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-base font-headline font-bold text-white tracking-tight">
                  Önizleme Yapılandırması
                </h2>
                <p className="text-xs text-text-muted mt-0.5">
                  Metni yazın, linkiniz ve tüm platform önizlemeleriniz anında üretilsin.
                </p>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-surface-1 px-2.5 py-1 rounded text-emerald border border-emerald/20 font-semibold">
                Live Studio
              </span>
            </div>

            {/* Inputs Container */}
            <div className="space-y-4">
              {/* Main Slug Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    Ana Metin (URL Slug)
                  </label>
                  <span className="text-[10px] font-mono text-text-muted">
                    Boşluklar için <code className="text-white bg-white/10 px-1 py-0.5 rounded">+</code> destekli
                  </span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 font-mono text-sm text-text-muted select-none">
                    /
                  </span>
                  <input
                    type="text"
                    value={slugText}
                    onChange={(e) => setSlugText(e.target.value)}
                    placeholder="merhaba veya harika proje"
                    className="w-full bg-surface-card border border-surface-border rounded-lg pl-8 pr-3.5 py-2.5 text-sm font-mono text-white placeholder-text-gutter focus:outline-none focus:border-blurple focus:ring-1 focus:ring-blurple transition-all"
                  />
                </div>
              </div>

              {/* Subtitle Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    Alt Başlık (Opsiyonel)
                  </label>
                  <span className="text-[10px] font-mono text-text-muted">
                    Syntax: <code className="text-emerald bg-white/10 px-1 py-0.5 rounded">?alt+yazı</code>
                  </span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 font-mono text-sm text-text-muted select-none">
                    ?
                  </span>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="dunya veya canlı yayında"
                    className="w-full bg-surface-card border border-surface-border rounded-lg pl-8 pr-3.5 py-2.5 text-sm font-mono text-white placeholder-text-gutter focus:outline-none focus:border-blurple focus:ring-1 focus:ring-blurple transition-all"
                  />
                </div>
              </div>

              {/* Quick Preset Tags */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-text-gutter mb-2">
                  Hızlı Örnekler
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {presetList.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSlugText(p.text);
                        setSubtitle(p.sub);
                      }}
                      className="px-2.5 py-1 rounded bg-surface-card border border-surface-border text-xs font-mono text-text-sec hover:text-white hover:border-blurple/50 transition-colors"
                    >
                      /{p.text.replace(/\s+/g, "+")}
                      {p.sub && <span className="text-text-muted">?{p.sub.replace(/\s+/g, "+")}</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Mode Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    Tema Modu
                  </label>
                  <span className="text-[10px] font-mono text-emerald flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3" />
                    {theme === "auto" ? "Otomatik Algılama Açık" : "Özel Tema Sabit"}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("auto")}
                    className={`col-span-2 sm:col-span-4 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                      theme === "auto"
                        ? "bg-emerald/15 border-emerald text-emerald font-semibold shadow-glow-emerald"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>✨ Otomatik Platform Teması (Discord / WhatsApp / X / Instagram)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("blurple")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                      theme === "blurple"
                        ? "bg-blurple/20 border-blurple text-white shadow-glow"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blurple" />
                    <span>Discord</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("whatsapp")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                      theme === "whatsapp"
                        ? "bg-[#25D366]/20 border-[#25D366] text-[#25D366] shadow-glow-emerald"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("twitter")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                      theme === "twitter"
                        ? "bg-white/20 border-white text-white"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>X (Twitter)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("instagram")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                      theme === "instagram"
                        ? "bg-[#E1306C]/20 border-[#E1306C] text-[#E1306C] shadow-glow-instagram"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E1306C]" />
                    <span>Instagram</span>
                  </button>
                </div>
              </div>

              {/* Shareable Endpoint Box */}
              <div className="pt-2">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Paylaşılabilir Sosyal Medya Linki
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={fullShareUrl}
                    className="flex-1 bg-surface-card border border-surface-border rounded-lg px-3 py-2.5 text-xs font-mono text-emerald select-all focus:outline-none"
                  />
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      copied
                        ? "bg-emerald text-black font-semibold shadow-glow-emerald"
                        : "bg-blurple hover:bg-blurple/90 text-white shadow-glow"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Instagram & Turkish Characters Guide Tip */}
              <div className="p-3.5 rounded-xl bg-surface-card/60 border border-surface-border/60 text-[11px] text-text-sec flex items-start gap-2.5">
                <span className="text-blurple font-bold text-sm leading-none">💡</span>
                <div className="leading-relaxed">
                  <span className="font-semibold text-white">Instagram &amp; Mobil Sohbet İpucu:</span>
                  <p className="mt-0.5 text-text-muted">
                    Mobil sohbetlerde elle yazarken linkin bölünmemesi için şu pratik ASCII kısayollarını kullanabilirsiniz:
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5 font-mono text-[10px] text-emerald">
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">s_ &rarr; ş</span>
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">c_ &rarr; ç</span>
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">g_ &rarr; ğ</span>
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">i_ &rarr; ı</span>
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">o_ &rarr; ö</span>
                    <span className="bg-surface-1 px-1.5 py-0.5 rounded border border-white/5">u_ &rarr; ü</span>
                  </div>
                  <p className="mt-1 text-[10px] text-text-gutter">
                    Örn: <code>/s_eker</code> yazdığınızda kartta <strong>şeker</strong> olarak çıkar ve Instagram linki asla kesmez!
                  </p>
                </div>
              </div>
            </div>

            {/* Performance status */}
            <div className="mt-5 pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-gutter">
              <span className="flex items-center gap-1.5 text-emerald font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                Edge Global Cache Enabled
              </span>
              <span>v3.0.0-bento</span>
            </div>
          </div>

          {/* Right Column: Multi-Platform Chat Simulator (7 cols) */}
          <div className="lg:col-span-7 bg-surface-panel rounded-2xl border border-surface-border p-6 shadow-2xl specular-border relative">
            {/* Platform Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-1.5 bg-surface-1 p-1 rounded-xl border border-surface-border">
                <button
                  type="button"
                  onClick={() => setPlatform("discord")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    platform === "discord"
                      ? "bg-blurple text-white shadow-glow"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  Discord
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform("whatsapp")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    platform === "whatsapp"
                      ? "bg-[#25D366] text-black font-semibold shadow-glow-emerald"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform("twitter")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    platform === "twitter"
                      ? "bg-white text-black font-semibold"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  X (Twitter)
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform("instagram")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    platform === "instagram"
                      ? "bg-[#E1306C] text-white font-semibold shadow-glow-instagram"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  Instagram
                </button>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider bg-surface-1 px-3 py-1.5 rounded-full text-text-sec border border-surface-border font-semibold">
                {platform === "discord"
                  ? "Discord Rich Embed"
                  : platform === "whatsapp"
                  ? "WhatsApp Graph Card"
                  : platform === "twitter"
                  ? "X Large Summary Card"
                  : "Instagram Social Card"}
              </span>
            </div>

            {/* --- 1. DISCORD SIMULATOR VIEW --- */}
            {platform === "discord" && (
              <div className="flex items-start gap-3.5 bg-[#313338] p-4 rounded-xl border border-white/5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="/images/avatar.png"
                    alt="p.ramazanakyol"
                    width={40}
                    height={40}
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">p.ramazanakyol</span>
                    <span className="text-[10px] bg-blurple text-white px-1.5 py-0.2 rounded font-mono font-medium">
                      BOT
                    </span>
                    <span className="text-xs text-text-gutter">Bugün saat 17:01</span>
                  </div>

                  <p className="text-sm text-text-sec mt-1">
                    Discord&apos;a linki attığında tam olarak şu şekilde görünecek:
                  </p>

                  <p className="text-xs font-mono text-blurple hover:underline mt-0.5 break-all cursor-pointer">
                    {fullShareUrl}
                  </p>

                  {/* Discord Embed Card */}
                  <div className="mt-3 relative flex rounded bg-[#2B2D31] border border-white/5 overflow-hidden pl-3 py-3 pr-4 shadow-lg">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${spineColor}`} />

                    <div className="w-full">
                      <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider font-semibold mb-1">
                        p.ramazanakyol.me embed studio
                      </p>

                      <h3 className="text-base font-bold text-white mb-0.5">
                        {renderedTitle || "merhaba"}
                      </h3>

                      {renderedSubtitle && (
                        <p className="text-xs text-text-sec mb-2">{renderedSubtitle}</p>
                      )}

                      <div className="mt-2 rounded overflow-hidden border border-white/10 bg-black aspect-[1200/630] relative w-full group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={liveOgImageUrl}
                          alt={slugText}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-text-gutter font-mono">
                        <span>p.ramazanakyol.me — Edge Rendered</span>
                        <a
                          href={shareablePath}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blurple hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>Sayfayı Aç</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- 2. WHATSAPP SIMULATOR VIEW --- */}
            {platform === "whatsapp" && (
              <div className="p-4 rounded-xl bg-[#0b141a] border border-[#202c33]">
                <div className="max-w-md ml-auto bg-[#005c4b] text-white rounded-2xl rounded-tr-none p-2.5 shadow-md relative">
                  {/* WhatsApp Link Card Preview */}
                  <div className="rounded-xl bg-[#025141] overflow-hidden border border-[#0b141a]/40 mb-1.5">
                    <div className="aspect-[1200/630] w-full bg-black relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={liveOgImageUrl}
                        alt={slugText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {renderedTitle || "merhaba"}
                      </h4>
                      {renderedSubtitle && (
                        <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                          {renderedSubtitle}
                        </p>
                      )}
                      <p className="text-[11px] text-[#25D366] font-mono mt-1 font-semibold">
                        p.ramazanakyol.me
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-emerald-300 underline break-all px-1">
                    {fullShareUrl}
                  </p>

                  <div className="flex items-center justify-end gap-1 text-[10px] text-white/60 mt-1 px-1">
                    <span>17:01</span>
                    <span className="text-[#53bdeb] font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            )}

            {/* --- 3. X / TWITTER SIMULATOR VIEW --- */}
            {platform === "twitter" && (
              <div className="p-4 rounded-xl bg-black border border-[#2f3336]">
                <div className="flex items-start gap-3 mb-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image
                      src="/images/avatar.png"
                      alt="Ramazan Akyol"
                      width={40}
                      height={40}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="font-bold text-white">Ramazan Akyol</span>
                      <span className="text-xs text-[#71767b]">@p_ramazanakyol • Şimdi</span>
                    </div>
                    <p className="text-xs text-[#e7e9ea] mt-1 font-mono break-all">
                      {fullShareUrl}
                    </p>
                  </div>
                </div>

                {/* X Large Image Card */}
                <div className="mt-3 rounded-2xl overflow-hidden border border-[#2f3336] bg-[#16181c] group">
                  <div className="aspect-[1200/630] w-full bg-black relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={liveOgImageUrl}
                      alt={slugText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-[#71767b] font-mono">
                      p.ramazanakyol.me
                    </p>
                    <h4 className="text-sm font-semibold text-white mt-0.5 line-clamp-1">
                      {renderedTitle || "merhaba"}
                    </h4>
                    {renderedSubtitle && (
                      <p className="text-xs text-[#71767b] line-clamp-1 mt-0.5">
                        {renderedSubtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* --- 4. INSTAGRAM SIMULATOR VIEW --- */}
            {platform === "instagram" && (
              <div className="p-4 rounded-xl bg-black border border-[#262626]">
                <div className="max-w-md ml-auto bg-[#262626] text-white rounded-2xl p-2.5 shadow-md relative">
                  {/* Instagram DM Link Card */}
                  <div className="rounded-xl overflow-hidden border border-white/10 mb-1.5 bg-[#121212]">
                    <div className="aspect-[1200/630] w-full bg-black relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={liveOgImageUrl}
                        alt={slugText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E1306C]" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#E1306C] font-mono">
                          Instagram Story &amp; DM
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {renderedTitle || "merhaba"}
                      </h4>
                      {renderedSubtitle && (
                        <p className="text-xs text-[#a8a8a8] line-clamp-1 mt-0.5">
                          {renderedSubtitle}
                        </p>
                      )}
                      <p className="text-[11px] text-[#737373] font-mono mt-1 font-semibold">
                        p.ramazanakyol.me
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[#E1306C] underline break-all px-1">
                    {fullShareUrl}
                  </p>

                  <div className="flex items-center justify-end text-[10px] text-white/50 mt-1 px-1">
                    <span>Gönderildi • 17:01</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Lower Bento Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-6">
          <h2 className="text-xl font-headline font-bold text-white tracking-tight">
            Geliştirici Altyapısı &amp; Mimari Standartlar
          </h2>
          <p className="text-xs text-text-muted mt-0.5">
            Tüm sosyal medya botları, arama motorları ve mobil sohbetler için optimize edilmiş tam uyumlu altyapı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-panel rounded-2xl border border-surface-border p-5 hover:border-white/20 transition-all specular-border">
            <div className="w-10 h-10 rounded-xl bg-emerald/15 border border-emerald/30 flex items-center justify-center text-emerald mb-3.5 shadow-glow-emerald">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-headline font-bold text-white mb-1.5">
              &lt;15ms Edge Cache Latency
            </h3>
            <p className="text-xs text-text-sec leading-relaxed">
              Vercel Edge Network ve Cloudflare CDN üzerinde <code>Cache-Control: public, max-age=31536000, immutable</code> başlıklarıyla küresel mikrosaniyelik TTFB hızı.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-panel rounded-2xl border border-surface-border p-5 hover:border-white/20 transition-all specular-border">
            <div className="w-10 h-10 rounded-xl bg-blurple/15 border border-blurple/30 flex items-center justify-center text-blurple mb-3.5 shadow-glow">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-headline font-bold text-white mb-1.5">
              Akıllı Crawler Algılama Motoru
            </h3>
            <p className="text-xs text-text-sec leading-relaxed">
              Gelen botun User-Agent kimliğini anında tanır. Discordbot&apos;a mor, WhatsApp&apos;a yeşil, X&apos;e siyah-beyaz, Instagram&apos;a pembe temayı sıfır parametreyle uygular.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-panel rounded-2xl border border-surface-border p-5 hover:border-white/20 transition-all specular-border">
            <div className="w-10 h-10 rounded-xl bg-instagram/15 border border-instagram/30 flex items-center justify-center text-instagram mb-3.5 shadow-glow-instagram">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-headline font-bold text-white mb-1.5">
              ASCII-Safe Türkçe Karakter Motoru
            </h3>
            <p className="text-xs text-text-sec leading-relaxed">
              Instagram DM ve mobil mesajlaşma uygulamalarındaki link bölünmelerini engelleyen <code>s_</code>, <code>c_</code>, <code>g_</code> ASCII kısayolları ve güvenli URI çözümleyicisi.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="border-t border-surface-border py-6 bg-surface-panel/40 backdrop-blur-md mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-gutter">
          <p className="font-mono">
            © 2026 p.ramazanakyol.me • Universal Social Preview Engine • Safe for Production.
          </p>
          <div className="flex items-center gap-5 font-mono text-[11px]">
            <span className="text-text-muted hover:text-white transition-colors">Discord</span>
            <span className="text-text-muted hover:text-white transition-colors">WhatsApp</span>
            <span className="text-text-muted hover:text-white transition-colors">X (Twitter)</span>
            <span className="text-text-muted hover:text-white transition-colors">Instagram</span>
            <span className="text-text-muted hover:text-white transition-colors">Telegram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
