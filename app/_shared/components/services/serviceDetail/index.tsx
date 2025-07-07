"use client";

import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";
import { routeConstant } from "routes/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceDetailProps {
  service: any;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const MotionDiv = isClient ? motion.div : "div";

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.customContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>{service.icon}</div>
            <SectionHeading
              subtitle={service.subtitle}
              title={service.title}
              align="center"
              className={styles.heroHeading}
            />
            <p className={styles.heroDescription}>{service.longDescription}</p>
            <div className={styles.heroActions}>
              <Link
                href={routeConstant.contact.path}
                className={styles.primaryButton}
              >
                Get Started
              </Link>
              <Link
                href={routeConstant.portfolio.path}
                className={styles.secondaryButton}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="What We Offer"
            title={`Comprehensive ${service.title} Solutions`}
            align="center"
            className={styles.featuresHeading}
          />

          <MotionDiv
            className={styles.featuresGrid}
            variants={isClient ? staggerContainer : undefined}
            initial={isClient ? "hidden" : undefined}
            whileInView={isClient ? "visible" : undefined}
            viewport={isClient ? { once: true } : undefined}
          >
            {service.features.map((feature: string, index: number) => (
              <MotionDiv
                key={index}
                className={styles.featureCard}
                variants={isClient ? fadeInUp : undefined}
              >
                <div className={styles.featureIcon}>✓</div>
                <h3>{feature}</h3>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologiesSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Technologies We Use"
            title="Modern Tech Stack"
            align="center"
            className={styles.technologiesHeading}
          />
          <div className={styles.technologiesGrid}>
            {service.technologies.map((tech: any, index: number) => (
              <MotionDiv
                key={index}
                className={styles.technologyCard}
                variants={isClient ? fadeInUp : undefined}
                initial={isClient ? "hidden" : undefined}
                whileInView={isClient ? "visible" : undefined}
                viewport={isClient ? { once: true } : undefined}
              >
                <div className={styles.techIcon}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            align="center"
            className={styles.processHeading}
          />
          <div className={styles.processSteps}>
            {service.process.map((step: any, index: number) => (
              <MotionDiv
                key={index}
                className={styles.processStep}
                variants={isClient ? fadeInUp : undefined}
                initial={isClient ? "hidden" : undefined}
                whileInView={isClient ? "visible" : undefined}
                viewport={isClient ? { once: true } : undefined}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Why Choose Us"
            title={`Benefits of Our ${service.title} Services`}
            align="center"
            className={styles.benefitsHeading}
          />
          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit: string, index: number) => (
              <MotionDiv
                key={index}
                className={styles.benefitCard}
                variants={isClient ? fadeInUp : undefined}
                initial={isClient ? "hidden" : undefined}
                whileInView={isClient ? "visible" : undefined}
                viewport={isClient ? { once: true } : undefined}
              >
                <div className={styles.benefitIcon}>🎯</div>
                <p>{benefit}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.customContainer}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your {service.title.toLowerCase()} requirements and
              create a solution that drives your business forward.
            </p>
            <div className={styles.ctaActions}>
              <Link
                href={routeConstant.contact.path}
                className={styles.primaryButton}
              >
                Get Free Quote
              </Link>
              <Link
                href={routeConstant.services.path}
                className={styles.secondaryButton}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
