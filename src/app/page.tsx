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
  Terminal,
} from "lucide-react";

export default function Home() {
  const [slugText, setSlugText] = useState("siktir");
  const [subtitle, setSubtitle] = useState("");
  const [theme, setTheme] = useState<"blurple" | "crimson" | "emerald">("blurple");
  const [copied, setCopied] = useState(false);

  // Compute shareable URL with + for spaces
  const domain = "p.ramazanakyol.me";
  const toPlusSyntax = (str: string) => {
    return str
      .trim()
      .split(/\s+/)
      .map((part) => encodeURIComponent(part))
      .join("+");
  };

  const cleanSlug = toPlusSyntax(slugText) || "siktir";
  const cleanSubtitle = toPlusSyntax(subtitle);
  
  let shareablePath = `/${cleanSlug}`;
  if (cleanSubtitle) {
    shareablePath += `?${cleanSubtitle}`;
    if (theme !== "blurple") {
      shareablePath += `&theme=${theme}`;
    }
  } else if (theme !== "blurple") {
    shareablePath += `?theme=${theme}`;
  }

  const fullShareUrl = `https://${domain}${shareablePath}`;

  // Image source for real-time preview (pass formatted string so + becomes space in preview)
  const liveOgImageUrl = `/api/og?title=${cleanSlug}${
    cleanSubtitle ? `&sub=${cleanSubtitle}` : ""
  }&theme=${theme}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullShareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetList = [
    { text: "siktir", sub: "" },
    { text: "siktir", sub: "siktirme" },
    { text: "tamam abi", sub: "anladık" },
    { text: "aynen knk", sub: "aynen öyle" },
    { text: "helal olsun", sub: "şaşırtmadı" },
    { text: "404 not found", sub: "sayfa bulunamadı" },
  ];

  const spineColor =
    theme === "crimson"
      ? "bg-crimson"
      : theme === "emerald"
      ? "bg-emerald"
      : "bg-blurple";

  return (
    <main className="min-h-screen bg-obsidian text-text-high flex flex-col justify-between selection:bg-blurple selection:text-white">
      {/* 1. Header */}
      <header className="border-b border-surface-border/60 bg-surface-1/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono font-bold text-base sm:text-lg text-white tracking-tight">
              p.ramazanakyol.me
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-blurple/15 text-blurple border border-blurple/30 font-medium">
              <Sparkles className="w-3 h-3" />
              Discord OG Generator
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded bg-surface-card border border-surface-border text-xs font-mono text-emerald">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="hidden sm:inline">Vercel Edge Ready</span>
              <span className="sm:hidden">Edge Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero & Interactive Workbench */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Embed Configuration (5 cols) */}
          <div className="lg:col-span-5 bg-surface-1 rounded-lg border border-surface-border p-6 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Embed Yapılandırması
              </h2>
              <p className="text-xs text-text-muted mt-1">
                İstediğin metni ve alt başlığı yaz, Discord önizlemesi anında güncellensin.
              </p>
            </div>

            {/* Main Text Input */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Ana Metin (URL Slug)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 font-mono text-xs text-text-gutter select-none">
                    /
                  </span>
                  <input
                    type="text"
                    value={slugText}
                    onChange={(e) => setSlugText(e.target.value)}
                    placeholder="siktir"
                    className="w-full bg-surface-card border border-surface-border rounded pl-7 pr-3 py-2.5 text-sm font-mono text-white placeholder-text-gutter focus:outline-none focus:border-blurple focus:ring-1 focus:ring-blurple transition-all"
                  />
                </div>
              </div>

              {/* Subtitle Input */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Alt Başlık (Opsiyonel: <span className="text-text-sec">?siktirme</span>)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 font-mono text-xs text-text-gutter select-none">
                    ?
                  </span>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="siktirme"
                    className="w-full bg-surface-card border border-surface-border rounded pl-7 pr-3 py-2.5 text-sm font-mono text-white placeholder-text-gutter focus:outline-none focus:border-blurple focus:ring-1 focus:ring-blurple transition-all"
                  />
                </div>
              </div>

              {/* Quick Preset Tags */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-text-gutter mb-2">
                  Hızlı Örnekler
                </label>
                <div className="flex flex-wrap gap-2">
                  {presetList.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSlugText(p.text);
                        setSubtitle(p.sub);
                      }}
                      className="px-2.5 py-1 rounded bg-surface-card border border-surface-border/80 text-xs font-mono text-text-sec hover:text-white hover:border-blurple/50 transition-colors"
                    >
                      /{p.text.replace(/\s+/g, "+")}
                      {p.sub && <span className="text-text-muted">?{p.sub.replace(/\s+/g, "+")}</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Color Selector */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Tema Rengi
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("blurple")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-medium border transition-all ${
                      theme === "blurple"
                        ? "bg-blurple/20 border-blurple text-white shadow-glow"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-blurple" />
                    <span>Blurple</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("crimson")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-medium border transition-all ${
                      theme === "crimson"
                        ? "bg-crimson/20 border-crimson text-white shadow-glow-crimson"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-crimson" />
                    <span>Crimson</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme("emerald")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-medium border transition-all ${
                      theme === "emerald"
                        ? "bg-emerald/20 border-emerald text-white shadow-glow-emerald"
                        : "bg-surface-card border-surface-border text-text-sec hover:text-white"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
                    <span>Emerald</span>
                  </button>
                </div>
              </div>

              {/* Shareable Endpoint Box */}
              <div className="pt-2">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Paylaşılabilir Discord Linki
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={fullShareUrl}
                    className="flex-1 bg-surface-card border border-surface-border rounded px-3 py-2 text-xs font-mono text-emerald select-all focus:outline-none"
                  />
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs font-medium transition-all ${
                      copied
                        ? "bg-emerald text-black"
                        : "bg-blurple hover:bg-blurple/90 text-white shadow-glow"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Kopyalandı</span>
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
            </div>

            {/* Performance status */}
            <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-gutter">
              <span className="flex items-center gap-1.5 text-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                Edge Operational (18ms)
              </span>
              <span>v2.4.0-edge</span>
            </div>
          </div>

          {/* Right Column: Live Discord Chat Simulator (7 cols) */}
          <div className="lg:col-span-7 bg-surface-chat rounded-lg border border-surface-border/60 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/40">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <span className="text-text-gutter">#</span>
                <span>genel-sohbet-onizleme</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-surface-1 px-2 py-0.5 rounded text-text-gutter">
                Discord Canlı Simülatör
              </span>
            </div>

            {/* Simulated message row */}
            <div className="flex items-start gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="/images/avatar.png"
                  alt="p.ramazanakyol"
                  width={44}
                  height={44}
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
                  <span className="text-xs text-text-gutter">Bugün saat 15:24</span>
                </div>

                <p className="text-sm text-text-sec mt-1">
                  Discord&apos;a linki attığında tam olarak şu şekilde görünecek:
                </p>

                <p className="text-xs font-mono text-blurple hover:underline mt-0.5 break-all cursor-pointer">
                  {fullShareUrl}
                </p>

                {/* Simulated Discord Embed Card */}
                <div className="mt-3 relative flex rounded bg-surface-card border border-white/5 overflow-hidden pl-3 py-3 pr-4 shadow-lg">
                  {/* Left accent spine */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${spineColor}`} />

                  <div className="w-full">
                    <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider font-semibold mb-1">
                      p.ramazanakyol.me embed studio
                    </p>

                    <h3 className="text-base font-bold text-white mb-0.5">
                      {slugText || "siktir"}
                    </h3>

                    {subtitle && (
                      <p className="text-xs text-text-sec mb-2">{subtitle}</p>
                    )}

                    {/* Dynamic Image Container */}
                    <div className="mt-2 rounded overflow-hidden border border-white/10 bg-black aspect-[1200/630] relative w-full group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={liveOgImageUrl}
                        alt={slugText}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-text-gutter font-mono">
                      <span>p.ramazanakyol.me — Edge Rendered</span>
                      <a
                        href={shareablePath}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blurple hover:underline flex items-center gap-1"
                      >
                        <span>Sayfayı Aç</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Architectural Advantages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-white tracking-tight">
            Mimari Avantajlar
          </h2>
          <p className="text-xs text-text-muted mt-0.5">
            Discord botları için optimize edilmiş uç nokta performansı ve kusursuz yönlendirme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-1 rounded-lg border border-surface-border p-5 hover:border-surface-border/90 transition-colors">
            <div className="w-9 h-9 rounded bg-blurple/15 border border-blurple/30 flex items-center justify-center text-blurple mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Edge Hızı (&lt;25ms)</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Vercel Edge ağı üzerinden dünya genelinde 300+ noktada sıfır bekleme süresiyle anında PNG görseli üretilir.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-1 rounded-lg border border-surface-border p-5 hover:border-surface-border/90 transition-colors">
            <div className="w-9 h-9 rounded bg-emerald/15 border border-emerald/30 flex items-center justify-center text-emerald mb-3">
              <Globe2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Türkçe Karakter Desteği
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              UTF-8 standartlarıyla <code>ş, ç, ğ, ı, ö, ü</code> gibi özel karakterler bozulmadan, kesilmeden render edilir.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-1 rounded-lg border border-surface-border p-5 hover:border-surface-border/90 transition-colors">
            <div className="w-9 h-9 rounded bg-crimson/15 border border-crimson/30 flex items-center justify-center text-crimson mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Temiz Syntax (URL Routing)</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Karmaşık parametreler yerine <code>p.ramazanakyol.me/siktir?siktirme</code> şeklinde doğrudan kullanılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="border-t border-surface-border/50 py-6 bg-surface-1/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-gutter">
          <p>© 2026 p.ramazanakyol.me. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-sec transition-colors"
            >
              Discord API Uyumlu
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-sec transition-colors"
            >
              Vercel Edge Ready
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
