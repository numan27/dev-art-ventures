"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomBadge from "components/common/customBadge";
import CustomButton from "components/common/customButton";

const steps = [
  {
    id: 1,
    icon: Images.DesignProcess1.src,
    title: "Discover",
    description:
      "We listen, research, and align on goals to deeply understand your users and business.",
  },
  {
    id: 2,
    icon: Images.DesignProcess2.src,
    title: "Define",
    description:
      "We synthesize insights into a clear problem statement, scope, and success metrics.",
  },
  {
    id: 3,
    icon: Images.DesignProcess3.src,
    title: "Design",
    description:
      "We explore concepts, craft UX flows and UI, and iterate quickly on feedback.",
  },
  {
    id: 4,
    icon: Images.DesignProcess4.src,
    title: "Develop",
    description:
      "We build performant, scalable solutions with modern stacks and best practices.",
  },
  {
    id: 5,
    icon: Images.DesignProcess5.src,
    title: "Test",
    description:
      "We validate with QA and users, refining until everything feels fast and intuitive.",
  },
  {
    id: 6,
    icon: Images.DesignProcess6.src,
    title: "Launch & Iterate",
    description:
      "We ship, monitor, and continuously improve based on real-world insights.",
  },
];

const HomeProcess = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="process"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Process"
          heading="Our Design & Development Process"
          description="A vibrant, modern 6-step flow that keeps teams aligned and users delighted."
          centered={true}
          maxParticles={180}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.cardContainer,
            "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-3 bg-transparent"
          )}
        >
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={classNames(styles.cardItem, "flex flex-col")}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120}
              style={{
                // progress animation stagger
                // @ts-ignore custom CSS var for SCSS
                ["--delay"]: `${(idx % 3) * 0.12}s`,
              }}
            >
              <div className={styles.progressBar} />

              <div className={classNames(styles.topRow)}>
                <span className={styles.iconWrap}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                  />
                </span>
                <CustomBadge title={`Step 0${step.id}`} height={40} />
              </div>

              <h4>{step.title}</h4>
              <div className={styles.dashLine} />
              <p>{step.description}</p>
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

export default HomeProcess;
