"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import Image from "next/image";
import CustomButton from "components/common/customButton";

const ProgramsOffered = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Routes"
          heading="Which Program is Right for You?"
          description="Take The Route That is Easy For You & Get Ahead In Your Design Skills"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-2 grid-cols-1 md:gap-4 gap-3"
          )}
        >
          <div className={classNames(styles.cardItem, styles.workshop)}>
            <Image
              src={Images.WorkshopIcon}
              alt="Workshop"
              width={70}
              height={70}
            />
            <h4>Workshops</h4>
            <p>
              Industry Masterclass Workshops for professionals & decision-makers
              who want elite insights.
            </p>
            <CustomButton title="Explore Workshops" />
            <div className={styles.cardFooter}>
              <p>Taught by: CEOs, Founders, VCs, and Tech Leaders</p>
            </div>
          </div>
          <div className={classNames(styles.cardItem, styles.bootcamp)}>
            <Image
              src={Images.BootcampIcon}
              alt="Bootcamp"
              width={70}
              height={70}
            />
            <h4>Bootcamps</h4>
            <p>
              UI/UX & Dev Bootcamps for beginners & career-switchers who need
              structured training.
            </p>
            <CustomButton title="Explore Bootcamps" />
            <div className={styles.cardFooter}>
              <p>Taught by: Senior Designers & Developers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsOffered;
