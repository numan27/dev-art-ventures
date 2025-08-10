"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import { Icons, Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const servicesData = [
  {
    id: 1,
    title: "Design & Creative",
    icon: Images.ServiceIcon1,
    description: [
      "At DevArtVentures, we design digital experiences that feel natural and easy to use. Our focus is on creating interfaces that are clean, intuitive, and aligned with your brand.",
      "Whether you're starting fresh or improving an existing product, we take care of everything from wireframes to high-fidelity designs. It's all about building experiences that users love.",
    ],
    videoSrc: "/design.mp4",
    buttonText: "Visit Now",
  },
  {
    id: 2,
    title: "Web Development",
    icon: Images.ServiceIcon2,
    description: [
      "We create custom websites tailored to your business goals. No templates or shortcuts, just fast, secure, and scalable solutions built with care.",
      "From modern business sites to powerful web applications, we handle the entire process from concept to deployment. The result? A website that looks great, works fast, and grows with you.",
    ],
    videoSrc: "/web.mp4",
    buttonText: "Visit Now",
  },
  {
    id: 3,
    title: "Staff Augmentation",
    icon: Images.ServiceIcon3,
    description: [
      "Scale your team with pre-vetted tech talent. Access developers, designers, and engineers who can join your projects immediately.",
      "Get matched within 24 hours and start in as little as 3 days. Flexible engagements, culture-fit matching, and ongoing support from our network and academy.",
    ],
    videoSrc: "/recruitment.mp4",
    buttonText: "Visit Now",
  },
];

const Services = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center "
          )}
        >
          <div className={styles.particlesContainer}>
            <AdaptiveParticles section="services" maxParticles={100} />
          </div>
          <SectionHeadingCard
            heading="What We Do"
            description="Explore our streamlined approach to creating bespoke websites that align with your goals."
            badge="Ventures"
            centered={true}
            maxParticles={150}
            section="services"
          />
        </div>

        <div
          className={classNames(
            styles.servicesContainer,
            "flex flex-col lg:gap-4 gap-3"
          )}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
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
                <div className={classNames("flex items-center gap-2.5")}>
                  <span className={styles.iconContainer}>
                    <Image
                      src={service.icon}
                      alt={`${service.title.toLowerCase()}-icon`}
                      width={52}
                      height={52}
                    />
                  </span>
                  <h3>{service.title}</h3>
                </div>
                {service.description.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
                <CustomButton
                  title={service.buttonText}
                  IconDirection="right"
                  Icon={Icons.ArrowRight}
                />
              </div>

              <div
                className={classNames(
                  styles.videoContainer,
                  index % 2 === 1 ? "lg:order-1 order-1" : "lg:order-2 order-1"
                )}
              >
                <video src={service.videoSrc} autoPlay muted loop />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
