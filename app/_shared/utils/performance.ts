// Performance monitoring utility for particles animations

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
  return end - start;
};

export const monitorFrameRate = (callback: (fps: number) => void) => {
  let frameCount = 0;
  let lastTime = performance.now();

  const countFrames = () => {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      callback(fps);
      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(countFrames);
  };

  requestAnimationFrame(countFrames);
};

export const checkDevicePerformance = () => {
  const connection = (navigator as any).connection;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const memory = (performance as any).memory;

  return {
    isSlowDevice: hardwareConcurrency <= 2,
    isLowMemory: memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8,
    isSlowConnection: connection && connection.effectiveType === "slow-2g",
    hardwareConcurrency,
    memoryInfo: memory
      ? {
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        }
      : null,
  };
};

// Enhanced performance monitoring for particles
export const createPerformanceMonitor = (
  onPerformanceChange: (level: "high" | "medium" | "low") => void
) => {
  let frameCount = 0;
  let lastTime = performance.now();
  let lowFrameRateCount = 0;
  let highFrameRateCount = 0;
  let currentLevel: "high" | "medium" | "low" = "high";

  const monitor = () => {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

      // Adaptive performance adjustment
      if (fps < 30) {
        lowFrameRateCount++;
        highFrameRateCount = 0;

        if (lowFrameRateCount >= 2 && currentLevel !== "low") {
          currentLevel = "low";
          onPerformanceChange(currentLevel);
        } else if (lowFrameRateCount >= 1 && currentLevel === "high") {
          currentLevel = "medium";
          onPerformanceChange(currentLevel);
        }
      } else if (fps < 50) {
        if (currentLevel === "high") {
          currentLevel = "medium";
          onPerformanceChange(currentLevel);
        }
        lowFrameRateCount = 0;
        highFrameRateCount = 0;
      } else {
        highFrameRateCount++;
        lowFrameRateCount = 0;

        if (highFrameRateCount >= 3 && currentLevel !== "high") {
          currentLevel = "high";
          onPerformanceChange(currentLevel);
        }
      }

      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(monitor);
  };

  const start = () => {
    requestAnimationFrame(monitor);
  };

  const stop = () => {
    // Cleanup will be handled by the component
  };

  return { start, stop, currentLevel };
};
