"use client";
import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaCogs,
  FaCloud,
  FaTools,
  FaAward,
  FaChartLine,
} from "react-icons/fa";
import ServiceCTA from "components/common/ServiceCTA";
import { Images } from "assets";
import Image from "next/image";

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

const coreServices = [
  {
    icon: <FaServer size={24} color="#ffffff" />,
    title: "On-Premises Management",
    desc: "Expert management and support for your in-house data center or server environments, ensuring optimal performance and reliability.",
  },
  {
    icon: <FaCloud size={24} color="#ffffff" />,
    title: "Cloud Integration",
    desc: "Comprehensive deployment, migration, and ongoing management on GCP, AWS, and Microsoft Azure platforms.",
  },
  {
    icon: <FaTools size={24} color="#ffffff" />,
    title: "Disaster Recovery",
    desc: "Cloud-based backup and disaster recovery solutions that protect your data and ensure business continuity.",
  },
  {
    icon: <FaNetworkWired size={24} color="#ffffff" />,
    title: "Hybrid Solutions",
    desc: "Design and implementation of hybrid architectures combining on-premises resources with cloud platforms for flexibility, scalability, and security.",
  },
  {
    icon: <FaShieldAlt size={24} color="#ffffff" />,
    title: "Security & Compliance",
    desc: "Multi-layered security and regulatory compliance for peace of mind.",
  },
  {
    icon: <FaCogs size={24} color="#ffffff" />,
    title: "Managed Services",
    desc: "Proactive monitoring, maintenance, and expert support 24/7.",
  },
];

const facilityHighlights = [
  {
    icon: <FaServer size={28} color="#ffffff" />,
    label: "On-Premises Management",
    stat: "Expert Infrastructure Support",
    desc: "Expert management and support for your in-house data center or server environments, ensuring optimal performance and reliability.",
  },
  {
    icon: <FaCloud size={28} color="#ffffff" />,
    label: "Cloud Integration",
    stat: "Multi-Platform Support",
    desc: "Comprehensive deployment, migration, and ongoing management on GCP, AWS, and Microsoft Azure platforms.",
  },
  {
    icon: <FaNetworkWired size={28} color="#ffffff" />,
    label: "Hybrid Solutions",
    stat: "Flexible Architecture",
    desc: "Design and implementation of hybrid architectures combining on-premises resources with cloud platforms for flexibility, scalability, and security.",
  },
  {
    icon: <FaShieldAlt size={28} color="#ffffff" />,
    label: "Disaster Recovery",
    stat: "Business Continuity",
    desc: "Cloud-based backup and disaster recovery solutions that protect your data and ensure business continuity.",
  },
];

const techStack = [
  "HPE",
  "Dell EMC",
  "Cisco",
  "Lenovo",
  "VMware",
  "Fortinet",
  "APC",
  "Microsoft Azure",
];

const processSteps = [
  {
    step: 1,
    title: "Assessment",
    desc: "We analyze your needs and current infrastructure.",
  },
  {
    step: 2,
    title: "Design",
    desc: "We architect a scalable, secure solution tailored to your business.",
  },
  {
    step: 3,
    title: "Deployment",
    desc: "We implement with minimal disruption and maximum efficiency.",
  },
  {
    step: 4,
    title: "Testing",
    desc: "We validate performance, security, and compliance.",
  },
  {
    step: 5,
    title: "Ongoing Support",
    desc: "We monitor, maintain, and optimize your environment.",
  },
];

const benefits = [
  {
    icon: <FaChartLine size={28} color="#41c8f1" />,
    title: "Scalable Solutions",
    desc: "Flexible infrastructure that grows with your business needs, from on-premises to multi-cloud environments.",
  },
  {
    icon: <FaShieldAlt size={28} color="#2ec4b6" />,
    title: "Multi-Cloud Expertise",
    desc: "Certified professionals managing your infrastructure across GCP, AWS, and Microsoft Azure platforms.",
  },
  {
    icon: <FaCogs size={28} color="#ffd166" />,
    title: "24/7 Support",
    desc: "Expert engineers available around the clock for infrastructure monitoring and issue resolution.",
  },
  {
    icon: <FaAward size={28} color="#b26cff" />,
    title: "Business Continuity",
    desc: "Cloud-based disaster recovery and backup solutions ensuring your business never stops.",
  },
];

const certifications = [
  "Cisco Certified Engineers",
  "ISO 27001 Standards",
  "CompTIA Server+",
  "VMware Expertise",
  "Microsoft Technology",
  "Firewalls Expertise",
];

export default function DataCenterPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Banner */}
      <ServiceBanner
        title="Data Center Services"
        subtitle="We specialize in managing your existing on-premises infrastructure and provide seamless integration and management on leading cloud platforms. Our services ensure scalable, secure, and resilient infrastructure tailored to your business needs."
        badge="Enterprise-Grade"
        buttonText="Get a Consultation"
        image={Images.DataCenterBg}
        isVideo={true}
        videoUrl="/data-center.mp4"
      />

      {/* Intro Section */}
      <motion.section
        className={styles.sideBySideSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <div className="flex">
            <motion.div
              className={styles.sideTextWrapper}
              variants={fadeInUp}
              data-aos="fade-left"
            >
              <SectionHeading
                subtitle="Why Choose Our Infrastructure Services?"
                title="Modern Infrastructure Management for Modern Business"
                align="left"
              />
              <p className={styles.sideText}>
                We specialize in managing your existing on-premises
                infrastructure and provide seamless integration and management
                on leading cloud platforms. Our services ensure scalable,
                secure, and resilient infrastructure tailored to your business
                needs.
              </p>
              <ul className={styles.featureList}>
                <li>On-Premises Infrastructure Management</li>
                <li>Multi-Cloud Integration (GCP, AWS, Azure)</li>
                <li>Hybrid Cloud Solutions</li>
                <li>Disaster Recovery & Backup</li>
              </ul>
            </motion.div>
            <motion.div
              className={styles.sideImageWrapper}
              variants={fadeInUp}
              data-aos="fade-right"
            >
              <Image
                src={Images.DataCenterRevised}
                alt="IT Support Team"
                width={600}
                height={400}
                className={styles.sideImage}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Services (Vertical Stepper) */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Our Services"
            title="Core Data Center Solutions"
            align="center"
          />
          <div className={styles.verticalStepper}>
            {coreServices.map((service, i) => (
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
                {i !== coreServices.length - 1 && (
                  <div className={styles.stepperLine} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Facility Highlights (Flow Grid) */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Infrastructure Management"
            title="Data Center Services"
            align="center"
          />
          <div className={styles.flowGrid}>
            {facilityHighlights.map((area, i) => (
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
                <div className={styles.flowIcon}>{area.icon}</div>
                <h4>{area.label}</h4>
                <div className={styles.cardStat}>{area.stat}</div>
                <p>{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack (Tech Grid) */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Our Technology"
            title="Technology Stack"
            align="center"
          />
          <div className={styles.techGrid}>
            {techStack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Implementation Process (Process Grid) */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Our Approach"
            title="Implementation Process"
            align="center"
          />
          <div
            className={
              (styles.processGrid,
              "grid lg:grid-cols-5 ms:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5")
            }
          >
            {processSteps.map((process, i) => (
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
        </div>
      </motion.section>

      {/* Benefits (Card Grid) */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Why Choose Us"
            title="Benefits of Our Data Center"
            align="center"
          />
          <div className={styles.cardGrid}>
            {benefits.map((card, i) => (
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
                <div className={styles.cardIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Expertise"
            title="Certifications"
            align="center"
          />
          <div className="text-center md:mb-8 mb-6 md:text-lg text-base">
            <p className={styles.sectionDescription}>
              Our engineers hold professional certifications relevant to our
              services, including:
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {certifications.map((cert, i) => (
              <span key={i}>{cert}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modern CTA */}
      <div className={styles.customContainer}>
        <ServiceCTA />
      </div>
    </div>
  );
}
