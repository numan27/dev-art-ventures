"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomCard from "components/common/customCard";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignFeature3.src,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications built with React, Vue, Angular, and Next.js. We create intuitive user interfaces that deliver exceptional user experiences",
  },
  {
    id: 2,
    icon: Images.DevFeature3.src,
    title: "Backend Development",
    description:
      "Robust server-side applications and APIs built with Node.js, Python, PHP, and Java. We ensure scalability, security, and optimal performance",
  },
  {
    id: 3,
    icon: Images.DesignService6.src,
    title: "E-Commerce Development",
    description:
      "Custom e-commerce solutions with payment processing, inventory management, and seamless shopping experiences that drive conversions",
  },
  {
    id: 4,
    icon: Images.DevFeature6.src,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, bug fixes, updates, and performance optimization to keep your applications running smoothly",
  },
  {
    id: 5,
    icon: Images.DevService5.src,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs that enable seamless integration between systems and provide secure data exchange capabilities",
  },
  {
    id: 6,
    icon: Images.DesignService4.src,
    title: "MVP Development",
    description:
      "Rapid development of minimum viable products to validate your business ideas and get to market quickly with core features",
  },
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <CustomSectionHeading
          badge="Our Services"
          heading="Comprehensive Development Solutions"
          description="From frontend to backend, APIs to e-commerce, we provide end-to-end development services tailored to your business requirements"
          centered={true}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3 bg-transparent"
          )}
        >
          {servicesData.map((service) => (
            <CustomCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              // button={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
