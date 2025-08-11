"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomBadge from "components/common/customBadge";
import BrandSlider from "components/common/brandSlider";
import useWindowDimensions from "hooks/useWindowDimensions";

interface HeroBannerProps {
  tag?: string;
  heading: string | any;
  description: string | any;
  primaryButtonText: string;
  primaryButtonPath: string;
  secondaryButtonText?: string;
  secondaryButtonPath?: string;
  containerClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

const RecruitmentHeroBanner = ({
  tag,
  heading,
  description,
  primaryButtonText,
  primaryButtonPath,
  secondaryButtonText,
  secondaryButtonPath,
  containerClassName,
  headingClassName,
  descriptionClassName,
}: HeroBannerProps) => {
  const { width } = useWindowDimensions();

  const handlePrimaryClick = () => {
    if (primaryButtonPath.startsWith("http")) {
      window.open(primaryButtonPath, "_blank");
    } else {
      window.location.href = primaryButtonPath;
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryButtonPath && secondaryButtonPath.startsWith("http")) {
      window.open(secondaryButtonPath, "_blank");
    } else if (secondaryButtonPath) {
      window.location.href = secondaryButtonPath;
    }
  };

  return (
    <div className={styles.fullWidthWrapper}>
      <div
        className={classNames(
          styles.sectionWrapper,
          containerClassName,
          "relative"
        )}
      >
        {/* Sophisticated dark background with subtle patterns */}
        <div className={styles.darkBackground}>
          <div className={styles.gradientOverlay}></div>
          <div className={styles.geometricPattern}></div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center mt-16">
          <div
            className={classNames(
              styles.sectionContainer,
              "flex items-center flex-col justify-center gap-6 relative z-10 mt-16"
            )}
          >
            {tag && (
              <div className={styles.sophisticatedTag}>
                <CustomBadge title={tag} />
                <div className={styles.tagGlow}></div>
              </div>
            )}

            <h1
              className={classNames(
                styles.sophisticatedHeading,
                headingClassName
              )}
            >
              {heading}
            </h1>

            <p
              className={classNames(
                styles.sophisticatedDescription,
                descriptionClassName
              )}
            >
              {description}
            </p>

            <div className={styles.sophisticatedButtons}>
              <CustomButton
                title={primaryButtonText}
                onClick={handlePrimaryClick}
                containerStyle="primary-button"
              />
              {secondaryButtonText && (
                <CustomButton
                  containerStyle="secondary-button"
                  title={secondaryButtonText}
                  onClick={handleSecondaryClick}
                />
              )}
            </div>

            <div className={styles.trustSection}>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustContent}>
                <span className={styles.trustText}>
                  Trusted by 500+ companies worldwide
                </span>
                <div className={styles.trustBadges}>
                  <span className={styles.trustBadge}>ISO Certified</span>
                  <span className={styles.trustBadge}>GDPR Compliant</span>
                  <span className={styles.trustBadge}>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Recruitment service alternative link */}
            <div className={styles.recruitmentAlternative}>
              <p className={styles.alternativeText}>
                Looking for permanent hires instead?{" "}
                <a
                  href="https://recruitment.numanventures.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.alternativeLink}
                >
                  See our Recruitment Service
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.modernBrandSection}>
          <div className={styles.brandHeader}>
            <h6>Industry Leaders Trust Us</h6>
          </div>
          <BrandSlider />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentHeroBanner;
