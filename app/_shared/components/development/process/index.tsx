"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomButton from "components/common/customButton";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignProcess1.src,
    title: "Tailored Designs",
    description:
      "Talk to users and understand deeply the challenges they're facing to solve problems for them",
  },
  {
    id: 2,
    icon: Images.DesignProcess2.src,
    title: "Mobile-First Approach",
    description:
      "Define the actual problem and document everything so we're focused on what exactly is the problem we're solving",
  },
  {
    id: 3,
    icon: Images.DesignProcess3.src,
    title: "Optimized Performance",
    description:
      "Come up with diverse ideas on how can we solve the problem effectively with more than one solutions",
  },
  {
    id: 4,
    icon: Images.DesignProcess4.src,
    title: "Scalability",
    description:
      "Build the actual design from the feedback and make it come to life. make it come to life",
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
          heading="Our Proven Process"
          description="Explore our streamlined approach to creating bespoke solutions that align with your goals."
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-2 grid-cols-1 md:gap-4 gap-3 bg-transparent"
          )}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={classNames(styles.cardItem, "flex flex-col")}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center md:mt-12 sm:mt-10 mt-8">
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </div>
  );
};

export default Process;
