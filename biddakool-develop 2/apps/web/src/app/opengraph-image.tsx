import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Biddakool — Empowering Education";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Satori needs an absolute URL or data URI; inline the logo at build time.
  const logoBuffer = await readFile(path.join(process.cwd(), "src/assets/logo-trn.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "linear-gradient(135deg, #0b3b8c 0%, #1a5fd0 55%, #38bdf8 130%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={150}
          height={150}
          style={{ borderRadius: 24, display: "flex" }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ fontSize: 96, fontWeight: 800, display: "flex" }}>Biddakool</div>
          <div style={{ fontSize: 40, opacity: 0.9, display: "flex" }}>Empowering Education</div>
        </div>
      </div>
      <div
        style={{ fontSize: 30, opacity: 0.85, display: "flex", maxWidth: 900, textAlign: "center" }}
      >
        One connected education management platform, built for Bangladesh.
      </div>
    </div>,
    { ...size },
  );
}
