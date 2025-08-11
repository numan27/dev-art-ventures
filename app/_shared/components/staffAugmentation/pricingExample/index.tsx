"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomButton from "components/common/customButton";
import { motion } from "framer-motion";

const advantages = [
  {
    id: 1,
    icon: "⚡",
    title: "Lightning Fast Deployment",
    description:
      "Get your team up and running in 72 hours, not months. Our pre-vetted talent pool eliminates lengthy hiring processes.",
    highlight: "72 Hours",
    color: "neon-blue",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    description:
      "NDAs, compliance certifications, and secure infrastructure. Your intellectual property is protected at every level.",
    highlight: "100% Secure",
    color: "neon-green",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Global Talent Pool",
    description:
      "Access top-tier developers from emerging tech hubs. Cost-effective without compromising on quality or expertise.",
    highlight: "Global Scale",
    color: "neon-purple",
  },
  {
    id: 4,
    icon: "📈",
    title: "Flexible Scaling",
    description:
      "Scale up or down based on project demands. No long-term commitments, just agile team management.",
    highlight: "Flexible",
    color: "neon-orange",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="why-choose-us"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Why Choose Us"
          heading="The DevArt Advantage"
          description="Discover why leading tech companies choose our staff augmentation services over traditional hiring methods."
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.advantagesGrid,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          )}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              className={classNames(
                styles.advantageCard,
                styles[advantage.color]
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{advantage.icon}</span>
                </div>
                <h3 className={styles.title}>{advantage.title}</h3>
                <p className={styles.description}>{advantage.description}</p>
                <div className={styles.highlight}>
                  <span className={styles.highlightText}>
                    {advantage.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
