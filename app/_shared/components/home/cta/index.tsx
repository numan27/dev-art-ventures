"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomBadge from "components/common/customBadge";
import NextLink from "next/link";

interface CTAProps {
  showBadge?: boolean;
  tag?: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonTarget?: "_blank" | "_self";
  className?: string;
}

const CTA = ({
  showBadge = true,
  tag = "Transform Your Vision",
  heading,
  description,
  buttonText,
  buttonLink,
  buttonTarget = "_blank",
  className = "",
}: CTAProps) => {
  return (
    <div
      className={classNames(styles.sectionWrapper, className)}
      data-section="mission"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center xs:px-0 px-3"
          )}
        >
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
            )}
          >
            {showBadge && <CustomBadge title={tag} />}
            <h2>{heading}</h2>
            <p>{description}</p>
            <NextLink
              target={buttonTarget}
              href={buttonLink}
              className={styles.ctaButton}
            >
              <CustomButton title={buttonText} />
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
