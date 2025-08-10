"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomBadge from "components/common/customBadge";
import CustomButton from "components/common/customButton";

const comparisonData = [
  {
    id: 1,
    otherAgencies: "Experienced team delivering standard solutions.",
    devArtVentures: "Skilled specialists delivering customized solutions.",
  },
  {
    id: 2,
    otherAgencies: "Offers standard, template-based designs.",
    devArtVentures: "Offers innovative, bespoke website designs.",
  },
  {
    id: 3,
    otherAgencies: "Limited post-launch support and updates.",
    devArtVentures: "Comprehensive post-launch support and updates.",
  },
  {
    id: 4,
    otherAgencies: "Basic performance with average loading times.",
    devArtVentures: "Optimal performance with fast loading times.",
  },
  {
    id: 5,
    otherAgencies: "Basic SEO practices implemented.",
    devArtVentures: "Advanced SEO tactics for enhanced online visibility.",
  },
];

const Comparison = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div>
          <SectionHeadingCard
            badge="Comparison"
            heading="Choosing Us Over Others"
            description="See why we stand out with superior service, innovation, and client satisfaction benchmarks."
            centered={true}
            maxParticles={200}
            section="services"
            backgroundImage={Images.ServiceSectionBg.src}
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
              <h4>Other Agencies</h4>
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
              <Image width={31} height={31} src={Images.Logo.src} alt="logo" />
              <span>DevArtVentures</span>
            </div>
          </div>

          <div
            className={classNames(
              styles.content,
              "flex flex-col lg:gap-4 md:3.5 gap-3"
            )}
          >
            {comparisonData.map((item) => (
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
