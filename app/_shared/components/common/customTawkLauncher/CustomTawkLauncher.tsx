"use client";

import React, { useRef } from "react";
import styles from "./style.module.scss";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      [key: string]: any;
    };
  }
}

const CustomTawkLauncher: React.FC = () => {
  const launcherRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Drag logic
  // const onMouseDown = (e: React.MouseEvent) => {
  //   isDragging = true;
  //   offsetX = e.clientX - (launcherRef.current?.offsetLeft || 0);
  //   offsetY = e.clientY - (launcherRef.current?.offsetTop || 0);
  //   document.body.style.userSelect = "none";
  //   document.addEventListener("mousemove", onMouseMove);
  //   document.addEventListener("mouseup", onMouseUp);
  // };

  // const onMouseMove = (e: MouseEvent) => {
  //   if (isDragging && launcherRef.current) {
  //     launcherRef.current.style.left = `${e.clientX - offsetX}px`;
  //     launcherRef.current.style.top = `${e.clientY - offsetY}px`;
  //     launcherRef.current.style.right = "auto";
  //     launcherRef.current.style.bottom = "auto";
  //   }
  // };

  // const onMouseUp = () => {
  //   isDragging = false;
  //   document.body.style.userSelect = "";
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // };

  // Open Tawk.to chat
  const handleLauncherClick = () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div
      className={styles.launcherContainer}
      ref={launcherRef}
      style={{ bottom: 20, right: 20 }}
      // onMouseDown={onMouseDown}
    >
      <button
        className={styles.launcherButton}
        onClick={handleLauncherClick}
        type="button"
        aria-label="Open chat"
        style={{ width: 64, height: 64 }}
      >
        {/* White icon */}
        <svg
          className={styles.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" y="10" width="28" height="16" rx="4" fill="#fff" />
          <path d="M20 28L16 34H24L20 28Z" fill="#fff" />
        </svg>
      </button>
    </div>
  );
};

export default CustomTawkLauncher;
