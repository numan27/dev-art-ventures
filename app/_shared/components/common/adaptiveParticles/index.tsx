"use client";

import { useEffect, useState } from "react";
import { checkDevicePerformance } from "../../../utils/performance";
import styles from "./style.module.scss";

interface AdaptiveParticlesProps {
  section: "mission" | "services" | "testimonials";
  maxParticles?: number;
}

const AdaptiveParticles = ({
  section,
  maxParticles = 100,
}: AdaptiveParticlesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    // Check device performance and adjust particle count
    const performance = checkDevicePerformance();

    let count = maxParticles;
    if (performance.isSlowDevice) {
      count = Math.floor(maxParticles * 0.3); // 30% for slow devices
    } else if (performance.isLowMemory) {
      count = Math.floor(maxParticles * 0.5); // 50% for low memory devices
    } else if (performance.isSlowConnection) {
      count = Math.floor(maxParticles * 0.7); // 70% for slow connections
    }

    setParticleCount(count);

    // Only render particles when section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.querySelector(
      `[data-section="${section}"]`
    );
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, [section, maxParticles]);

  const circles = Array.from({ length: particleCount }, (_, index) => {
    const delay = Math.random() * 3;
    const duration = 25 + Math.random() * 15;
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    return (
      <div
        key={index}
        className={styles.circleContainer}
        style={
          {
            "--delay": `${delay}s`,
            "--duration": `${duration}s`,
            "--x": `${x}%`,
            "--y": `${y}%`,
          } as React.CSSProperties
        }
      >
        <div className={styles.circle}></div>
      </div>
    );
  });

  if (!isVisible) {
    return null;
  }

  return <div className={styles.particlesWrapper}>{circles}</div>;
};

export default AdaptiveParticles;
