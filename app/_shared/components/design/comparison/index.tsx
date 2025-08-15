"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import {
  ComparisonItem,
  ComparisonProps,
  defaultComparisonData,
} from "./constants";

const Comparison = ({
  comparisonData = defaultComparisonData,
  badge = "Comparison",
  heading = "Choosing Us Over Others",
  description = "See why we stand out with superior service, innovation, and client satisfaction benchmarks.",
  centered = true,
  maxParticles = 200,
  section = "services",
  backgroundImage,
  leftLabel = "Other Agencies",
  rightLabel = "DevArtVentures",
  showLogo = true,
}: ComparisonProps) => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div>
          <SectionHeadingCard
            badge={badge}
            heading={heading}
            description={description}
            centered={centered}
            maxParticles={maxParticles}
            section={section}
            backgroundImage={backgroundImage || Images.ServiceSectionBg.src}
          />
        </div>

        <div className={classNames(styles.contentContainer)}>
          <div
            className={classNames(
              styles.header,
              "grid grid-cols-12 gap-4 md:w-4/6 w-full mx-auto"
            )}
          >
            <div className="col-span-5 flex items-center justify-center xs:pl-0 pl-8">
              <h4 className="text-center break-words">{leftLabel}</h4>
            </div>
            <span className="col-span-2 flex items-center justify-center">
              <Image width={70} height={70} src={Images.Vs.src} alt="arrow" />
            </span>
            <div
              className={classNames(
                styles.logoContainer,
                "col-span-5 flex justify-center items-center gap-2 xs:pr-0 pr-8"
              )}
            >
              {showLogo && (
                <Image
                  width={31}
                  height={31}
                  src={Images.Logo.src}
                  alt="logo"
                />
              )}
              <h4 className="text-center break-words">{rightLabel}</h4>
            </div>
          </div>

          <div
            className={classNames(
              styles.content,
              "flex flex-col lg:gap-4 md:3.5 gap-3"
            )}
          >
            {comparisonData.map((item: ComparisonItem) => (
              <div
                key={item.id}
                className={classNames(styles.cardItem, "grid grid-cols-2")}
              >
                <div
                  className={classNames(
                    styles.otherAgencies,
                    "flex items-center gap-2"
                  )}
                >
                  <Image
                    width={24}
                    height={24}
                    src={Images.StarBullet.src}
                    alt="star"
                  />
                  <h5>{item.otherAgencies}</h5>
                </div>
                <div
                  className={classNames(
                    styles.devArtVentures,
                    "flex items-center gap-2"
                  )}
                >
                  <Image
                    width={24}
                    height={24}
                    src={Images.PowerBullet.src}
                    alt="lightning"
                  />
                  <h5>{item.devArtVentures}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
