"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      number: "200+",
      label: "Projects Completed",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7V10C2 16 6 20 12 22C18 20 22 16 22 10V7L12 2Z"
            fill="white"
          />
          <path d="M12 9L16 11V16L12 18L8 16V11L12 9Z" fill="white" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Team Members",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.statsSection} ref={containerRef}>
      <motion.div
        className={styles.parallaxContainer}
        style={{ opacity, scale }}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <h3 className={styles.statNumber}>{stat.number}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
