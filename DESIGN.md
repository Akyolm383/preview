# DESIGN.md — Obsidian Forge Design System
> **Project:** Discord Dynamic Preview Generator (`p.ramazanakyol.me`)  
> **Stitch Project ID:** `3212626386198937204`  
> **Screen ID:** `6dc9f24edb9f416fa26e26ce9732d2a0`  
> **Theme:** Obsidian Forge (Developer Dark Mode & Discord Simulation)

---

## 🎨 1. Color Palette

### Base Surfaces
- **Canvas / Background:** `#0B0E14` (Deep obsidian black)
- **Surface Level 1 (Panels & Sidebar):** `#1E1F22` (Dark charcoal container)
- **Surface Level 2 (Discord Chat Timeline):** `#313338` (Authentic Discord dark surface)
- **Surface Level 3 (Embed Card Body & Inputs):** `#2B2D31` (Discord embed container background)
- **Surface Border:** `#3F4147` (Hairline border, 1px)
- **Surface Subtle Border:** `rgba(255, 255, 255, 0.06)`

### Semantic & Accents
- **Primary / Blurple:** `#5865F2` (Discord signature blurple)
- **Neon Emerald:** `#57F287` (Online indicator, verified, 200 OK, copy success)
- **Cyber Crimson:** `#ED4245` (Warning, error, red accent theme)
- **Warning Gold:** `#FEE75C` (Payload alerts)

### Typography Colors
- **High Contrast / Primary Text:** `#F2F3F5` (Crisp white/silver)
- **Secondary Text / Descriptions:** `#DBDEE1` (Soft silver grey)
- **Muted / Form Labels / Timestamps:** `#949BA4` (Subtle grey)
- **Gutter / Code Metadata:** `#4E5058` (Dark muted zinc)

---

## 🔤 2. Typography

- **Headings & Body UI:** `Geist, Inter, system-ui, sans-serif`
  - Headlines: 600 - 700 weight, `-0.02em` tracking
  - Body: 400 - 500 weight, 14px base
- **Code, Metadata, Links & Slugs:** `JetBrains Mono, Menlo, monospace`
  - Used for URL slugs (`/siktir`), query strings (`?siktirme`), HTTP headers, and badges.

---

## 📐 3. Spacing & Corner Radii

- **Base Spacing:** 4px grid (`space-xs: 4px`, `space-sm: 8px`, `space-md: 16px`, `space-lg: 24px`, `space-xl: 32px`)
- **Corner Radii:**
  - Inputs & Code blocks: `4px` (`rounded`)
  - Discord Embed Card: `4px` (`rounded`) with a `4px solid` left accent spine
  - Badges & Status Pills: `9999px` (`rounded-full`)

---

## 🖼️ 4. Discord Embed Image Specs

- **OG Image Dimensions:** 1200 x 630 px (Discord Large Image Embed standard, 1.91:1 ratio)
- **Format:** High-definition PNG rendered via Satori & Edge runtime
- **Default Visual Style:**
  - Deep dark background (`#1E1F22` / `#0B0E14`) with subtle grid / radial gradient
  - Massive, centered bold typographic text (dynamic sizing based on string length)
  - Subtitle below with high legibility (`#949BA4` / `#DBDEE1`)
  - Minimal watermark / badge: `p.ramazanakyol.me`
