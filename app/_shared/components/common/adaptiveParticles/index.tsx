"use client";

import { useMemo, useEffect, useState } from "react";
import {
  checkDevicePerformance,
  createPerformanceMonitor,
} from "../../../utils/performance";
import styles from "./style.module.scss";

interface AdaptiveParticlesProps {
  section: "mission" | "services" | "testimonials";
  maxParticles?: number;
}

const AdaptiveParticles = ({
  section,
  maxParticles = 100,
}: AdaptiveParticlesProps) => {
  const [performanceLevel, setPerformanceLevel] = useState<
    "high" | "medium" | "low"
  >("high");

  // Optimized performance detection with frame rate monitoring
  useEffect(() => {
    const devicePerformance = checkDevicePerformance();
    let initialLevel: "high" | "medium" | "low" = "high";

    // Initial performance detection
    if (
      devicePerformance.isSlowDevice ||
      devicePerformance.hardwareConcurrency <= 2
    ) {
      initialLevel = "low";
    } else if (
      devicePerformance.isLowMemory ||
      devicePerformance.isSlowConnection
    ) {
      initialLevel = "medium";
    }

    setPerformanceLevel(initialLevel);

    // Create and start performance monitor
    const performanceMonitor = createPerformanceMonitor((level) => {
      setPerformanceLevel(level);
    });

    performanceMonitor.start();

    return () => {
      // Cleanup is handled by the monitor
    };
  }, []);

  // Optimized particle generation with better distribution
  const particles = useMemo(() => {
    let count = maxParticles;

    // Dynamic particle count based on performance
    switch (performanceLevel) {
      case "low":
        count = Math.max(10, Math.floor(maxParticles * 0.15));
        break;
      case "medium":
        count = Math.max(20, Math.floor(maxParticles * 0.4));
        break;
      case "high":
        count = Math.max(30, Math.floor(maxParticles * 0.7));
        break;
    }

    // Create optimized particle array with better distribution
    return Array.from({ length: count }, (_, index) => {
      // Ensure continuous flow by calculating proper delays
      const staggerDelay = (index / count) * 6; // 6 seconds total stagger
      const duration = 15 + Math.random() * 8; // 15-23s duration for smoother flow

      // Better distribution across the screen
      const x = (index * 1.618) % 100; // Golden ratio for better distribution
      const y = Math.random() * 100;

      return {
        key: index,
        delay: `${staggerDelay}s`,
        duration: `${duration}s`,
        x: `${x}%`,
        y: `${y}%`,
        size: Math.random() * 0.8 + 0.2, // Varied sizes for visual interest
      };
    });
  }, [maxParticles, performanceLevel]);

  // Optimized rendering with fewer DOM manipulations
  const circles = particles.map((particle) => (
    <div
      key={particle.key}
      className={styles.circleContainer}
      style={
        {
          "--delay": particle.delay,
          "--duration": particle.duration,
          "--x": particle.x,
          "--y": particle.y,
          "--size": particle.size,
        } as React.CSSProperties
      }
    >
      <div className={styles.circle}></div>
    </div>
  ));

  return (
    <div
      className={styles.particlesWrapper}
      data-performance={performanceLevel}
    >
      {circles}
    </div>
  );
};

export default AdaptiveParticles;
