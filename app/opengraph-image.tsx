import { ImageResponse } from "next/og";

export const alt = "LIMM Works Pte Ltd — Planned properly. Built with care.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "76px 88px", background: "#fbf8f2", color: "#3d2b1f", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="118" height="130" viewBox="0 0 466 512" fill="none">
            <path d="M151 10L278 330H211V490H80V330H23L151 10Z" fill="#765844" />
            <path d="M317 10L443 330H376V490H245V330H189L317 10Z" fill="#c58d3b" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontSize: 62, fontWeight: 800, letterSpacing: "-2px" }}><span>LIMM</span><span style={{ color: "#c58d3b" }}>Works</span></div>
            <span style={{ marginTop: 5, color: "#765844", fontSize: 19, fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Pte Ltd · Singapore</span>
          </div>
        </div>
        <div style={{ width: 84, height: 5, marginTop: 52, background: "#c58d3b" }} />
        <div style={{ marginTop: 30, display: "flex", flexDirection: "column", fontSize: 58, fontWeight: 700, lineHeight: 1.04, letterSpacing: "-2px" }}><span>Planned properly.</span><span>Built with care.</span></div>
      </div>
      <div style={{ width: 290, height: 474, display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "1px solid rgba(61,43,31,0.16)" }}>
        <svg width="210" height="232" viewBox="0 0 466 512" fill="none">
          <path d="M151 10L278 330H211V490H80V330H23L151 10Z" fill="#765844" />
          <path d="M317 10L443 330H376V490H245V330H189L317 10Z" fill="#d6a93b" />
        </svg>
      </div>
    </div>,
    size,
  );
}
