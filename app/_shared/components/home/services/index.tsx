"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import SectionHeading from "../../common/sectionHeading";
import Link from "next/link";
import { Images } from "assets";
import { routeConstant } from "routes/constants";

const Services = () => {
  const services = [
    {
      title: routeConstant.services.managedIT.title,
      description:
        "End-to-end IT management and monitoring for seamless, worry-free operations.",
      link: routeConstant.services.managedIT.path,
      image: Images.Service1,
    },
    {
      title: routeConstant.services.cyberSecurity.title,
      description:
        "Comprehensive protection for your business, network, and data.",
      link: routeConstant.services.cyberSecurity.path,
      image: Images.Service4,
    },
    {
      title: routeConstant.services.networkInfrastructure.title,
      description:
        "Design, setup, and support for secure, high-performance networks.",
      link: routeConstant.services.networkInfrastructure.path,
      image: Images.Service5,
    },
    {
      title: routeConstant.services.itSupport.title,
      description:
        "Fast, reliable support to resolve your IT issues and keep you running.",
      link: routeConstant.services.itSupport.path,
      image: Images.Service2,
    },
    {
      title: routeConstant.services.itBusinessConsulting.title,
      description:
        "Strategic IT consulting to optimize and grow your business.",
      link: routeConstant.services.itBusinessConsulting.path,
      image: Images.Service3,
    },

    {
      title: routeConstant.services.dataCenter.title,
      description:
        "On-site engineering and support for reliable data center operations.",
      link: routeConstant.services.dataCenter.path,
      image: Images.Service6,
    },
    {
      title: routeConstant.services.webDevelopment.title,
      description:
        "Custom web development and design for engaging digital experiences.",
      link: routeConstant.services.webDevelopment.path,
      image: Images.Service7,
    },
    {
      title: routeConstant.services.creative.title,
      description:
        "Creative digital marketing and content to boost your brand online.",
      link: routeConstant.services.creative.path,
      image: Images.Service8,
    },
    {
      title: routeConstant.services.seoDigitalMarketing.title,
      description:
        "SEO and digital marketing to grow your reach and attract customers.",
      link: routeConstant.services.seoDigitalMarketing.path,
      image: Images.Service9,
    },
  ];

  return (
    <section className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          align="center"
        />
        <div style={{ marginTop: "40px" }}>
          <div
            className={classNames(
              styles.servicesGrid,
              "grid grid-cols-3 xl:gap-7 lg:gap-5 gap-4"
            )}
          >
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className={styles.serviceCard}
              >
                <div
                  className={styles.cardBg}
                  style={{
                    backgroundImage: `url(${
                      service.image?.src || service.image
                    })`,
                  }}
                >
                  <div className={styles.overlay}>
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                    <div className={styles.buttonContainer}>
                      <CustomButton
                        title="Learn More"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = service.link;
                        }}
                        whiteButton
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Link href={routeConstant.services.path}>
              <CustomButton title="Explore All" onClick={() => {}} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
