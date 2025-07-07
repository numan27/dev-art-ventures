"use client";
import React from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../../common/customButton";
import { motion } from "framer-motion";

interface ServiceBannerProps {
  image?: StaticImageData | any;
  title: string;
  subtitle?: string;
  badge?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  showReasonButtons?: boolean;
  selectedReason?: string;
  onReasonSelect?: (reason: string) => void;
  isVideo?: boolean;
  videoUrl?: string;
}

const REASONS = [
  { value: "general", label: "General Inquiry", icon: "💬" },
  { value: "support", label: "Support Request", icon: "🛠️" },
  { value: "callback", label: "Callback Service", icon: "📞" },
];

const ServiceBanner: React.FC<ServiceBannerProps> = ({
  image,
  title,
  subtitle,
  badge = "Featured Service",
  buttonText = "Get Started",
  onButtonClick,
  showReasonButtons = false,
  selectedReason,
  onReasonSelect,
  isVideo = false,
  videoUrl,
}) => {
  return (
    <div className={styles.bannerWrapper}>
      {isVideo ? (
        <video autoPlay muted loop playsInline className={styles.bannerVideo}>
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <Image
            src={image}
            alt={title}
            fill
            className={styles.bannerImage}
            priority
          />
        </video>
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          className={styles.bannerImage}
          priority
        />
      )}
      <motion.div
        className={styles.bannerOverlay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{}}
      >
        {badge && (
          <motion.span
            className={styles.bannerBadge}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: 0.08,
                },
              },
            }}
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          className={styles.bannerTitle}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 16,
                delay: 0.18,
              },
            },
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={styles.bannerSubtitle}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: 0.28,
                },
              },
            }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className={styles.bannerButton}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 18,
                delay: 0.38,
              },
            },
          }}
        >
          <CustomButton
            whiteButton
            title={buttonText}
            onClick={onButtonClick}
          />
        </motion.div>

        {/* Reason Buttons */}
        {showReasonButtons && (
          <motion.div
            className={styles.reasonButtonsContainer}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: 0.48,
                },
              },
            }}
          >
            <div className={styles.reasonButtonsWrapper}>
              {REASONS.map((reason, index) => (
                <motion.button
                  key={reason.value}
                  type="button"
                  onClick={() => onReasonSelect?.(reason.value)}
                  className={`${styles.reasonButton} ${
                    selectedReason === reason.value
                      ? styles.reasonButtonActive
                      : ""
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(65, 200, 241, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.58 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <span className={styles.reasonIcon}>{reason.icon}</span>
                  <span className={styles.reasonLabel}>{reason.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceBanner;
