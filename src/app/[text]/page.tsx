import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Copy, Download, ExternalLink, Sparkles } from "lucide-react";
import ClientDynamicView from "./ClientDynamicView";
import { formatTurkishText } from "@/lib/turkish";

function safeDecode(val: string): string {
  try {
    return decodeURIComponent(val);
  } catch {
    return val;
  }
}

type Props = {
  params: Promise<{ text: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  // Convert '+' syntax to space
  const rawTitle = safeDecode(resolvedParams.text || "").replace(/\+/g, " ").trim();

  // Subtitle parsing: supports /siktir?siktirme or /siktir?sub=siktirme
  let rawSubtitle = "";
  if (resolvedSearchParams.sub) {
    rawSubtitle = String(resolvedSearchParams.sub);
  } else if (resolvedSearchParams.subtitle) {
    rawSubtitle = String(resolvedSearchParams.subtitle);
  } else {
    const keys = Object.keys(resolvedSearchParams);
    if (keys.length > 0 && keys[0] !== "theme" && keys[0] !== "tr") {
      rawSubtitle = keys[0];
    }
  }
  rawSubtitle = safeDecode(rawSubtitle).replace(/\+/g, " ").trim();

  // Format Turkish characters (support ASCII shortcuts like s_ -> ş, c_ -> ç, or ?tr)
  const isTr = resolvedSearchParams.tr !== undefined;
  const title = formatTurkishText(rawTitle, isTr);
  const subtitle = formatTurkishText(rawSubtitle, isTr);

  const theme = (resolvedSearchParams.theme as string) || "blurple";
  const themeHex =
    theme === "crimson"
      ? "#ED4245"
      : theme === "emerald"
      ? "#57F287"
      : "#5865F2";

  const cleanSlug = encodeURIComponent(rawTitle.replace(/\s+/g, "+"));
  const cleanSub = rawSubtitle ? encodeURIComponent(rawSubtitle.replace(/\s+/g, "+")) : "";
  const currentCanonicalUrl = `https://p.ramazanakyol.me/${cleanSlug}${cleanSub ? `?${cleanSub}` : ""}`;
  const absoluteOgImageUrl = `https://p.ramazanakyol.me/og.png?title=${encodeURIComponent(title)}${
    subtitle ? `&sub=${encodeURIComponent(subtitle)}` : ""
  }&theme=${theme}`;

  return {
    title: `${title}${subtitle ? ` — ${subtitle}` : ""} | p.ramazanakyol.me`,
    description: subtitle || `Dynamic preview for "${title}"`,
    alternates: {
      canonical: currentCanonicalUrl,
    },
    openGraph: {
      title: title,
      description: subtitle || `Dynamic preview embed for "${title}"`,
      url: currentCanonicalUrl,
      siteName: "p.ramazanakyol.me",
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: absoluteOgImageUrl,
          secureUrl: absoluteOgImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: subtitle || `Dynamic preview embed for "${title}"`,
      images: [absoluteOgImageUrl],
    },
    other: {
      "twitter:image:src": absoluteOgImageUrl,
      "twitter:domain": "p.ramazanakyol.me",
      "twitter:url": currentCanonicalUrl,
      "og:image:url": absoluteOgImageUrl,
      "og:image:secure_url": absoluteOgImageUrl,
    },
    themeColor: themeHex,
  };
}

export default async function DynamicTextPage({
  params,
  searchParams,
}: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const rawTitle = safeDecode(resolvedParams.text || "").replace(/\+/g, " ").trim();

  let rawSubtitle = "";
  if (resolvedSearchParams.sub) {
    rawSubtitle = String(resolvedSearchParams.sub);
  } else if (resolvedSearchParams.subtitle) {
    rawSubtitle = String(resolvedSearchParams.subtitle);
  } else {
    const keys = Object.keys(resolvedSearchParams);
    if (keys.length > 0 && keys[0] !== "theme" && keys[0] !== "tr") {
      rawSubtitle = keys[0];
    }
  }
  rawSubtitle = safeDecode(rawSubtitle).replace(/\+/g, " ").trim();

  const isTr = resolvedSearchParams.tr !== undefined;
  const title = formatTurkishText(rawTitle, isTr);
  const subtitle = formatTurkishText(rawSubtitle, isTr);

  const theme = (resolvedSearchParams.theme as string) || "blurple";
  const ogImageUrl = `/og.png?title=${encodeURIComponent(title)}${
    subtitle ? `&sub=${encodeURIComponent(subtitle)}` : ""
  }&theme=${theme}`;

  return (
    <ClientDynamicView
      title={title}
      subtitle={subtitle}
      theme={theme}
      ogImageUrl={ogImageUrl}
    />
  );
}
