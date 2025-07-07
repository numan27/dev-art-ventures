"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaShieldAlt,
  FaEye,
  FaLock,
  FaUserSecret,
  FaSearch,
  FaExclamationTriangle,
  FaCogs,
  FaHeadset,
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

const securityServices = [
  {
    icon: <FaShieldAlt size={24} color="#fff" />,
    title: "Threat Detection & Response",
    desc: "Advanced security monitoring and rapid incident response to protect against cyber threats in real-time.",
  },
  {
    icon: <FaEye size={24} color="#fff" />,
    title: "Vulnerability Assessment",
    desc: "Comprehensive security audits and penetration testing to identify and remediate vulnerabilities.",
  },
  {
    icon: <FaLock size={24} color="#fff" />,
    title: "Data Protection",
    desc: "End-to-end encryption, access controls, and data loss prevention to safeguard sensitive information.",
  },
  {
    icon: <FaUserSecret size={24} color="#fff" />,
    title: "Compliance & Governance",
    desc: "Ensure regulatory compliance with GDPR, HIPAA, SOC 2, and other industry standards.",
  },
];

const securitySolutions = [
  {
    icon: <FaSearch size={24} color="#fff" />,
    title: "Security Monitoring",
    desc: "24/7 SIEM monitoring with AI-powered threat detection and automated response capabilities.",
  },
  {
    icon: <FaExclamationTriangle size={24} color="#fff" />,
    title: "Incident Response",
    desc: "Rapid response team and playbooks to minimize damage and restore operations quickly.",
  },
  {
    icon: <FaCogs size={24} color="#fff" />,
    title: "Security Automation",
    desc: "Automated security workflows and orchestration to reduce response times and human error.",
  },
  {
    icon: <FaHeadset size={24} color="#fff" />,
    title: "Security Training",
    desc: "Employee cybersecurity awareness training and phishing simulation programs.",
  },
];

const securityMetrics = [
  { label: "Threat Detection", value: "99.9%" },
  { label: "Response Time", value: "<15min" },
  { label: "False Positives", value: "<1%" },
  { label: "Compliance Rate", value: "100%" },
];

const securityTechnologies = [
  "SIEM Solutions",
  "Next-Gen Firewalls",
  "EDR/XDR Platforms",
  "VPN & Zero Trust",
  "Encryption Tools",
  "IAM Systems",
  "Vulnerability Scanners",
  "Threat Intelligence",
];

const threatLandscape = [
  {
    threat: "Ransomware Attacks",
    frequency: "High",
    impact: "Critical",
    protection: "Multi-layered defense with backup strategies",
  },
  {
    threat: "Phishing Campaigns",
    frequency: "Very High",
    impact: "High",
    protection: "Advanced email filtering and user training",
  },
  {
    threat: "Insider Threats",
    frequency: "Medium",
    impact: "High",
    protection: "User behavior analytics and access controls",
  },
  {
    threat: "Supply Chain Attacks",
    frequency: "Medium",
    impact: "Critical",
    protection: "Vendor risk assessment and monitoring",
  },
];

export default function CyberSecurityPage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Cybersecurity Services"
        subtitle="Advanced Protection for Your Digital Infrastructure"
        badge="Security First"
        buttonText="Security Assessment"
        image={Images.CyberSecurityBg}
        isVideo={true}
        videoUrl="/cyber-security.mp4"
      />

      {/* Security Services Overview */}
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
          title="Comprehensive Cybersecurity Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {securityServices.map((service, i) => (
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
              {i !== securityServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Security Solutions */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Advanced Solutions"
          title="Proactive Security Measures"
          align="center"
        />
        <div className={styles.flowGrid}>
          {securitySolutions.map((solution, i) => (
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

      {/* Threat Landscape Dashboard */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Threat Intelligence"
          title="Current Threat Landscape"
          align="center"
        />
        <div className={classNames(styles.customContainer, "")}>
          <div className={styles.threatGrid}>
            {threatLandscape.map((threat, i) => (
              <motion.div
                className={styles.threatCard}
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
                <div className={styles.threatHeader}>
                  <h4>{threat.threat}</h4>
                  <div className={styles.threatBadges}>
                    <span
                      className={`${styles.badge} ${
                        styles[threat.frequency.toLowerCase()]
                      }`}
                    >
                      {threat.frequency}
                    </span>
                    <span
                      className={`${styles.badge} ${
                        styles[threat.impact.toLowerCase()]
                      }`}
                    >
                      {threat.impact}
                    </span>
                  </div>
                </div>
                <p>{threat.protection}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Security Performance Metrics */}
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
          title="Security Effectiveness"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {securityMetrics.map((metric, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{metric.value}</span>
              <span className={styles.dashboardLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Security Technologies */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Technology Stack"
          title="Enterprise Security Tools"
          align="center"
        />
        <div className={classNames(styles.customContainer)}>
          <div className={styles.techGrid}>
            {securityTechnologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Security Implementation Process */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Approach"
          title="Security Implementation Process"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Security Assessment",
              desc: "Comprehensive evaluation of current security posture, identifying gaps and vulnerabilities.",
            },
            {
              step: 2,
              title: "Strategy Development",
              desc: "Custom security roadmap aligned with business objectives and risk tolerance levels.",
            },
            {
              step: 3,
              title: "Implementation",
              desc: "Phased deployment of security solutions with minimal disruption to operations.",
            },
            {
              step: 4,
              title: "Ongoing Management",
              desc: "Continuous monitoring, updates, and optimization to maintain security effectiveness.",
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
