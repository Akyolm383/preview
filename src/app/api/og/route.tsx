import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract title: either ?title=, ?text=, or first raw key
    let title = searchParams.get("title") || searchParams.get("text") || "";
    let subtitle = searchParams.get("sub") || searchParams.get("subtitle") || searchParams.get("alt") || "";
    const theme = searchParams.get("theme") || "blurple";

    // If no explicit title/text query param was provided, check if first key is raw text
    if (!title) {
      const keys = Array.from(searchParams.keys());
      if (keys.length > 0 && keys[0]) {
        title = keys[0];
      }
    }

    if (!title) {
      title = "p.ramazanakyol.me";
      subtitle = subtitle || "Discord Dynamic Preview Generator";
    }

    // Convert '+' signs to spaces for clean URL syntax
    title = title.replace(/\+/g, " ").trim();
    subtitle = subtitle.replace(/\+/g, " ").trim();

    // Theme color mapping
    let accentColor = "#5865F2"; // Blurple
    let glowColor = "rgba(88, 101, 242, 0.35)";

    if (theme === "crimson" || theme === "red") {
      accentColor = "#ED4245";
      glowColor = "rgba(237, 66, 69, 0.35)";
    } else if (theme === "emerald" || theme === "green") {
      accentColor = "#57F287";
      glowColor = "rgba(87, 242, 135, 0.35)";
    } else if (theme === "gold" || theme === "yellow") {
      accentColor = "#FEE75C";
      glowColor = "rgba(254, 231, 92, 0.35)";
    }

    // Dynamic font sizing
    let fontSize = 84;
    if (title.length > 12) fontSize = 68;
    if (title.length > 24) fontSize = 52;
    if (title.length > 40) fontSize = 38;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
            backgroundColor: "#0B0E14",
            backgroundImage: `radial-gradient(circle at 50% 40%, ${glowColor} 0%, transparent 70%), radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 40%)`,
            padding: "50px 60px",
            boxSizing: "border-box",
            border: `6px solid ${accentColor}`,
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: accentColor,
                  boxShadow: `0 0 16px ${accentColor}`,
                }}
              />
              <span
                style={{
                  fontSize: 26,
                  color: "#F2F3F5",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                p.ramazanakyol.me
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "9999px",
                padding: "8px 20px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  color: "#949BA4",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Discord Link Preview
              </span>
            </div>
          </div>

          {/* Center Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "auto 0",
              padding: "0 20px",
            }}
          >
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                textShadow: `0 0 40px ${glowColor}, 0 4px 12px rgba(0,0,0,0.8)`,
                wordBreak: "break-word",
                maxWidth: "1050px",
                textAlign: "center",
              }}
            >
              {title}
            </div>

            {subtitle ? (
              <div
                style={{
                  marginTop: "24px",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#DBDEE1",
                  backgroundColor: "rgba(30, 31, 34, 0.8)",
                  padding: "10px 32px",
                  borderRadius: "12px",
                  border: `1px solid rgba(255, 255, 255, 0.15)`,
                  maxWidth: "900px",
                }}
              >
                {subtitle}
              </div>
            ) : null}
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: 20,
                color: "#949BA4",
                fontWeight: 500,
              }}
            >
              Edge Generated • Dynamic Embed
            </span>
            <span
              style={{
                fontSize: 20,
                color: accentColor,
                fontWeight: 700,
              }}
            >
              discord.gg/embed
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const error = e as Error;
    return new Response(`Failed to generate the image: ${error.message}`, {
      status: 500,
    });
  }
}
