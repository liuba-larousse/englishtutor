import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Olaide — Cours d'anglais individuel en ligne, professeur natif certifié TEFL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/olaide.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "#d8f84c",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingRight: 48,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            Olaide
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#0e0e10",
              marginTop: 22,
            }}
          >
            Cours d&apos;anglais individuel en ligne
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              color: "#1c1c20",
              marginTop: 28,
            }}
          >
            Premier cours offert · 30 min · sans engagement
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              color: "#2a2a2e",
              marginTop: 24,
            }}
          >
            Professeur natif · Certifié TEFL · Note 4,9/5 sur Preply
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 384,
            height: "100%",
            borderRadius: 32,
            overflow: "hidden",
            border: "6px solid #0e0e10",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={384}
            height={502}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt=""
          />
        </div>
      </div>
    ),
    size
  );
}
