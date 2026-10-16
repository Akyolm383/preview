/**
 * Turkish Character Helper for URLs in chat apps (Instagram, TikTok, WhatsApp).
 * Solves the issue where mobile chat clients truncate URLs upon encountering non-ASCII Turkish characters.
 */

const TURKISH_DICTIONARY: Record<string, string> = {
  seker: "şeker",
  cok: "çok",
  guzel: "güzel",
  anladik: "anladık",
  oyle: "öyle",
  serefsiz: "şerefsiz",
  hayir: "hayır",
  gunaydin: "günaydın",
  gecmis: "geçmiş",
  bos: "boş",
  artik: "artık",
  sagol: "sağol",
  sikinti: "sıkıntı",
  kusura: "kusura",
  bakma: "bakma",
  ayip: "ayıp",
  canim: "canım",
  cocuk: "çocuk",
  cocugu: "çocuğu",
  pic: "piç",
  yavsak: "yavşak",
  kasar: "kaşar",
  amina: "amına",
  koyayim: "koyayım",
  got: "göt",
  gotune: "götüne",
  yuruyen: "yürüyen",
  olur: "olur",
  olmaz: "olmaz",
  nasil: "nasıl",
  kesin: "kesin",
  gercek: "gerçek",
  yalanci: "yalancı",
  yalan: "yalan",
};

/**
 * Parses and formats text, converting custom ASCII shortcuts or dictionary words to Turkish characters.
 * Supported syntaxes:
 * 1. Direct explicit shortcuts:
 *    s_ -> ş, c_ -> ç, g_ -> ğ, i_ -> ı, o_ -> ö, u_ -> ü
 *    (e.g., "s_eker" -> "şeker", "c_ok" -> "çok", "anlad_ik" -> "anladık")
 * 2. Dictionary / auto-correction if enabled or via ?tr flag.
 */
export function formatTurkishText(text: string, forceTr: boolean = false): string {
  if (!text) return "";

  let result = text;

  // 1. Replace explicit ASCII shortcuts preserving case:
  result = result
    .replace(/S_/g, "Ş")
    .replace(/s_/g, "ş")
    .replace(/_S/g, "Ş")
    .replace(/_s/g, "ş")
    .replace(/C_/g, "Ç")
    .replace(/c_/g, "ç")
    .replace(/_C/g, "Ç")
    .replace(/_c/g, "ç")
    .replace(/G_/g, "Ğ")
    .replace(/g_/g, "ğ")
    .replace(/_G/g, "Ğ")
    .replace(/_g/g, "ğ")
    .replace(/O_/g, "Ö")
    .replace(/o_/g, "ö")
    .replace(/_O/g, "Ö")
    .replace(/_o/g, "ö")
    .replace(/U_/g, "Ü")
    .replace(/u_/g, "ü")
    .replace(/_U/g, "Ü")
    .replace(/_u/g, "ü")
    .replace(/I_/g, "İ")
    .replace(/_I/g, "İ")
    .replace(/i_/g, "ı")
    .replace(/_i/g, "ı");

  // 2. If forceTr is true, de-asciify words using dictionary
  if (forceTr) {
    const words = result.split(/\s+/);
    result = words
      .map((w) => {
        const lower = w.toLowerCase();
        if (TURKISH_DICTIONARY[lower]) {
          return TURKISH_DICTIONARY[lower];
        }
        return w;
      })
      .join(" ");
  }

  return result;
}
