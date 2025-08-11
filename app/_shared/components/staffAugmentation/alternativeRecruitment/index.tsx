"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import { Images } from "assets";
import CustomCard from "components/common/customCard";

const AlternativeRecruitment = () => {
  const handleRecruitmentClick = () => {
    window.open("https://recruitment.numanventures.com", "_blank");
  };

  const recruitmentFeatures = [
    {
      icon: "🎯",
      title: "Permanent Hires",
      description:
        "Full-time employees with long-term commitment and company culture fit",
    },
    {
      icon: "🔍",
      title: "Executive Search",
      description:
        "C-level and senior leadership positions across tech industries",
    },
    {
      icon: "🏢",
      title: "Corporate Recruitment",
      description:
        "Enterprise-level hiring solutions with dedicated account management",
    },
    {
      icon: "📊",
      title: "Talent Assessment",
      description: "Comprehensive evaluation and vetting of candidates",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.bgElement1}></div>
          <div className={styles.bgElement2}></div>
        </div>

        <div className={classNames(styles.sectionContainer)}>
          {/* Section Heading */}
          <SectionHeadingCard
            badge="Alternative Solution"
            heading={<>Need Permanent Hires Instead?</>}
            description="While staff augmentation is perfect for flexible scaling, sometimes you need permanent team members. Our recruitment service specializes in finding the right long-term talent for your organization."
            centered={true}
            maxParticles={200}
            section="services"
            backgroundImage={Images.ServiceSectionBg.src}
          />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            {recruitmentFeatures.map((feature, index) => (
              <CustomCard
                key={index}
                className={styles.featureCard}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className={classNames(styles.cardItem, styles.ctaSection)}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaHeading}>
                Ready to Build Your Permanent Team?
              </h3>
              <p className={styles.ctaDescription}>
                Our recruitment experts will help you find the perfect
                candidates who align with your company culture and long-term
                vision.
              </p>
              <div className={styles.ctaButtons}>
                <CustomButton
                  title="Explore Recruitment Service"
                  onClick={handleRecruitmentClick}
                  containerStyle="primary-button"
                />
                <CustomButton
                  title="Schedule a Consultation"
                  containerStyle="secondary-button"
                />
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className={styles.comparisonSection}>
            <h3 className={styles.comparisonHeading}>
              Staff Augmentation vs. Permanent Recruitment
            </h3>
            <div className={styles.comparisonGrid}>
              <div
                className={classNames(styles.cardItem, styles.comparisonCard)}
              >
                <h4 className={styles.comparisonTitle}>Staff Augmentation</h4>
                <ul className={styles.comparisonList}>
                  <li>Flexible scaling up/down</li>
                  <li>No long-term commitment</li>
                  <li>Quick deployment (72 hours)</li>
                  <li>Cost-effective for projects</li>
                  <li>Managed by your team</li>
                </ul>
              </div>
              <div
                className={classNames(styles.cardItem, styles.comparisonCard)}
              >
                <h4 className={styles.comparisonTitle}>
                  Permanent Recruitment
                </h4>
                <ul className={styles.comparisonList}>
                  <li>Long-term team building</li>
                  <li>Company culture integration</li>
                  <li>Dedicated team members</li>
                  <li>Investment in growth</li>
                  <li>Full company benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeRecruitment;
