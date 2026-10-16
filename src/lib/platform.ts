/**
 * Platform & Social Media Crawler Detection
 * Automatically detects the crawler/platform (Discord, WhatsApp, Twitter/X, Instagram, Telegram)
 * from the incoming User-Agent header and applies the matching visual design theme.
 */

export type PlatformTheme =
  | "discord"
  | "whatsapp"
  | "twitter"
  | "instagram"
  | "telegram"
  | "crimson"
  | "emerald"
  | "gold"
  | "blurple";

export interface ThemeConfig {
  name: string;
  accentColor: string;
  glowColor: string;
  badgeLabel: string;
  footerLabel: string;
  themeHex: string;
  spineClass: string;
}

/**
 * Detects the platform crawler from the User-Agent header.
 */
export function detectPlatformFromUserAgent(ua: string): PlatformTheme {
  if (!ua) return "discord";
  const lower = ua.toLowerCase();

  // WhatsApp bot (can be mobile client or WhatsApp proxy)
  if (lower.includes("whatsapp")) {
    return "whatsapp";
  }

  // Discord bot
  if (lower.includes("discordbot")) {
    return "discord";
  }

  // Twitter / X crawler
  if (lower.includes("twitterbot") || lower.includes("tweetmemebot")) {
    return "twitter";
  }

  // Telegram bot
  if (lower.includes("telegrambot")) {
    return "telegram";
  }

  // Instagram / Facebook / Meta crawler
  if (
    lower.includes("instagram") ||
    lower.includes("facebookexternalhit") ||
    lower.includes("meta-externalagent")
  ) {
    return "instagram";
  }

  // Default to Discord aesthetic for standard web browsers
  return "discord";
}

/**
 * Returns complete visual styling tokens for the given theme.
 */
export function getThemeConfig(themeName: string = "discord"): ThemeConfig {
  const t = (themeName || "discord").toLowerCase();

  switch (t) {
    case "whatsapp":
    case "green":
      return {
        name: "WhatsApp",
        accentColor: "#25D366",
        glowColor: "rgba(37, 211, 102, 0.35)",
        badgeLabel: "WhatsApp Link Card",
        footerLabel: "WhatsApp Verified • Edge Rendered",
        themeHex: "#25D366",
        spineClass: "bg-[#25D366]",
      };

    case "twitter":
    case "x":
      return {
        name: "X (Twitter)",
        accentColor: "#FFFFFF",
        glowColor: "rgba(255, 255, 255, 0.25)",
        badgeLabel: "𝕏 Post Preview",
        footerLabel: "𝕏 Large Card • Edge Rendered",
        themeHex: "#000000",
        spineClass: "bg-white",
      };

    case "instagram":
    case "insta":
    case "meta":
      return {
        name: "Instagram",
        accentColor: "#E1306C",
        glowColor: "rgba(225, 48, 108, 0.40)",
        badgeLabel: "Instagram Social Card",
        footerLabel: "Instagram Story & DM • Edge Rendered",
        themeHex: "#E1306C",
        spineClass: "bg-[#E1306C]",
      };

    case "telegram":
      return {
        name: "Telegram",
        accentColor: "#24A1DE",
        glowColor: "rgba(36, 161, 222, 0.40)",
        badgeLabel: "Telegram Fast Card",
        footerLabel: "Telegram Instant • Edge Rendered",
        themeHex: "#24A1DE",
        spineClass: "bg-[#24A1DE]",
      };

    case "crimson":
    case "red":
      return {
        name: "Crimson",
        accentColor: "#ED4245",
        glowColor: "rgba(237, 66, 69, 0.35)",
        badgeLabel: "Crimson Edition",
        footerLabel: "Universal Embed • Edge Rendered",
        themeHex: "#ED4245",
        spineClass: "bg-crimson",
      };

    case "emerald":
      return {
        name: "Emerald",
        accentColor: "#57F287",
        glowColor: "rgba(87, 242, 135, 0.35)",
        badgeLabel: "Emerald Edition",
        footerLabel: "Universal Embed • Edge Rendered",
        themeHex: "#57F287",
        spineClass: "bg-emerald",
      };

    case "gold":
    case "yellow":
      return {
        name: "Gold",
        accentColor: "#FEE75C",
        glowColor: "rgba(254, 231, 92, 0.35)",
        badgeLabel: "Gold Edition",
        footerLabel: "Universal Embed • Edge Rendered",
        themeHex: "#FEE75C",
        spineClass: "bg-yellow-400",
      };

    case "discord":
    case "blurple":
    default:
      return {
        name: "Discord",
        accentColor: "#5865F2",
        glowColor: "rgba(88, 101, 242, 0.35)",
        badgeLabel: "Discord Rich Embed",
        footerLabel: "Discord Embed Studio • Edge Rendered",
        themeHex: "#5865F2",
        spineClass: "bg-blurple",
      };
  }
}
