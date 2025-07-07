"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import { FaEye, FaCogs, FaChartBar, FaLightbulb } from "react-icons/fa";
import ManagedITImage from "../../../_assets/images/managed-it-bg.jpg";
import { Images } from "assets";

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

const features = [
  {
    icon: <FaEye size={24} color="#fff" />,
    title: "Proactive Monitoring",
    desc: "We detect and resolve issues before they impact your business, ensuring maximum uptime and reliability.",
  },
  {
    icon: <FaCogs size={24} color="#fff" />,
    title: "Patch & Asset Management",
    desc: "Keep your systems secure and up-to-date with automated patching and complete asset visibility.",
  },
  {
    icon: <FaChartBar size={24} color="#fff" />,
    title: "Reporting & Insights",
    desc: "Get actionable reports on your IT health, performance, and security posture, tailored to your business needs.",
  },
  {
    icon: <FaLightbulb size={24} color="#fff" />,
    title: "Strategic IT Planning",
    desc: "Align your technology with your business goals through expert guidance and long-term IT roadmaps.",
  },
];

const technologies = [
  "Microsoft 365",
  "Azure",
  "AWS",
  "Google Cloud",
  "VMware",
  "Hyper-V",
  "Fortinet",
  "Cisco Meraki",
  "Palo Alto Networks",
  "Ubiquiti",
  "Sophos",
  "SentinelOne",
  "CrowdStrike",
  "Bitdefender",
  "Acronis",
  "Veeam",
  "Datto",
  "Dell EMC",
  "HPE",
  "Lenovo",
  "Atlassian",
  "ServiceNow",
  "ConnectWise",
  "NinjaOne",
  "Atera",
  "SolarWinds",
  "ManageEngine",
  "JAMF",
  "Okta",
  "Duo Security",
  "Proofpoint",
  "Barracuda Networks",
  "Dropbox Business",
  "Zoom",
  "Webex",
  "Slack",
  "Adobe Creative Cloud",
];

export default function ManagedITPage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Managed IT Services"
        subtitle="Proactive, Scalable, and Secure IT Management Tailored to Your Business"
        image={ManagedITImage}
        badge="Managed IT Highlight"
        buttonText="Get Free Consultation"
      />

      <motion.section
        className={styles.sideBySideSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <motion.div
          className={styles.sideImageWrapper}
          variants={fadeInUp}
          data-aos="fade-right"
        >
          <Image
            src={Images.ManageITRevised}
            alt="Managed IT Team"
            width={600}
            height={400}
            className={styles.sideImage}
          />
        </motion.div>
        <motion.div
          className={styles.sideTextWrapper}
          variants={fadeInUp}
          data-aos="fade-left"
        >
          <SectionHeading
            subtitle="Your Business, Powered by Expert IT"
            title="Your IT, Our Expertise"
            align="left"
          />
          <p className={styles.sideText}>
            Focus on growth while we ensure your technology runs at peak
            performance — securely, efficiently, and proactively.
          </p>
          <ul className={styles.featureList}>
            <li>24/7 Proactive Monitoring</li>
            <li>Dedicated IT Support</li>
            <li>Security & Compliance</li>
            <li>Scalable Solutions</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Redesigned Features Section - Modern vertical stepper/timeline */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="What We Offer"
          title="Comprehensive IT Management"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {features.map((feature, i) => (
            <motion.div
              className={styles.stepperItem}
              key={i}
              variants={fadeInUp}
              data-aos="fade-up"
            >
              <div className={styles.stepperIcon}>{feature.icon}</div>
              <div className={styles.stepperContent}>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
              {i !== features.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies Section - Vibrant tag grid */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Stack"
          title="Technologies We Use"
          align="center"
        />
        <div className={styles.customContainer}>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Flow/Process Section - Timeline/stepper */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Approach"
          title="How Our Managed IT Process Works"
          align="center"
        />
        <div className={styles.flowGrid}>
          {[
            {
              step: 1,
              title: "Assessment & Planning",
              desc: "We evaluate your current IT environment and design a tailored management plan.",
            },
            {
              step: 2,
              title: "Implementation",
              desc: "Our team deploys best-in-class tools and processes for seamless IT operations.",
            },
            {
              step: 3,
              title: "Monitoring & Support",
              desc: "Continuous monitoring and rapid support keep your systems running smoothly.",
            },
            {
              step: 4,
              title: "Continuous Improvement",
              desc: "We regularly review and optimize your IT to support your evolving business.",
            },
          ].map((flow, i) => (
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
              <div className={styles.flowIcon}>{flow.step}</div>
              <h4>{flow.title}</h4>
              <p>{flow.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Why Us"
          title="Why Choose Us"
          align="center"
        />
        <div className={styles.customContainer}>
          <div className={styles.cardGrid}>
            {[
              {
                title: "24/7 Support",
                desc: "Our team is always available to resolve issues and answer your questions, day or night.",
              },
              {
                title: "Reduced Downtime",
                desc: "Proactive management and rapid response minimize disruptions to your business.",
              },
              {
                title: "Cost Efficiency",
                desc: "Predictable pricing and optimized IT reduce your overall technology costs.",
              },
              {
                title: "Expert Team",
                desc: "Certified professionals with deep expertise in modern IT solutions.",
              },
            ].map((card, i) => (
              <motion.div
                className={styles.card}
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
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modern CTA Section */}
      <ServiceCTA />
    </div>
  );
}
