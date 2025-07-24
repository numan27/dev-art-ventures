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
