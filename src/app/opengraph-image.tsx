import { ImageResponse } from "next/og";

export const alt = "Desmond Egya | Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(244,162,97,0.28) 0%, transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#f4a261",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Based in Nigeria
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            fontWeight: 600,
            color: "#ededed",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <span>Full-stack developer,</span>
          <span style={{ color: "#a3a3a3" }}>building things people</span>
          <span>actually enjoy using.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a3a3a3" }}>
          Desmond Egya — Dezzi
        </div>
      </div>
    ),
    { ...size }
  );
}
