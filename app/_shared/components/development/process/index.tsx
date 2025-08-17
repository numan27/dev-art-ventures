"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignProcess1.src,
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, define project scope, and create a detailed development roadmap with timelines and milestones",
    step: "01",
  },
  {
    id: 2,
    icon: Images.DesignProcess2.src,
    title: "Design & Architecture",
    description:
      "Our team designs the system architecture, creates wireframes, and establishes the technical foundation for your project",
    step: "02",
  },
  {
    id: 3,
    icon: Images.DesignProcess3.src,
    title: "Development & Testing",
    description:
      "We build your application using modern technologies, following agile methodologies with continuous testing and quality assurance",
    step: "03",
  },
  {
    id: 4,
    icon: Images.DesignProcess4.src,
    title: "Deployment & Launch",
    description:
      "We deploy your application to production, perform final testing, and provide comprehensive documentation and training",
    step: "04",
  },
];

const Process = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div>
          <SectionHeadingCard
            badge="Our Process"
            heading="Streamlined Development Workflow"
            description="Our proven development methodology ensures quality, transparency, and timely delivery at every stage of your project."
            centered={true}
            maxParticles={200}
            backgroundImage={Images.ServiceSectionBg.src}
          />
        </div>

        <div className={styles.timelineContainer}>
          {servicesData.map((service, index) => (
            <div key={service.id} className={styles.timelineItem}>
              <div className={styles.timelineStep}>
                <span className={styles.stepNumber}>{service.step}</span>
                <div className={styles.stepIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className={styles.icon}
                  />
                </div>
              </div>

              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{service.title}</h3>
                <p className={styles.timelineDescription}>
                  {service.description}
                </p>
              </div>

              {index < servicesData.length - 1 && (
                <div className={styles.timelineConnector} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
