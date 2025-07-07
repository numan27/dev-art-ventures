"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import Header from "../../common/header";
import Topbar from "../../common/topbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Loading Spinner */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
            <div
              className="absolute top-0 left-0 w-16 h-16 rounded-full animate-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #0f76b2, #41c8f1, transparent)",
                mask: "radial-gradient(circle at center, transparent 55%, black 56%)",
                WebkitMask:
                  "radial-gradient(circle at center, transparent 55%, black 56%)",
              }}
            ></div>
          </div>
        </motion.div>
      )}

      {/* Topbar with transparent background */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <Topbar />
      </motion.div>

      {/* Header with transparent background */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
      >
        <Header isLandingPage={true} isTransparent={true} />
      </motion.div>

      {/* Masked Video */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{
          clipPath: "circle(0px at 50% 50%)",
        }}
        animate={{
          clipPath: isLoaded
            ? "circle(150% at 50% 50%)"
            : "circle(0px at 50% 50%)",
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          className="w-full h-full object-cover"
        >
          <source src="/hero-new-optimized.mp4" type="video/mp4" />
          <img
            src="/bg-1.jpg"
            alt="Fallback banner"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Content */}
      <div
        className={classNames(
          styles.contentContainer,
          "relative z-[2] flex flex-col items-center justify-center text-center"
        )}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className={styles.badgeContainer}>
            <p className={styles.badgeText}>End-to-End Digital Solutions</p>
          </div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.6 }}
        >
          Transforming Ideas into
          <span className={styles.highlight}> Digital Reality</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          Empowering businesses with cutting-edge AI and IT solutions
        </motion.p>

        <motion.div
          className={styles.ctaContainer}
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <CustomButton
            title="Start Your Journey"
            heroBannerButton
            onClick={() => {}}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
