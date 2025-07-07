"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaHeadset,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaLaptop,
  FaNetworkWired,
  FaMobile,
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

const supportServices = [
  {
    icon: <FaHeadset size={24} color="#fff" />,
    title: "24/7 Help Desk",
    desc: "Round-the-clock technical support with rapid response times and expert troubleshooting.",
  },
  {
    icon: <FaTools size={24} color="#fff" />,
    title: "Hardware & Software Support",
    desc: "Comprehensive support for all your IT equipment, from desktops to servers and applications.",
  },
  {
    icon: <FaShieldAlt size={24} color="#fff" />,
    title: "Security Support",
    desc: "Protect your systems with security updates, antivirus management, and threat monitoring.",
  },
  {
    icon: <FaClock size={24} color="#fff" />,
    title: "Emergency Response",
    desc: "Critical issue resolution with priority escalation and immediate on-site support when needed.",
  },
];

const supportChannels = [
  {
    icon: <FaUsers size={24} color="#fff" />,
    title: "Remote Support",
    desc: "Instant access to your systems for quick problem resolution without travel time.",
  },
  {
    icon: <FaLaptop size={24} color="#fff" />,
    title: "On-Site Support",
    desc: "Hands-on technical assistance at your location for complex hardware and network issues.",
  },
  {
    icon: <FaNetworkWired size={24} color="#fff" />,
    title: "Network Support",
    desc: "Complete network infrastructure support including routers, switches, and connectivity issues.",
  },
  {
    icon: <FaMobile size={24} color="#fff" />,
    title: "Mobile Device Support",
    desc: "Support for smartphones, tablets, and mobile device management across your organization.",
  },
];

export default function ITSupportPage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="IT Support Services"
        subtitle="Reliable, 24/7 Expert IT Support to Keep Your Business Running Smoothly"
        badge="24/7 Support Available"
        buttonText="Get Support Now"
        image={Images.ITSupportImage}
        isVideo={true}
        videoUrl="/it-support.mp4"
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
          className={styles.sideTextWrapper}
          variants={fadeInUp}
          data-aos="fade-left"
        >
          <SectionHeading
            subtitle="Your Technology, Our Expertise"
            title="Your Technology, Our Expertise"
            align="left"
          />
          <p className={styles.sideText}>
            Don't let IT issues disrupt your operations. Our dedicated support
            team delivers rapid, reliable assistance—from simple troubleshooting
            to complex network challenges—to minimize downtime and maximize
            productivity.
          </p>
          <ul className={styles.featureList}>
            <li>24/7 Technical Support</li>
            <li>Rapid Response Times</li>
            <li>Expert Technicians</li>
            <li>Flexible Support Plans</li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.sideImageWrapper}
          variants={fadeInUp}
          data-aos="fade-right"
        >
          <Image
            src={Images.ITSupportRevised}
            alt="IT Support Team"
            width={600}
            height={400}
            className={styles.sideImage}
          />
        </motion.div>
      </motion.section>

      {/* Support Services Section */}
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
          title="Comprehensive IT Support Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {supportServices.map((service, i) => (
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
              {i !== supportServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Support Channels Section */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Support Channels"
          title="Multiple Ways to Get Help"
          align="center"
        />
        <div className={styles.flowGrid}>
          {supportChannels.map((channel, i) => (
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
              <div className={styles.flowIcon}>{channel.icon}</div>
              <h4>{channel.title}</h4>
              <p>{channel.desc}</p>
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
          subtitle="Our Tools"
          title="Support Technologies We Use"
          align="center"
        />
        <div className={styles.techGrid}>
          <span>TeamViewer</span>
          <span>AnyDesk</span>
          <span>ServiceNow</span>
          <span>Zendesk</span>
          <span>ConnectWise</span>
          <span>Freshdesk</span>
          <span>Jira Service Desk</span>
          <span>Microsoft Team</span>
        </div>
      </motion.section>

      {/* Support Process Section */}
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
          title="How We Handle Your Support Requests"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Ticket Creation",
              desc: "Submit your issue through phone, email, or our support portal for immediate tracking.",
            },
            {
              step: 2,
              title: "Initial Assessment",
              desc: "Our technicians quickly evaluate the issue and determine the best resolution approach.",
            },
            {
              step: 3,
              title: "Resolution",
              desc: "We implement the solution, whether remote or on-site, to get you back up and running.",
            },
            {
              step: 4,
              title: "Follow-up",
              desc: "We verify the solution works and ensure you're satisfied with the resolution.",
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
          title="Benefits of Professional IT Support"
          align="center"
        />
        <div className={styles.customContainer}>
          <div className={styles.cardGrid}>
            {[
              {
                title: "Rapid Response",
                desc: "Average response time of under 15 minutes for critical issues, with 24/7 availability.",
              },
              {
                title: "Expert Knowledge",
                desc: "Certified technicians with years of experience across all major technologies and platforms.",
              },
              {
                title: "Cost Effective",
                desc: "Prevent expensive downtime and reduce IT costs with proactive support and maintenance.",
              },
              {
                title: "Scalable Solutions",
                desc: "Support plans that grow with your business, from small offices to enterprise environments.",
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
