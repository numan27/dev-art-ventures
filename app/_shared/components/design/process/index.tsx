"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomBadge from "components/common/customBadge";
import CustomButton from "components/common/customButton";
import NextLink from "next/link";
import { routeConstant } from "routes/constants";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignProcess1.src,
    title: "Empathise",
    description:
      "Talk to users and understand deeply the challenges they're facing to solve problems for them",
  },
  {
    id: 2,
    icon: Images.DesignProcess2.src,
    title: "Define",
    description:
      "Define the actual problem and document everything so we're focused on what exactly is the problem we're solving",
  },
  {
    id: 3,
    icon: Images.DesignProcess3.src,
    title: "Ideate",
    description:
      "Come up with diverse ideas on how can we solve the problem effectively with more than one solutions",
  },
  {
    id: 4,
    icon: Images.DesignProcess4.src,
    title: "Prototype",
    description:
      "Build the actual design from the feedback and make it come to life",
  },
  {
    id: 5,
    icon: Images.DesignProcess5.src,
    title: "Test",
    description:
      "Test it out in the market and launch it to receive the feedback from users",
  },
  {
    id: 6,
    icon: Images.DesignProcess6.src,
    title: "Iterate",
    description:
      "Repeat the process in case there is anything missing. It's not guesswork, rather a dedicated process to get things done",
  },
];

const Process = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Process"
          heading="Our Proven 6-Step Process"
          description="Explore our streamlined approach to creating bespoke solutions that align with your goals."
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3 bg-transparent"
          )}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={classNames(styles.cardItem, "flex flex-col")}
            >
              <div className="flex items-center justify-between gap-2">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
                <CustomBadge title={`Step 0${service.id}`} height={40} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center md:mt-12 sm:mt-10 mt-8">
          <NextLink
            href={routeConstant.contact.path}
            className={styles.ctaButton}
          >
            <CustomButton title="Get Started Today" />
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Process;
