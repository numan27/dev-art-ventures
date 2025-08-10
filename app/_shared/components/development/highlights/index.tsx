"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const Highlights = () => {
  const cardData = [
    {
      icon: Images.DesignProcess1.src,
      title: "Requirements Analysis",
      description:
        "Deep understanding of your business needs and technical requirements to deliver the perfect solution",
      size: "large",
      accent: "primary",
    },
    {
      icon: Images.DevFeature2.src,
      title: "Agile Development",
      description:
        "Iterative development process with regular feedback and continuous improvement throughout the project",
      size: "medium",
      accent: "secondary",
    },
    {
      icon: Images.DevFeature3.src,
      title: "Scalable Architecture",
      description:
        "Building robust, scalable systems that grow with your business and handle increasing demands",
      size: "medium",
      accent: "tertiary",
    },
    {
      icon: Images.DevFeature4.src,
      title: "Code Quality",
      description:
        "Clean, maintainable code following industry best practices and coding standards",
      size: "small",
      accent: "primary",
    },
    {
      icon: Images.DevFeature5.src,
      title: "Testing & QA",
      description:
        "Comprehensive testing including unit tests, integration tests, and user acceptance testing",
      size: "small",
      accent: "secondary",
    },
    {
      icon: Images.DevFeature6.src,
      title: "Deployment & Support",
      description:
        "Smooth deployment process with ongoing maintenance, updates, and technical support",
      size: "large",
      accent: "tertiary",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Why Choose Us"
          heading="How We Deliver Development Excellence"
          description="Our proven development methodology combines technical expertise with business understanding to deliver solutions that exceed expectations"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.masonryContainer}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={classNames(
                styles.masonryCard,
                styles[
                  `size${
                    card.size.charAt(0).toUpperCase() + card.size.slice(1)
                  }`
                ],
                styles[
                  `accent${
                    card.accent.charAt(0).toUpperCase() + card.accent.slice(1)
                  }`
                ]
              )}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
