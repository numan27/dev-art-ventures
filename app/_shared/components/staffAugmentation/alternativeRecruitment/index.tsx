"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import { Images } from "assets";
import CustomCard from "components/common/customCard";
import Comparison from "components/design/comparison";

const AlternativeRecruitment = () => {
  const handleRecruitmentClick = () => {
    window.open("https://recruitment.numanventures.com", "_blank");
  };

  const recruitmentFeatures = [
    {
      icon: Images.DesignFeature2.src,
      title: "Permanent Hires",
      description:
        "Full-time employees with long-term commitment and company culture fit",
    },
    {
      icon: Images.DesignProcess3.src,
      title: "Executive Search",
      description:
        "C-level and senior leadership positions across tech industries",
    },
    {
      icon: Images.DevFeature2.src,
      title: "Corporate Recruitment",
      description:
        "Enterprise-level hiring solutions with dedicated account management",
    },
    {
      icon: Images.DevService5.src,
      title: "Talent Assessment",
      description: "Comprehensive evaluation and vetting of candidates",
    },
  ];

  const comparisonData = [
    {
      id: 1,
      otherAgencies: "Long-term team building",
      devArtVentures: "Flexible scaling up/down",
    },
    {
      id: 2,
      otherAgencies: "Company culture integration",
      devArtVentures: "No long-term commitment",
    },
    {
      id: 3,
      otherAgencies: "Dedicated team members",
      devArtVentures: "Quick deployment (72 hours)",
    },
    {
      id: 4,
      otherAgencies: "Investment in growth",
      devArtVentures: "Cost-effective for projects",
    },
    {
      id: 5,
      otherAgencies: "Full company benefits",
      devArtVentures: "Managed by your team",
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

          {/* Comparison Section */}
          <Comparison
            comparisonData={comparisonData}
            badge="Comparison"
            heading="Staff Augmentation vs. Permanent Recruitment"
            description="Understand the key differences between flexible staffing and permanent team building to make the right choice for your business needs."
            centered={true}
            maxParticles={200}
            section="services"
            leftLabel="Permanent Recruitment"
            rightLabel="Staff Augmentation"
            showLogo={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AlternativeRecruitment;
