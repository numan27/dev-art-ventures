"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import { Icons, Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import NextLink from "next/link";
import { routeConstant } from "routes/constants";

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
    buttonText: "Visit Details",
    buttonLink: routeConstant.services.design.path,
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
    buttonText: "Visit Details",
    buttonLink: routeConstant.services.development.path,
  },
  {
    id: 3,
    title: "Staff Augmentation",
    icon: Images.ServiceIcon3,
    description: [
      "Scale your team with pre-vetted design talent. Access skilled designers who can join your projects immediately.",
      "Get matched within 24 hours and start in as little as 3 days. Flexible engagements, culture-fit matching, and ongoing support from our network.",
    ],
    videoSrc: "/recruitment.mp4",
    buttonText: "Visit Details",
    buttonLink: routeConstant.services.staffAugmentation.path,
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
            badge="Services"
            heading="How We Help You Build & Scale"
            description="Explore our streamlined approach to creating bespoke websites that align with your goals."
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
            <NextLink
              key={service.id}
              href={service.buttonLink}
              className={styles.serviceItemLink}
            >
              <div
                className={classNames(
                  styles.serviceItem,
                  "grid lg:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-6 gap-5 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                )}
              >
                <div
                  className={classNames(
                    styles.content,
                    "flex flex-col justify-between items-start lg:gap-4 gap-3",
                    index % 2 === 1
                      ? "lg:order-2 order-2"
                      : "lg:order-1 order-2"
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
                  <div onClick={(e) => e.stopPropagation()}>
                    <CustomButton
                      title={service.buttonText}
                      IconDirection="right"
                      Icon={Icons.ArrowRight}
                    />
                  </div>
                </div>

                <div
                  className={classNames(
                    styles.videoContainer,
                    index % 2 === 1
                      ? "lg:order-1 order-1"
                      : "lg:order-2 order-1"
                  )}
                >
                  <video src={service.videoSrc} autoPlay muted loop />
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
