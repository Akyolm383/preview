# PROGRESS.md — Discord Dynamic Preview Generator (`p.ramazanakyol.me`)

> **Son Güncelleme:** 16 Ekim 2026  
> **Durum:** Tamamlandı & Tarayıcı Testlerinden Başarıyla Geçti (0 Hata)

---

## 📌 1. Proje & Stitch Kimlikleri
- **Stitch Proje Adı:** `Discord Dynamic Preview Generator`
- **Stitch Project ID:** `3212626386198937204`
- **Stitch Screen ID:** `6dc9f24edb9f416fa26e26ce9732d2a0`
- **Tasarım Sistemi:** Obsidian Forge (`DESIGN.md`)

---

## 🚀 2. Tamamlanan Sayfalar ve Bileşenler
1. **Dinamik Open Graph API Motoru (`src/app/api/og/route.tsx`):**
   - Vercel Serverless / Node.js & `next/og` (ImageResponse) altyapısı.
   - 1200×630 px Discord Large Image Embed standardı.
   - Dinamik metin boyutu hesaplama (uzunluğa göre otomatik küçülme).
   - Tam UTF-8 Türkçe karakter desteği (`ş, ç, ğ, ı, ö, ü`).
   - Tema renk desteği: Blurple (`#5865F2`), Crimson (`#ED4245`), Emerald (`#57F287`).

2. **Dinamik Rota Sayfası (`src/app/[text]/page.tsx`):**
   - Kullanıcının istediği özel sade syntax desteği:
     - `p.ramazanakyol.me/siktir` $\rightarrow$ Başlık: `siktir`
     - `p.ramazanakyol.me/siktir?siktirme` $\rightarrow$ Başlık: `siktir`, Alt başlık: `siktirme`
   - Discord botu için sunucu taraflı render edilen `<meta property="og:image">`, `<meta property="og:title">` ve `<meta name="twitter:card" content="summary_large_image">` etiketleri.
   - İnsanlar tarayıcıda girdiğinde çalışan şık kart görünümü, doğrudan link kopyalama ve PNG indirme butonları.

3. **İnteraktif Ana Sayfa & Embed Stüdyosu (`src/app/page.tsx`):**
   - Canlı metin girişi, alt başlık kutusu, hızlı örnek etiketleri (`/siktir`, `/siktir?siktirme`, `/tamam abi?anladık` vb.).
   - 1:1 Discord karanlık tema sohbet simülatörü.
   - Tek tıkla paylaşılabilir Discord linkini kopyalama mekanizması.
   - Mimari avantajlar kartları (Edge Hızı, Türkçe Karakter Desteği, Temiz Syntax).

4. **Görsel Varlıklar:**
   - 3D Discord avatar görseli (`public/images/avatar.png`) yerleşik model ile üretilip yerleştirildi (Sıfır kırık görsel/placeholder).

---

## 🛠️ 3. Alınan Mimari Kararlar
- **Sade URL Syntax'ı:** `?title=` veya `?subtitle=` gibi uzun parametreler yerine, doğrudan `p.ramazanakyol.me/:metin?:altbaslik` RESTful yapısı kuruldu.
- **SSR & Hydration Uyum:** Sunucu ve istemci arasındaki hydration farkı (`window.location.href`) `useEffect` ve `canonicalUrl` ile izole edilerek konsol hataları sıfırlandı.
- **Tarayıcı Uyumluluğu:** Chrome üzerinden hem 1440px masaüstü hem de 375px mobil genişlikte görsel regresyon ve konsol kontrolleri yapıldı.

---

## 📋 4. Sıradaki Adım (Canlıya Alma / Deployment)
1. Kodları GitHub reposuna göndermek (`git add . && git commit -m "feat: initial commit" && git push`).
2. Vercel dashboard'undan repoyu içe aktarmak (Hobby ücretsiz plan).
3. `p.ramazanakyol.me` alan adını Vercel'e ekleyip DNS'e CNAME kaydını girmek.
