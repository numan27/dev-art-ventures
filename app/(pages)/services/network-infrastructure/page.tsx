"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaNetworkWired,
  FaWifi,
  FaServer,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaCloud,
  FaLock,
} from "react-icons/fa";
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

const infrastructureServices = [
  {
    icon: <FaNetworkWired size={24} color="#fff" />,
    title: "Network Design & Architecture",
    desc: "Custom network solutions designed for your business needs, ensuring scalability, security, and optimal performance.",
  },
  {
    icon: <FaWifi size={24} color="#fff" />,
    title: "Wireless Infrastructure",
    desc: "Enterprise-grade Wi-Fi solutions with seamless roaming, advanced security, and comprehensive coverage planning.",
  },
  {
    icon: <FaServer size={24} color="#fff" />,
    title: "Data Center Solutions",
    desc: "Robust data center infrastructure with high availability, disaster recovery, and enterprise-grade equipment.",
  },
  {
    icon: <FaShieldAlt size={24} color="#fff" />,
    title: "Network Security",
    desc: "Multi-layered security infrastructure including firewalls, VPNs, intrusion detection, and threat prevention.",
  },
];

const infrastructureComponents = [
  {
    icon: <FaCogs size={24} color="#fff" />,
    title: "Core Networking",
    desc: "High-performance switches, routers, and network appliances for reliable data transmission and routing.",
  },
  {
    icon: <FaChartLine size={24} color="#fff" />,
    title: "Network Monitoring",
    desc: "Advanced monitoring tools for real-time network performance, traffic analysis, and proactive issue detection.",
  },
  {
    icon: <FaCloud size={24} color="#fff" />,
    title: "Cloud Integration",
    desc: "Seamless integration with cloud services, hybrid cloud solutions, and cloud-native infrastructure.",
  },
  {
    icon: <FaLock size={24} color="#fff" />,
    title: "Security Infrastructure",
    desc: "Comprehensive security stack including firewalls, access control, encryption, and compliance solutions.",
  },
];

const certifications = [
  {
    logo: "/certs/cisco.svg",
    name: "Cisco Partner",
    desc: "Certified Cisco Networking Partner",
  },
  {
    logo: "/certs/juniper.svg",
    name: "Juniper Networks",
    desc: "Juniper Certified Professional",
  },
  {
    logo: "/certs/fortinet.svg",
    name: "Fortinet NSE",
    desc: "Fortinet Security Expert",
  },
  {
    logo: "/certs/aruba.svg",
    name: "Aruba Networks",
    desc: "Aruba Certified Mobility Associate",
  },
  {
    logo: "/certs/vmware.svg",
    name: "VMware",
    desc: "VMware Professional Partner",
  },
];

const caseStudy = {
  client: "Acme Manufacturing",
  testimonial:
    "The new network infrastructure delivered by Core IT Ventures has transformed our operations. We now have seamless connectivity across all sites and zero downtime.",
  metrics: [
    { label: "Uptime", value: "99.99%" },
    { label: "Sites Connected", value: "12" },
    { label: "Deployment Time", value: "50% Faster" },
  ],
  image: "/case-studies/acme-network.jpg",
};

const dashboardStats = [
  { label: "Network Uptime", value: "99.99%" },
  { label: "Avg. Latency", value: "8ms" },
  { label: "Active Alerts", value: "0" },
  { label: "Devices Online", value: "342" },
];

export default function NetworkInfrastructurePage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Network & Infrastructure Services"
        subtitle="Building the Foundation for Digital Success"
        badge="Enterprise Infrastructure"
        buttonText="Get Infrastructure Assessment"
        image={Images.NetworkImage}
        isVideo={true}
        videoUrl="/network.mp4"
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
            src={Images.NetworkRevised}
            alt="Network Infrastructure"
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
            subtitle="Why Network Infrastructure?"
            title="Your Digital Foundation"
            align="left"
          />
          <p className={styles.sideText}>
            A robust network infrastructure is the backbone of modern business
            operations. Our team designs, implements, and maintains scalable,
            secure, and reliable networks tailored to your needs — from small
            offices to complex multi-site environments.
          </p>
          <ul className={styles.featureList}>
            <li>Enterprise-Grade Equipment</li>
            <li>Scalable Architecture</li>
            <li>24/7 Network Monitoring</li>
            <li>Security-First Approach</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Infrastructure Services Section */}
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
          title="Comprehensive Infrastructure Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {infrastructureServices.map((service, i) => (
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
              {i !== infrastructureServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Infrastructure Components Section */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Infrastructure Components"
          title="Building Blocks of Your Network"
          align="center"
        />
        <div className={styles.flowGrid}>
          {infrastructureComponents.map((component, i) => (
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
              <div className={styles.flowIcon}>{component.icon}</div>
              <h4>{component.title}</h4>
              <p>{component.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies Section */}
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
          title="Enterprise-Grade Technologies"
          align="center"
        />
        <div className={styles.techGrid}>
          <span>Cisco Systems</span>
          <span>Juniper Networks</span>
          <span>Aruba Networks</span>
          <span>VMware</span>
          <span>Fortinet</span>
          <span>Palo Alto Networks</span>
          <span>Dell Technologies</span>
          <span>HPE Aruba</span>
        </div>
      </motion.section>

      {/* Implementation Process Section */}
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
          title="Infrastructure Implementation Process"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Discovery & Assessment",
              desc: "Comprehensive analysis of your current infrastructure, business requirements, and growth objectives.",
            },
            {
              step: 2,
              title: "Design & Planning",
              desc: "Detailed network architecture design with scalability, security, and performance optimization.",
            },
            {
              step: 3,
              title: "Implementation",
              desc: "Professional installation and configuration of all network components with minimal disruption.",
            },
            {
              step: 4,
              title: "Testing & Optimization",
              desc: "Thorough testing, performance tuning, and documentation for ongoing management and support.",
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

      {/* Benefits Section */}
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
          title="Benefits of Professional Infrastructure"
          align="center"
        />
        <div className={styles.customContainer}>
          <div className={styles.cardGrid}>
            {[
              {
                title: "Reliable Performance",
                desc: "Enterprise-grade infrastructure ensures consistent, high-performance network connectivity for your business operations.",
              },
              {
                title: "Scalable Growth",
                desc: "Future-proof architecture that grows with your business, supporting increased users, applications, and data.",
              },
              {
                title: "Enhanced Security",
                desc: "Multi-layered security infrastructure protecting your data, applications, and network from evolving threats.",
              },
              {
                title: "Expert Support",
                desc: "Dedicated network engineers with deep expertise in enterprise infrastructure and 24/7 monitoring support.",
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

      {/* Interactive Network Map Section */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="How It All Connects"
          title="Interactive Network Map"
          align="center"
        />
        <div className={styles.networkMapWrapper}>
          {/* Simple SVG network map with tooltips */}
          <svg
            className={styles.networkMap}
            viewBox="0 0 600 300"
            width="100%"
            height="220"
          >
            <circle cx="100" cy="150" r="32" className={styles.mapNode} />
            <text
              x="100"
              y="150"
              textAnchor="middle"
              dy="6"
              className={styles.mapNodeLabel}
            >
              Firewall
            </text>
            <circle cx="250" cy="80" r="28" className={styles.mapNode} />
            <text
              x="250"
              y="80"
              textAnchor="middle"
              dy="6"
              className={styles.mapNodeLabel}
            >
              Switch
            </text>
            <circle cx="250" cy="220" r="28" className={styles.mapNode} />
            <text
              x="250"
              y="220"
              textAnchor="middle"
              dy="6"
              className={styles.mapNodeLabel}
            >
              Wi-Fi
            </text>
            <circle cx="400" cy="80" r="28" className={styles.mapNode} />
            <text
              x="400"
              y="80"
              textAnchor="middle"
              dy="6"
              className={styles.mapNodeLabel}
            >
              Cloud
            </text>
            <circle cx="400" cy="220" r="28" className={styles.mapNode} />
            <text
              x="400"
              y="220"
              textAnchor="middle"
              dy="6"
              className={styles.mapNodeLabel}
            >
              Endpoints
            </text>
            {/* Connections */}
            <line
              x1="132"
              y1="150"
              x2="222"
              y2="80"
              className={styles.mapLine}
            />
            <line
              x1="132"
              y1="150"
              x2="222"
              y2="220"
              className={styles.mapLine}
            />
            <line
              x1="278"
              y1="80"
              x2="372"
              y2="80"
              className={styles.mapLine}
            />
            <line
              x1="278"
              y1="220"
              x2="372"
              y2="220"
              className={styles.mapLine}
            />
            <line
              x1="250"
              y1="80"
              x2="250"
              y2="220"
              className={styles.mapLine}
            />
            <line
              x1="400"
              y1="80"
              x2="400"
              y2="220"
              className={styles.mapLine}
            />
          </svg>
          <div className={styles.mapLegend}>
            <span>
              <FaShieldAlt /> Firewall
            </span>
            <span>
              <FaCogs /> Switch
            </span>
            <span>
              <FaWifi /> Wi-Fi
            </span>
            <span>
              <FaCloud /> Cloud
            </span>
            <span>
              <FaNetworkWired /> Endpoints
            </span>
          </div>
        </div>
      </motion.section>

      {/* Network Health Dashboard Preview */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Real-Time Visibility"
          title="Network Health Dashboard Preview"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {dashboardStats.map((stat, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{stat.value}</span>
              <span className={styles.dashboardLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Expertise & Certifications */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Credentials"
          title="Expertise & Certifications"
          align="center"
        />
        <div className={styles.customContainer}>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <div className={styles.certCard} key={i}>
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className={styles.certLogo}
                />
                <div className={styles.certName}>{cert.name}</div>
                <div className={styles.certDesc}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modern CTA Section */}
      <ServiceCTA />
    </div>
  );
}
