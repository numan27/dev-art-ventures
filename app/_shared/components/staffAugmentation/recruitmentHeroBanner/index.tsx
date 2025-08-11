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
          "flex items-center justify-center relative flex-col gap-12"
        )}
      >
        {/* Subtle animated background elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.bgElement1}></div>
          <div className={styles.bgElement2}></div>
        </div>

        <div className="relative w-full flex justify-center h-full">
          <div
            className={classNames(
              styles.sectionContainer,
              "flex items-center flex-col justify-center h-full lg:gap-6 md:gap-5 gap-4 relative"
            )}
          >
            {tag && (
              <div className={styles.tagWrapper}>
                <CustomBadge title={tag} />
              </div>
            )}

            <h1 className={classNames(styles.heading, headingClassName)}>
              {heading}
            </h1>

            <p className={classNames(styles.description, descriptionClassName)}>
              {description}
            </p>

            <div
              className={classNames(
                styles.buttons,
                "flex items-center gap-3 mt-2"
              )}
            >
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

            {/* Enhanced alternative link below primary button */}
            <div className={styles.alternativeLink}>
              <p>
                Looking for permanent hires instead?{" "}
                <a
                  href="https://recruitment.numanventures.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.alternativeLinkText}
                >
                  See our Recruitment Service
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex flex-col gap-2 items-center justify-center relative z-50">
            <h6 className="text-center">Industry Leaders Trust Us</h6>
            <BrandSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentHeroBanner;
