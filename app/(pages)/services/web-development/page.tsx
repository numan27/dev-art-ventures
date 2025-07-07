"use client";

import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import {
  FaCode,
  FaLaptop,
  FaMobile,
  FaShoppingCart,
  FaCogs,
  FaRocket,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaSearch,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { Images } from "assets";

// export const metadata: Metadata = {
//   title: "Core IT Ventures | Web Development Services",
//   description:
//     "Professional web development services including custom websites, web applications, and e-commerce solutions. Build your digital presence with our expert team.",
//   alternates: {
//     canonical: "https://coreitventures.com/services/web-development",
//   },
// };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const webServices = [
  {
    icon: <FaCode size={24} color="#fff" />,
    title: "Custom Web Applications",
    desc: "Scalable web applications built with modern technologies and best practices for optimal performance.",
  },
  {
    icon: <FaLaptop size={24} color="#fff" />,
    title: "E-commerce Solutions",
    desc: "Complete e-commerce platforms that drive sales and enhance customer experience with secure payment processing.",
  },
  {
    icon: <FaMobile size={24} color="#fff" />,
    title: "Progressive Web Apps",
    desc: "Fast, reliable, and engaging web applications that work like native apps across all devices.",
  },
  {
    icon: <FaCogs size={24} color="#fff" />,
    title: "API Development",
    desc: "Robust RESTful APIs and microservices architecture for seamless integration and scalability.",
  },
];

const developmentSolutions = [
  {
    icon: <FaRocket size={24} color="#fff" />,
    title: "Frontend Development",
    desc: "Modern, responsive user interfaces built with React, Next.js, and cutting-edge frontend technologies.",
  },
  {
    icon: <FaDatabase size={24} color="#fff" />,
    title: "Backend Development",
    desc: "Scalable server-side solutions with Node.js, Python, and robust database architectures.",
  },
  {
    icon: <FaCloud size={24} color="#fff" />,
    title: "Cloud Deployment",
    desc: "AWS, Azure, and Google Cloud deployment with CI/CD pipelines and automated scaling.",
  },
  {
    icon: <FaShieldAlt size={24} color="#fff" />,
    title: "Security & Performance",
    desc: "Enterprise-grade security measures and performance optimization for maximum reliability.",
  },
];

const webMetrics = [
  { label: "Performance Score", value: "98%" },
  { label: "Security Rating", value: "A+" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Client Satisfaction", value: "100%" },
];

const webTechnologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
];

const projectShowcase = [
  {
    category: "E-commerce",
    title: "Online Retail Platform",
    description:
      "Full-featured e-commerce solution with payment processing and inventory management",
    tech: "React, Node.js, Stripe, MongoDB",
  },
  {
    category: "SaaS",
    title: "Business Management App",
    description:
      "Comprehensive SaaS platform for business operations and team collaboration",
    tech: "Next.js, PostgreSQL, AWS, Redis",
  },
  {
    category: "PWA",
    title: "Mobile-First Web App",
    description:
      "Progressive web app with offline capabilities and push notifications",
    tech: "React, Service Workers, IndexedDB",
  },
  {
    category: "API",
    title: "Microservices Architecture",
    description:
      "Scalable API infrastructure supporting multiple client applications",
    tech: "Node.js, Express, Docker, Kubernetes",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Web Development Services"
        subtitle="Build Powerful Web Solutions with Modern Technologies"
        badge="Web Excellence"
        buttonText="Start Your Project"
        image={Images.WebDevelopmentBg}
      />

      {/* Web Development Services Overview */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Web Development Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {webServices.map((service, i) => (
            <motion.div
              className={styles.stepperItem}
              key={i}
              variants={fadeInUp}
              data-aos="fade-up"
            >
              <div className={styles.stepperIcon}>{service.icon}</div>
              <div className={styles.stepperContent}>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
              {i !== webServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Development Solutions */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Development Solutions"
          title="Full-Stack Web Development"
          align="center"
        />
        <div className={styles.flowGrid}>
          {developmentSolutions.map((solution, i) => (
            <motion.div
              className={styles.flowStep}
              key={i}
              variants={fadeInUp}
              data-aos="fade-up"
              whileHover={{
                scale: 1.045,
                y: -4,
                boxShadow:
                  "0 12px 36px rgba(65, 200, 241, 0.18), 0 0 0 2px #41c8f1",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.flowIcon}>{solution.icon}</div>
              <h4>{solution.title}</h4>
              <p>{solution.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Project Showcase */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Work"
          title="Project Showcase"
          align="center"
        />
        <div className={classNames(styles.customContainer)}>
          <div className={styles.projectGrid}>
            {projectShowcase.map((project, i) => (
              <motion.div
                className={styles.projectCard}
                key={i}
                variants={fadeInUp}
                data-aos="fade-up"
                whileHover={{
                  scale: 1.045,
                  y: -6,
                  boxShadow:
                    "0 12px 36px rgba(65, 200, 241, 0.18), 0 0 0 2px #41c8f1",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.projectHeader}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <h4>{project.title}</h4>
                </div>
                <p>{project.description}</p>
                <div className={styles.projectTech}>
                  <span>{project.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Web Development Metrics */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Performance Metrics"
          title="Web Development Excellence"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {webMetrics.map((metric, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{metric.value}</span>
              <span className={styles.dashboardLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Web Technologies */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Technology Stack"
          title="Modern Web Technologies"
          align="center"
        />
        <div className={styles.techGrid}>
          {webTechnologies.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Process"
          title="Web Development Methodology"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Discovery & Planning",
              desc: "Comprehensive analysis of requirements, user stories, and technical architecture planning.",
            },
            {
              step: 2,
              title: "Design & Prototyping",
              desc: "UI/UX design, wireframing, and interactive prototypes to visualize the user experience.",
            },
            {
              step: 3,
              title: "Development",
              desc: "Agile development process with regular sprints, code reviews, and continuous integration.",
            },
            {
              step: 4,
              title: "Testing & Launch",
              desc: "Comprehensive testing, performance optimization, and deployment with monitoring setup.",
            },
          ].map((process, i) => (
            <motion.div
              className={styles.processStep}
              key={i}
              variants={fadeInUp}
              data-aos="fade-up"
              whileHover={{
                scale: 1.045,
                y: -6,
                boxShadow:
                  "0 12px 36px rgba(65, 200, 241, 0.18), 0 0 0 2px #41c8f1",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.processIcon}>{process.step}</div>
              <h4>{process.title}</h4>
              <p>{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modern CTA Section */}
      <ServiceCTA />
    </div>
  );
}
