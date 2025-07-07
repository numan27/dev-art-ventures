"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./ContactMapInner"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: 600,
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Loading map...</div>
    </div>
  ),
});

export default function ContactMap() {
  return <DynamicMap />;
}
