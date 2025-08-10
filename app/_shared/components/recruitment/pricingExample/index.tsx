"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomButton from "components/common/customButton";
import CustomBadge from "components/common/customBadge";

const pricingData = [
  {
    id: 1,
    role: "Frontend Developer",
    experience: "3-5 years",
    skills: ["React", "TypeScript", "Next.js"],
    monthlyRate: "$4,500 - $6,500",
    hourlyRate: "$25 - $35",
    features: [
      "40 hours/week",
      "Direct communication",
      "Code reviews included",
      "Weekly progress reports",
      "GitHub access",
    ],
    popular: false,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    experience: "5-8 years",
    skills: ["React", "Node.js", "AWS", "PostgreSQL"],
    monthlyRate: "$6,500 - $9,500",
    hourlyRate: "$35 - $50",
    features: [
      "40 hours/week",
      "Direct communication",
      "Code reviews included",
      "Weekly progress reports",
      "GitHub access",
      "Database design",
      "API development",
    ],
    popular: true,
  },
  {
    id: 3,
    role: "UI/UX Designer",
    experience: "3-6 years",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    monthlyRate: "$4,000 - $6,000",
    hourlyRate: "$22 - $32",
    features: [
      "40 hours/week",
      "Direct communication",
      "Design reviews included",
      "Weekly progress reports",
      "Figma access",
      "User research",
      "Wireframing",
    ],
    popular: false,
  },
  {
    id: 4,
    role: "DevOps Engineer",
    experience: "4-7 years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    monthlyRate: "$7,000 - $10,000",
    hourlyRate: "$38 - $55",
    features: [
      "40 hours/week",
      "Direct communication",
      "Infrastructure reviews",
      "Weekly progress reports",
      "AWS access",
      "Security best practices",
      "Monitoring setup",
    ],
    popular: false,
  },
];

const PricingExample = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Pricing"
          heading="Pricing Examples"
          description="Transparent pricing for different roles and experience levels. All rates include full-time availability and direct communication."
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.pricingContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          )}
        >
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={classNames(
                styles.pricingCard,
                plan.popular && styles.popularCard
              )}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <CustomBadge title="Most Popular" />
                </div>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.roleTitle}>{plan.role}</h3>
                <p className={styles.experience}>{plan.experience}</p>
                <div className={styles.skills}>
                  {plan.skills.map((skill, index) => (
                    <CustomBadge key={index} title={skill} />
                  ))}
                </div>
              </div>

              <div className={styles.pricing}>
                <div className={styles.monthlyRate}>
                  <span className={styles.rateLabel}>Monthly Rate</span>
                  <span className={styles.rateValue}>{plan.monthlyRate}</span>
                </div>
                <div className={styles.hourlyRate}>
                  <span className={styles.rateLabel}>Hourly Rate</span>
                  <span className={styles.rateValue}>{plan.hourlyRate}</span>
                </div>
              </div>

              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>What's Included:</h4>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.action}>
                <CustomButton title="Get Started" containerStyle="w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>
            * All rates are in USD. Pricing may vary based on specific
            requirements, project complexity, and team size. Contact us for
            custom quotes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingExample;
