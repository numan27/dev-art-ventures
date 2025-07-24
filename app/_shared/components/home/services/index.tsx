"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import { Icons, Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import CustomBadge from "components/common/customBadge";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
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
    title: "Recruitment",
    icon: Images.ServiceIcon3,
    description: [
      "Hiring the right people can be challenging, but we make it simple. Our recruitment process connects you with skilled, job-ready candidates through a reliable and thoughtful approach.",
      "With support from our academy and professional network, we ensure every match fits both the role and your company culture. Whether you're growing a team or scaling fast, we've got you covered.",
    ],
    videoSrc: "/recruitment.mp4",
    buttonText: "Visit Now",
  },
  {
    id: 4,
    title: "DevArtAcademy",
    icon: Images.ServiceIcon4,
    description: [
      "DevArtAcademy is where practical learning meets real opportunities. Our bootcamps and workshops are built to teach hands-on skills in design, development, and digital tools.",
      "Led by industry professionals, our programs are designed to help beginners start strong and give working professionals a boost. It's not just learning, it's career-building.",
    ],
    videoSrc: "/academy.mp4",
    buttonText: "Visit Now",
  },
];

const Mission = () => {
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
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
            )}
          >
            <CustomBadge title="Ventures" />
            <h2>Things We're Building</h2>
            <p>
              Explore our streamlined approach to creating bespoke websites that
              align with your goals.
            </p>
          </div>
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
                "grid grid-cols-2 lg:gap-10 md:gap-8 sm:gap-6 gap-5"
              )}
            >
              <div
                className={classNames(
                  styles.content,
                  "flex flex-col justify-between items-start gap-4",
                  index % 2 === 1 ? "order-2" : "order-1"
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

              {/* Video Section - Position based on index */}
              <div
                className={classNames(
                  styles.videoContainer,
                  index % 2 === 1 ? "order-1" : "order-2" // Reverse order for odd indices
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

export default Mission;
