"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomButton from "components/common/customButton";
import NextLink from "next/link";
import { routeConstant } from "routes/constants";

const Pricing = () => {
  const pricingFeatures = [
    {
      icon: "💰",
      title: "Placement Fee",
      description: "Fixed 18% of first year salary",
      highlight: "No hidden costs",
    },
    {
      icon: "✅",
      title: "No Upfront Costs",
      description: "Pay only when you hire",
      highlight: "Zero risk",
    },
    {
      icon: "🛡️",
      title: "60-Day Guarantee",
      description: "Free replacement if candidate leaves or underperforms",
      highlight: "Peace of mind",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Pricing"
          heading="Simple, Transparent Pricing"
          description="No surprises, no hidden fees. Just straightforward pricing that works for your business:"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.pricingContainer}>
          {pricingFeatures.map((feature, index) => (
            <div key={index} className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>
                    {feature.description}
                  </p>
                  <div className={styles.highlight}>{feature.highlight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Find Your Perfect Hire?
            </h3>
            <p className={styles.ctaDescription}>
              Start your recruitment process today with our transparent pricing
              and guaranteed results.
            </p>
            <NextLink
              href={routeConstant.contact.path}
              className={styles.ctaButton}
            >
              <CustomButton title="Request Talent Today" />
            </NextLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
