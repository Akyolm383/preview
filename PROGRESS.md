# PROGRESS.md — Universal Social Preview Generator (`p.ramazanakyol.me`)

> **Son Güncelleme:** 16 Ekim 2026  
> **Durum:** Tamamlandı • Evrensel Sosyal Medya Uyumluluğu Eklendi (Discord, WhatsApp, X, Telegram, Instagram)

---

## 📌 1. Proje & Stitch Kimlikleri
- **Stitch Proje Adı:** `Discord Dynamic Preview Generator`
- **Stitch Project ID:** `3212626386198937204`
- **Stitch Screen ID:** `6dc9f24edb9f416fa26e26ce9732d2a0`
- **Tasarım Sistemi:** Obsidian Forge (`DESIGN.md`)

---

## 🚀 2. Tamamlanan Sayfalar ve Bileşenler
1. **Evrensel Open Graph & Twitter Motoru (`src/app/api/og/route.tsx`):**
   - 1200×630 px (1.91:1 standardı) dinamik PNG üretimi.
   - WhatsApp, X, Instagram, Facebook ve Telegram için `Cache-Control: public, max-age=31536000, immutable` önbellekleme başlığı eklendi.
   - Alt rozetler evrensel sosyal medya formatına uyarlandı (`Social Link Preview` & `p.ramazanakyol.me`).
   - Tam UTF-8 Türkçe karakter ve `+` boşluk syntax desteği.

2. **Türkçe Karakter & Instagram / Mobil Çözüm Kütüphanesi (`src/lib/turkish.ts`):**
   - Mobil sohbet uygulamaları (Instagram DM vb.) link ayrıştırıcı regex'leri nedeniyle Türkçe harflerde (`ş, ç, ğ, ı, ö, ü`) URL'yi böler.
   - Çözüm olarak ASCII dostu kısayol desteği eklendi:
     - `s_` / `_s` &rarr; `ş`, `S_` / `_S` &rarr; `Ş`
     - `c_` / `_c` &rarr; `ç`, `C_` / `_C` &rarr; `Ç`
     - `g_` / `_g` &rarr; `ğ`, `G_` / `_G` &rarr; `Ğ`
     - `i_` / `_i` &rarr; `ı`, `I_` / `_I` &rarr; `İ`
     - `o_` / `_o` &rarr; `ö`, `O_` / `_O` &rarr; `Ö`
     - `u_` / `_u` &rarr; `ü`, `U_` / `_U` &rarr; `Ü`
   - Sözlük tabanlı `?tr` parametresi (örn: `p.ramazanakyol.me/seker?tr` &rarr; `şeker`).
   - Sitedeki "Kopyala" butonu linki doğrudan URL-encoded (ASCII güvenli) kopyalar (`/%C5%9Feker`).

3. **Dinamik Rota Sayfası (`src/app/[text]/page.tsx`):**
   - `safeDecode` mekanizması ile geçersiz URI formatlarında 500 hatası önlendi.
   - Tüm platformların botları için mutlak HTTPS adresleri ile:
     - `og:image`, `og:image:secure_url`, `og:image:type="image/png"`
     - `og:url`, `og:site_name`, `og:type="website"`
     - `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`
   - Temiz syntax:
     - `p.ramazanakyol.me/siktir`
     - `p.ramazanakyol.me/s_eker` (Instagram'da bölünmeyen ASCII syntax)
     - `p.ramazanakyol.me/siktir?siktirme`
     - `p.ramazanakyol.me/tamam+abi?anladık+kral`

4. **İnteraktif Çoklu Platform Simülatörü (`src/app/page.tsx`):**
   - **Discord:** Orijinal karanlık tema, avatar, bot etiketi, renkli sol şeritli kart.
   - **WhatsApp:** Orijinal koyu tema konuşma balonu, bağlantı kartı, alan adı etiketi ve çift mavi tik.
   - **X (Twitter):** 16px radius'lu büyük önizleme kartı ve gönderi simülasyonu.
   - Türkçe karakter & Instagram mobil klavye ipucu paneli eklendi.

---

## 🛠️ 3. Platform Uyumluluk Detayları
- **WhatsApp:** Meta Graph Scraper'ın beklediği `<300KB` boyut ve mutlak URL kuralı sağlandı.
- **X (Twitter):** `summary_large_image` kart tipiyle tam genişlikli görsel standardı sağlandı.
- **Instagram (DM / Hikaye Çıkartması):** 
  - Elle yazımda ASCII kısayolları (`s_eker`) veya web sitesinden tek tıkla kopyalama (`/%C5%9Feker`) ile link kırılma sorunu tamamen giderildi.
- **Telegram & LinkedIn:** Standart Open Graph etiketleriyle doğrudan uyumlu.

---

## 📋 4. Sıradaki Adım
- Değişiklikler GitHub reposuna gönderildi. Vercel otomatik olarak canlıya alacaktır.
