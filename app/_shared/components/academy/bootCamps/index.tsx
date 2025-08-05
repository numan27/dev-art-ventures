"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const bootcampsData = [
  {
    id: 1,
    title: "UI/UX Bootcamp",
    date: "23/12/2025",
    duration: "3 Months",
    taughtBy: "CEOs, Founders, VCs, and Tech Leaders",
    format: "Intensive, interactive, and networking-heavy",
    topics: "AI, Startup Growth, Product Strategy, Leadership",
    imageSrc: Images.DesignBootcamp.src,
    buttonText: "Book Now",
    isSecondary: false,
  },
  {
    id: 2,
    title: "Dev Bootcamp",
    date: "23/12/2025",
    duration: "3 Months",
    taughtBy: "CEOs, Founders, VCs, and Tech Leaders",
    format: "Intensive, interactive, and networking-heavy",
    topics: "AI, Startup Growth, Product Strategy, Leadership",
    imageSrc: Images.DevBootcamp.src,
    buttonText: "Early Bird Discount",
    isSecondary: true,
  },
];

const Bootcamps = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Bootcamps"
          heading="Upcoming Bootcamps"
          description="See why we stand out with superior service, innovation, and client satisfaction benchmarks."
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.servicesContainer,
            "flex flex-col lg:gap-4 gap-3"
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
                  "flex flex-col justify-between items-start lg:gap-4 gap-3",
                  index % 2 === 1 ? "lg:order-2 order-2" : "lg:order-1 order-2"
                )}
              >
                <div className={classNames("flex flex-col gap-3")}>
                  <h3>{bootcamp.title}</h3>

                  <div className="flex flex-col gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2 mt-2">
                      <p>Date: {bootcamp.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>Duration: {bootcamp.duration}</p>
                    </div>
                    <div className="flex items-start gap-2 mt-3">
                      <span>✔</span>
                      <span className="font-semibold">Taught by:</span>
                      <span>{bootcamp.taughtBy}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✔</span>
                      <span className="font-semibold">Format:</span>
                      <span>{bootcamp.format}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✔</span>
                      <span className="font-semibold">Topics:</span>
                      <span>{bootcamp.topics}</span>
                    </div>
                  </div>
                </div>

                <CustomButton
                  containerStyle="md:mt-0 mt-4"
                  title={bootcamp.buttonText}
                  isSecondaryButton={bootcamp.isSecondary}
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

export default Bootcamps;
