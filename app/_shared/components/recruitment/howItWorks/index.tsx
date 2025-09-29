"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const HowItWorks = () => {
  const steps = [
    {
      title: "Share your requirements",
      description: "role, tech stack, seniority, timeline",
      icon: "📝",
    },
    {
      title: "Receive 3–5 pre-vetted candidate profiles",
      description: "within 72 hours",
      icon: "👥",
    },
    {
      title: "Interview your chosen candidates",
      description: "directly",
      icon: "💬",
    },
    {
      title: "Hire with confidence",
      description: "fixed percentage fee, no hidden costs",
      icon: "🤝",
    },
    {
      title: "Enjoy a 60-day replacement guarantee",
      description: "peace of mind included",
      icon: "🛡️",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="How It Works"
          heading="From Job Description to Hire — Simplified"
          description="Our streamlined process gets you from job posting to successful hire in record time:"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.processContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
