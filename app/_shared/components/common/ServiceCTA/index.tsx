"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import classNames from "classnames";
import NextLink from "next/link";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ServiceCTA({
  title = "Let's Build a Smarter IT Strategy Together",
  subtitle = "Schedule a free, no-obligation consultation with our IT experts and discover how managed services can improve performance, security, and scalability for your business.",
  buttonText = "Book a Consultation",
  onButtonClick,
}: ServiceCTAProps) {
  return (
    <motion.section
      className={classNames(styles.ctaSection, "service-cta-section")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.ctaContent}>
        <motion.h2
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.ctaSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
        <NextLink
          target="_blank"
          href="https://calendly.com/devartventures/30min"
          className={styles.ctaButton}
        >
          <motion.button
            className={styles.primaryButton}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {buttonText}
          </motion.button>
        </NextLink>
      </div>
    </motion.section>
  );
}
