import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Copy, Download, ExternalLink, Sparkles } from "lucide-react";
import ClientDynamicView from "./ClientDynamicView";

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
  const title = decodeURIComponent(resolvedParams.text || "").replace(/\+/g, " ").trim();

  // Subtitle parsing: supports /siktir?siktirme or /siktir?sub=siktirme
  let subtitle = "";
  if (resolvedSearchParams.sub) {
    subtitle = String(resolvedSearchParams.sub);
  } else if (resolvedSearchParams.subtitle) {
    subtitle = String(resolvedSearchParams.subtitle);
  } else {
    const keys = Object.keys(resolvedSearchParams);
    if (keys.length > 0 && keys[0] !== "theme") {
      subtitle = keys[0];
    }
  }
  subtitle = decodeURIComponent(subtitle).replace(/\+/g, " ").trim();

  const theme = (resolvedSearchParams.theme as string) || "blurple";
  const themeHex =
    theme === "crimson"
      ? "#ED4245"
      : theme === "emerald"
      ? "#57F287"
      : "#5865F2";

  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}${
    subtitle ? `&sub=${encodeURIComponent(subtitle)}` : ""
  }&theme=${theme}`;

  return {
    title: `${title}${subtitle ? ` — ${subtitle}` : ""} | p.ramazanakyol.me`,
    description: subtitle || `Discord Dynamic Preview for "${title}"`,
    openGraph: {
      title: title,
      description: subtitle || "Dynamic Discord embed generated at p.ramazanakyol.me",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: subtitle || "Dynamic Discord embed generated at p.ramazanakyol.me",
      images: [ogImageUrl],
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
  const title = decodeURIComponent(resolvedParams.text || "").replace(/\+/g, " ").trim();

  let subtitle = "";
  if (resolvedSearchParams.sub) {
    subtitle = String(resolvedSearchParams.sub);
  } else if (resolvedSearchParams.subtitle) {
    subtitle = String(resolvedSearchParams.subtitle);
  } else {
    const keys = Object.keys(resolvedSearchParams);
    if (keys.length > 0 && keys[0] !== "theme") {
      subtitle = keys[0];
    }
  }
  subtitle = decodeURIComponent(subtitle).replace(/\+/g, " ").trim();

  const theme = (resolvedSearchParams.theme as string) || "blurple";
  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}${
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
