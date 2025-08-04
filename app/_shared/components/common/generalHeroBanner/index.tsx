"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../customButton";
import CustomBadge from "../customBadge";
import BrandSlider from "../brandSlider";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

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

const GeneralHeroBanner = ({
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
    <>
      <div className={styles.fullWidthWrapper}>
        <div
          className={classNames(
            styles.sectionWrapper,
            containerClassName,
            "flex items-center justify-center relative"
          )}
        >
          <div className="relative w-full flex justify-center h-full pt-16">
            <div
              className={classNames(
                styles.sectionContainer,
                "flex items-center flex-col justify-center h-full gap-3 relative"
              )}
            >
              {tag && <CustomBadge title={tag} />}
              <h1 className={classNames("text-center", headingClassName)}>
                {heading}
              </h1>
              <p className={classNames(descriptionClassName)}>{description}</p>
              <div
                className={classNames(
                  styles.buttons,
                  "flex items-center gap-2 mt-2"
                )}
              >
                <CustomButton
                  title={primaryButtonText}
                  onClick={handlePrimaryClick}
                />
                {secondaryButtonText && (
                  <CustomButton
                    containerStyle="secondary-button"
                    title={secondaryButtonText}
                    onClick={handleSecondaryClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <BrandSlider />
      </div>
    </>
  );
};

export default GeneralHeroBanner;
