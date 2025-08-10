"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";

const bootcampsData = [
  {
    id: 1,
    badge: "Scale Your Team",
    title: "Access Pre-Vetted Tech Talent.",
    description:
      "We know finding the right talent is tough. That's why we only approve top professionals on our platform.",
    imageSrc: Images.HireTalent.src,
    buttonText: "Start Scaling",
  },
  {
    id: 2,
    badge: "Project Augmentation",
    title: "Flexible Team Scaling.",
    description:
      "Scale your development team up or down based on project needs without the overhead of permanent hiring.",
    imageSrc: Images.FindJobs.src,
    buttonText: "Learn More",
  },
];

const HireTalent = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.servicesContainer,
            "flex flex-col lg:gap-6 gap-5"
          )}
        >
          {bootcampsData.map((bootcamp, index) => (
            <div
              key={bootcamp.id}
              className={classNames(
                styles.serviceItem,
                "grid lg:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-6 gap-5"
              )}
            >
              <div
                className={classNames(
                  styles.content,
                  "flex flex-col items-start justify-center lg:gap-4 gap-3",
                  index % 2 === 1 ? "lg:order-2 order-2" : "lg:order-1 order-2"
                )}
              >
                <div className={classNames("flex flex-col gap-3")}>
                  <div className={styles.badge}>
                    <span>{bootcamp.badge}</span>
                  </div>
                  <h3>{bootcamp.title}</h3>
                  <p>{bootcamp.description}</p>
                </div>

                <CustomButton
                  containerStyle="mt-4"
                  title={bootcamp.buttonText}
                />
              </div>

              <div
                className={classNames(
                  styles.videoContainer,
                  index % 2 === 1 ? "lg:order-1 order-1" : "lg:order-2 order-1"
                )}
              >
                <img
                  src={bootcamp.imageSrc}
                  alt={bootcamp.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireTalent;
