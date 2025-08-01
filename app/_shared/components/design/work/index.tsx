"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";

const workData = [
  Images.DesignWork1,
  Images.DesignWork2,
  Images.DesignWork3,
  Images.DesignWork4,
  Images.DesignWork5,
  Images.DesignWork6,
  Images.DesignWork7,
  Images.DesignWork8,
  Images.DesignWork9,
  Images.DesignWork10,
  Images.DesignWork11,
  Images.DesignWork12,
  Images.DesignWork13,
  Images.DesignWork14,
  Images.DesignWork15,
  Images.DesignWork16,
  Images.DesignWork17,
  Images.DesignWork18,
  Images.DesignWork19,
  Images.DesignWork20,
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <CustomSectionHeading
          badge="Services"
          heading="Our Work"
          description="From cutting-edge web development to creative design and strategic marketing, we provide tailored solutions to meet your unique needs"
          centered={true}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-2 grid-cols-1 md:gap-4 gap-3"
          )}
        >
          {workData.map((service, index) => (
            <Image
              key={index}
              src={service.src}
              alt={service.src}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
