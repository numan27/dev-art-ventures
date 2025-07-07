"use client";

import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./style.module.scss";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
  whiteText?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  className,
  align = "left",
  whiteText = false,
}: SectionHeadingProps) => {
  const fadeInDownSubtitle = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
        mass: 0.7,
        delay: 0.08,
        duration: 0.7,
      },
    },
  };
  const fadeInUpTitle = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.18 } },
  };

  return (
    <div
      className={classNames(
        styles.sectionHeading,
        "flex flex-col",
        styles[align],
        className,
        { [styles.whiteText]: whiteText }
      )}
    >
      {subtitle && (
        <motion.span
          className={classNames(styles.subtitle, {
            [styles.whiteText]: whiteText,
          })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDownSubtitle}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        className={classNames(styles.title, { [styles.whiteText]: whiteText })}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpTitle}
      >
        {title}
      </motion.h2>
      <div className={styles.underline} />
    </div>
  );
};

export default SectionHeading;
