# DESIGN.md — Universal Studio Design System
> **Project:** Universal Social Open Graph & Dynamic Preview Studio (`p.ramazanakyol.me`)  
> **Stitch Project ID:** `3212626386198937204`  
> **Screen ID:** `a30c3535656a46a1a24bdad272002f6e`  
> **Aesthetic Archetype:** Linear / Vercel Ultra-Dark Bento with Cyber-Developer Luxury

---

## 🎨 1. Color System

### Deep Surfaces & Canvases
- **Root Canvas / Background:** `#0d0e12` (Ultra-dark obsidian)
- **Surface Elevation 1 (Containers & Panels):** `#121317` (Deep slate surface)
- **Surface Elevation 2 (Cards & Workbenches):** `#1a1b20` (Subtle dark elevation)
- **Surface Elevation 3 (Inputs & Active Areas):** `#1e1f24` (Focused interactive element)
- **Surface High (Elevated Modals & Previews):** `#292a2e`
- **Surface Hairline Border:** `rgba(255, 255, 255, 0.08)` / `#2d3139`
- **Specular Border Accent:** `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16) 50%, transparent)`

### Semantic Platform Accents
- **Discord Blurple:** `#5865F2` (Signature Discord accent & primary glow)
- **WhatsApp Emerald:** `#25D366` / `#41E575` (WhatsApp verified indicator, online status, 200 OK)
- **X (Twitter) Monochrome:** `#FFFFFF` (Crisp white border and badge)
- **Instagram Coral/Magenta:** `#E1306C` / `#DB2B68` (Story & DM social badge)
- **Telegram Sky Blue:** `#24A1DE` (Fast preview badge)

### Typography Colors
- **High-Contrast Text / Headlines:** `#F8FAFC` / `#E3E2E8` (Crisp white silver)
- **Secondary Text / Descriptions:** `#94A3B8` / `#C6C5D7` (Neutral slate grey)
- **Muted / Form Labels:** `#64748B` / `#8F8FA0` (Subtle gutter text)
- **Code Metadata & Gutter:** `#475569` (Dark monospace text)

---

## 🔤 2. Typography

- **Headings & Impact Display:** `Plus Jakarta Sans, system-ui, sans-serif`
  - Hero Headline: 700 - 800 weight, `-0.03em` tracking
  - Section Headings: 600 weight, `-0.02em` tracking
- **Body UI & Controls:** `Geist, Inter, system-ui, sans-serif`
  - Body Text: 400 - 500 weight, 14px / 16px base
- **Endpoints, Slugs, Code & Badges:** `JetBrains Mono, monospace`
  - Used for URL paths (`/merhaba`), query strings (`?selam`), HTTP metrics, and status pills.

---

## 📐 3. Geometry, Elevation & Motion

- **Corner Radii:**
  - Control Inputs & Buttons: `8px` (`rounded-lg`)
  - Bento Grid Cards: `16px` (`rounded-2xl`)
  - Badges & Status Pills: `9999px` (`rounded-full`)
- **Elevation & Lighting:**
  - Ambient top mesh glow: `radial-gradient(circle at 50% 0%, rgba(88, 101, 242, 0.12), transparent 70%)`
  - Engineering blueprint grid: `radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px) 32px 32px`
  - Specular top highlight: 1px linear gradient along the top edge of cards.

---

## 🖼️ 4. Asset Guidelines & Content Policy
- Sitede hiçbir kırık resim, Unsplash linki veya gri kutu bulunmaz.
- Avatar ve tüm görsel varlıklar yerleşik `public/images/` klasöründe depolanır.
- **İçerik Temizliği (Safe for Prod):** Tüm varsayılan metinler, ipuçları ve örnekler profesyonel, yaratıcı ve geliştirici dostu ifadelerden (`merhaba`, `tamam abi`, `harika proje`, `selam`) oluşur.
