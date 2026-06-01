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
        {/* Scale beam */}
        <div style={{ position: "relative", width: 20, height: 22, display: "flex" }}>
          {/* Vertical beam */}
          <div style={{
            position: "absolute",
            left: "9px",
            top: "2px",
            width: "2px",
            height: "18px",
            background: "#C9A84C",
            borderRadius: "1px",
          }} />
          {/* Horizontal bar */}
          <div style={{
            position: "absolute",
            left: "0px",
            top: "5px",
            width: "20px",
            height: "2px",
            background: "#C9A84C",
            borderRadius: "1px",
          }} />
          {/* Pivot dot */}
          <div style={{
            position: "absolute",
            left: "7px",
            top: "0px",
            width: "6px",
            height: "6px",
            background: "#C9A84C",
            borderRadius: "50%",
          }} />
          {/* Left pan */}
          <div style={{
            position: "absolute",
            left: "-2px",
            top: "12px",
            width: "10px",
            height: "4px",
            background: "transparent",
            borderBottom: "2px solid #C9A84C",
            borderLeft: "2px solid #C9A84C",
            borderRight: "2px solid #C9A84C",
            borderRadius: "0 0 4px 4px",
          }} />
          {/* Right pan */}
          <div style={{
            position: "absolute",
            right: "-2px",
            top: "12px",
            width: "10px",
            height: "4px",
            background: "transparent",
            borderBottom: "2px solid #C9A84C",
            borderLeft: "2px solid #C9A84C",
            borderRight: "2px solid #C9A84C",
            borderRadius: "0 0 4px 4px",
          }} />
          {/* Base */}
          <div style={{
            position: "absolute",
            left: "5px",
            bottom: "0px",
            width: "10px",
            height: "2px",
            background: "#C9A84C",
            borderRadius: "1px",
          }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
