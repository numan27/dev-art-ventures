"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import NextLink from "next/link";

const Highlights = () => {
  const cardData = [
    {
      icon: Images.DesignFeature1.src,
      title: "Advanced Git Workflow",
      description:
        "Enterprise-grade Git strategies with feature branching, code reviews, automated CI/CD pipelines, and comprehensive version control management",
      size: "large",
      accent: "primary",
    },
    {
      icon: Images.DevFeature2.src,
      title: "Cloud-Native Development",
      description:
        "Building applications designed for cloud environments with microservices architecture, containerization, and auto-scaling capabilities",
      size: "medium",
      accent: "secondary",
    },
    {
      icon: Images.DevFeature3.src,
      title: "Performance Optimization",
      description:
        "Code-level optimizations, database query tuning, caching strategies, and performance monitoring to ensure lightning-fast applications",
      size: "medium",
      accent: "tertiary",
    },
    {
      icon: Images.DevFeature4.src,
      title: "Security-First Approach",
      description:
        "Built-in security measures including input validation, authentication, authorization, and regular security audits and penetration testing",
      size: "small",
      accent: "primary",
    },
    {
      icon: Images.DevFeature5.src,
      title: "API-First Design",
      description:
        "RESTful and GraphQL APIs with comprehensive documentation, rate limiting, and seamless third-party integrations",
      size: "small",
      accent: "secondary",
    },
    {
      icon: Images.DevFeature6.src,
      title: "DevOps Excellence",
      description:
        "Infrastructure as Code, automated testing, deployment automation, monitoring, and 24/7 system reliability and uptime",
      size: "large",
      accent: "tertiary",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Technical Excellence"
          heading="Advanced Development Capabilities"
          description="Our development team excels in cutting-edge technologies and methodologies, delivering robust, scalable, and maintainable solutions that drive business growth"
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
          <NextLink
            target="_blank"
            href="https://calendly.com/devartventures/30min"
            className={styles.ctaButton}
          >
            <CustomButton title="Get Started Today" />
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
