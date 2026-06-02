import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0A0A0A",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Filled gold box with knockout "1" */}
        <div
          style={{
            width: 24,
            height: 24,
            background: "#C9A84C",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "#0A0A0A",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            1
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
