"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomButton from "components/common/customButton";
import { motion } from "framer-motion";
import React from "react";

const advantages = [
  {
    id: 1,
    icon: Images.DevFeature5.src,
    title: "Rapid Team Scaling",
    description:
      "Scale your development team from 2 to 20 developers in under 2 weeks. Our pre-screened talent pool eliminates 90% of traditional hiring time.",
    highlight: "2 Weeks",
    color: "lightning",
  },
  {
    id: 2,
    icon: Images.DesignService6.src,
    title: "Enterprise Security & Compliance",
    description:
      "ISO 27001 certified with SOC 2 Type II compliance. All developers sign NDAs and work through secure, monitored environments.",
    highlight: "ISO 27001",
    color: "shield",
  },
  {
    id: 3,
    icon: Images.DevFeature2.src,
    title: "Global Talent Network",
    description:
      "Access senior developers from tech hubs in Eastern Europe, Asia, and Latin America. 40-60% cost savings with same quality standards.",
    highlight: "40-60% Savings",
    color: "globe",
  },
  {
    id: 4,
    icon: Images.DesignFeature2.src,
    title: "Flexible Engagement Models",
    description:
      "Monthly contracts with 30-day notice. Scale up during sprints, down during maintenance. No long-term commitments or hidden fees.",
    highlight: "30-Day Notice",
    color: "chart",
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
          heading="Proven Staff Augmentation Solutions"
          description="Join 500+ companies that trust our proven approach to building high-performing development teams. Get enterprise-grade talent without the overhead."
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
                  <img src={advantage.icon} alt={advantage.title} />
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
