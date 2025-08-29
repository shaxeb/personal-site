import type { RenderFunctionInput } from "astro-opengraph-images";
import React from "react";
import * as fs from "node:fs";
import * as path from "node:path";

export async function simple({ title, description, url }: RenderFunctionInput): Promise<React.ReactNode> {
  const hostname = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  })();

  const signaturePath = path.join(process.cwd(), "public", "signature.png");
  const signatureBase64 = fs.existsSync(signaturePath)
    ? `data:image/png;base64,${fs.readFileSync(signaturePath).toString("base64")}`
    : undefined;

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        color: "#0a0a0a",
        padding: 64,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 60,
        }}
      >
        {/* header spacer (no content) */}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.2,
            marginBottom: 16,
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 32, opacity: 0.85 }}>{description}</div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 28,
          opacity: 0.8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {signatureBase64 && (
            <img
              src={signatureBase64}
              style={{ width: 267, height: 80, objectFit: "contain" }}
            />
          )}
        </div>
        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
}


