import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "1st Law | Adabraka — Legal Excellence, Every Step of the Way";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
          overflow: "hidden",
        }}
      >
        {/* Gold glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Gold glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Left accent line */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(201,168,76,0.2)",
          }}
        />

        {/* Top border line */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(201,168,76,0.1)",
          }}
        />

        {/* Bottom border line */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(201,168,76,0.1)",
          }}
        />

        {/* Content */}
        <div
          style={{
            paddingLeft: "160px",
            paddingRight: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          {/* Location badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                color: "#888888",
                fontSize: "16px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontFamily: "Arial, sans-serif",
              }}
            >
              ADABRAKA · ACCRA · GHANA
            </div>
          </div>

          {/* Official logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://1st-law-website.vercel.app/logo.png"
            alt="1st Law"
            width={340}
            height={270}
            style={{ marginBottom: "16px", objectFit: "contain" }}
          />

          {/* Gold divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#C9A84C",
              marginBottom: "32px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "40px",
              fontStyle: "italic",
              fontWeight: "300",
              color: "#F5F0E8",
              letterSpacing: "1px",
              marginBottom: "40px",
            }}
          >
            Legal Excellence, Every Step of the Way
          </div>

          {/* Practice areas */}
          <div
            style={{
              fontSize: "15px",
              color: "#666666",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "Arial, sans-serif",
              marginBottom: "32px",
            }}
          >
            Corporate · Litigation · Real Estate · Employment · Family · Criminal
          </div>

          {/* Website */}
          <div
            style={{
              fontSize: "18px",
              color: "#C9A84C",
              letterSpacing: "2px",
              fontFamily: "Arial, sans-serif",
              opacity: 0.7,
            }}
          >
            www.1stlaw.org
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
