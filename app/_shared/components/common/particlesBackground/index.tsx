"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const ParticlesBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only render particles when section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="mission"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Further reduced to 75 particles for optimal performance
  const circles = Array.from({ length: 75 }, (_, index) => {
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

export default ParticlesBackground;
