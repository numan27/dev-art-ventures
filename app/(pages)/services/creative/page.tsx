"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaPalette,
  FaMobile,
  FaDesktop,
  FaEye,
  FaPencilRuler,
  FaLayerGroup,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";
import { Images } from "assets";
import classNames from "classnames";

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

const designServices = [
  {
    icon: <FaPalette size={24} color="#fff" />,
    title: "UI/UX Design",
    desc: "Intuitive and engaging user interfaces that enhance user experience and drive conversions.",
  },
  {
    icon: <FaMobile size={24} color="#fff" />,
    title: "Mobile App Design",
    desc: "Native and cross-platform mobile app designs optimized for performance and user engagement.",
  },
  {
    icon: <FaDesktop size={24} color="#fff" />,
    title: "Web Design",
    desc: "Modern, responsive web designs that create memorable brand experiences across all devices.",
  },
  {
    icon: <FaEye size={24} color="#fff" />,
    title: "Brand Identity",
    desc: "Comprehensive branding solutions including logos, color schemes, and visual guidelines.",
  },
];

const creativeProcess = [
  {
    icon: <FaLightbulb size={24} color="#fff" />,
    title: "Discovery & Research",
    desc: "Deep dive into your brand, audience, and competitors to understand design requirements.",
  },
  {
    icon: <FaPencilRuler size={24} color="#fff" />,
    title: "Wireframing & Prototyping",
    desc: "Create interactive prototypes and wireframes to visualize user flows and interactions.",
  },
  {
    icon: <FaPaintBrush size={24} color="#fff" />,
    title: "Visual Design",
    desc: "Transform concepts into stunning visual designs with attention to detail and brand consistency.",
  },
  {
    icon: <FaCode size={24} color="#fff" />,
    title: "Development Handoff",
    desc: "Seamless transition from design to development with comprehensive design systems and assets.",
  },
];

const designMetrics = [
  { label: "User Engagement", value: "78%" },
  { label: "Conversion Rate", value: "45%" },
  { label: "Design Satisfaction", value: "98%" },
  { label: "Project Completion", value: "100%" },
];

const designTools = [
  "Figma",
  "Adobe Creative Suite",
  "Sketch",
  "InVision",
  "Principle",
  "Protopie",
  "Zeplin",
  "Abstract",
];

const portfolioShowcase = [
  {
    category: "Web Design",
    title: "E-commerce Platform",
    description: "Modern, conversion-optimized design for online retail",
  },
  {
    category: "Mobile App",
    title: "Fitness Tracking App",
    description: "Intuitive mobile experience for health and wellness",
  },
  {
    category: "Brand Identity",
    title: "Tech Startup Branding",
    description: "Complete brand identity system for innovative startup",
  },
  {
    category: "UI/UX",
    title: "SaaS Dashboard",
    description: "Complex data visualization with exceptional UX",
  },
];

export default function CreativePage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Creative Design Services"
        subtitle="Transform Your Vision into Stunning Digital Experiences"
        badge="Creative Excellence"
        buttonText="Start Design Project"
        image={Images.UIUXBg}
      />

      {/* Design Services Overview */}
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
          title="Comprehensive Design Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {designServices.map((service, i) => (
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
              {i !== designServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Creative Process */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Process"
          title="Design Thinking Methodology"
          align="center"
        />
        <div className={styles.flowGrid}>
          {creativeProcess.map((process, i) => (
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
              <div className={styles.flowIcon}>{process.icon}</div>
              <h4>{process.title}</h4>
              <p>{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Showcase */}
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
          title="Portfolio Showcase"
          align="center"
        />
        <div className={classNames(styles.customContainer)}>
          <div className={styles.portfolioGrid}>
            {portfolioShowcase.map((project, i) => (
              <motion.div
                className={styles.portfolioCard}
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
                <div className={styles.portfolioImage}>
                  <div className={styles.portfolioPlaceholder} />
                </div>
                <div className={styles.portfolioContent}>
                  <span className={styles.portfolioCategory}>
                    {project.category}
                  </span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design Impact Metrics */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Design Impact"
          title="Measurable Results"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {designMetrics.map((metric, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{metric.value}</span>
              <span className={styles.dashboardLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Design Tools */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Toolkit"
          title="Design Tools & Technologies"
          align="center"
        />
        <div className={styles.techGrid}>
          {designTools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </div>
      </motion.section>

      {/* Design Expertise */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Why Choose Us"
          title="Design Excellence"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "User-Centered Design",
              desc: "Every design decision is based on user research, testing, and feedback to ensure optimal user experience.",
            },
            {
              step: 2,
              title: "Modern Aesthetics",
              desc: "Contemporary design trends and best practices to create visually stunning and engaging interfaces.",
            },
            {
              step: 3,
              title: "Brand Consistency",
              desc: "Maintain cohesive brand identity across all touchpoints and design deliverables.",
            },
            {
              step: 4,
              title: "Performance Focused",
              desc: "Designs optimized for speed, accessibility, and cross-platform compatibility.",
            },
          ].map((expertise, i) => (
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
              <div className={styles.processIcon}>{expertise.step}</div>
              <h4>{expertise.title}</h4>
              <p>{expertise.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modern CTA Section */}
      <ServiceCTA />
    </div>
  );
}
