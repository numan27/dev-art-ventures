"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaChartLine,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaSync,
  FaHandshake,
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

export default function ITBusinessConsulting() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="IT Business Consulting"
        subtitle="Empower Your Business with Expert IT Strategy & Consulting"
        badge="Consulting Services"
        buttonText="Request Free Consultation"
        image={Images.BusinessConsultancyBg}
        isVideo={true}
        videoUrl="/it-business.mp4"
      />

      {/* Value Proposition Section */}
      <section className={styles.valuePropSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Unlock Your Business Potential"
            title="Transform, Innovate, and Lead with Strategic IT Consulting"
            align="center"
          />
          <p className={styles.valuePropText}>
            We help organizations accelerate growth, optimize operations, and
            future-proof their business through tailored IT consulting. Our
            experts partner with you to deliver actionable strategies, seamless
            technology adoption, and measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Consulting Solutions Overview */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Our Expertise"
          title="Strategic IT Business Consulting Services"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {[
            {
              icon: <FaLightbulb size={24} color="#fff" />, // Consulting
              title: "IT Strategy & Roadmapping",
              desc: "Develop a clear IT strategy aligned with your business vision, goals, and growth plans.",
            },
            {
              icon: <FaChartLine size={24} color="#fff" />, // Optimization
              title: "Business Process Optimization",
              desc: "Analyze and streamline workflows to maximize efficiency and reduce operational costs.",
            },
            {
              icon: <FaUsers size={24} color="#fff" />, // Change Management
              title: "Change Management & Training",
              desc: "Support your team through digital transformation with expert change management and training.",
            },
            {
              icon: <FaCogs size={24} color="#fff" />, // Implementation
              title: "Technology Implementation",
              desc: "Select and implement the right technology solutions for your unique business needs.",
            },
          ].map((solution, i) => (
            <motion.div
              className={styles.stepperItem}
              key={i}
              variants={fadeInUp}
              data-aos="fade-up"
            >
              <div className={styles.stepperIcon}>{solution.icon}</div>
              <div className={styles.stepperContent}>
                <h4>{solution.title}</h4>
                <p>{solution.desc}</p>
              </div>
              {i !== 3 && <div className={styles.stepperLine} />}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Why Choose Us"
            title="What Sets Us Apart"
            align="center"
          />
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🎯</div>
              <h4>Business-First Approach</h4>
              <p>
                We align every IT initiative with your business goals for
                maximum impact and ROI.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🤝</div>
              <h4>End-to-End Partnership</h4>
              <p>
                From strategy to execution, we're with you at every step,
                ensuring seamless transformation.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>💡</div>
              <h4>Innovation & Agility</h4>
              <p>
                We leverage the latest technologies and methodologies to keep
                your business ahead of the curve.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🔒</div>
              <h4>Security & Compliance</h4>
              <p>
                Robust security and compliance are built into every solution we
                deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation & Automation */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Digital Transformation"
          title="Modernize & Automate Your Business"
          align="center"
        />
        <div className={styles.flowGrid}>
          {[
            {
              icon: <FaRocket size={24} color="#fff" />, // Automation
              title: "Process Automation",
              desc: "Leverage automation to eliminate manual tasks and accelerate business outcomes.",
            },
            {
              icon: <FaSync size={24} color="#fff" />, // Integration
              title: "Systems Integration",
              desc: "Connect your business systems for seamless data flow and unified operations.",
            },
            {
              icon: <FaShieldAlt size={24} color="#fff" />, // Security
              title: "IT Risk & Security Consulting",
              desc: "Identify and mitigate IT risks with robust security strategies and compliance guidance.",
            },
            {
              icon: <FaHandshake size={24} color="#fff" />, // Partnership
              title: "Vendor & Technology Partnerships",
              desc: "Maximize value from your technology investments and vendor relationships.",
            },
          ].map((tool, i) => (
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
              <div className={styles.flowIcon}>{tool.icon}</div>
              <h4>{tool.title}</h4>
              <p>{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Success Metrics Dashboard */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Consulting Impact"
          title="Results That Drive Business Value"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {[
            { label: "Client Satisfaction", value: "98%" },
            { label: "Process Improvement", value: "+70%" },
            { label: "Cost Savings", value: "Up to 40%" },
            { label: "Faster Delivery", value: "2x Quicker" },
          ].map((metric, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{metric.value}</span>
              <span className={styles.dashboardLabel}>{metric.label}</span>
            </div>
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
          subtitle="Consulting Tools"
          title="Platforms & Technologies We Advise On"
          align="center"
        />
        <div className={styles.techGrid}>
          {[
            "Microsoft Power Platform",
            "Google Workspace",
            "Salesforce",
            "HubSpot",
            "Monday.com",
            "Asana",
            "Slack",
            "Zapier",
          ].map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </motion.section>

      {/* Consulting Process */}
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
          title="IT Business Consulting Process"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Discovery & Assessment",
              desc: "We assess your current IT landscape, business goals, and challenges.",
            },
            {
              step: 2,
              title: "Strategy Development",
              desc: "We craft a tailored IT strategy and roadmap for your business.",
            },
            {
              step: 3,
              title: "Implementation & Change",
              desc: "We guide you through technology adoption, change management, and training.",
            },
            {
              step: 4,
              title: "Continuous Improvement",
              desc: "We monitor, optimize, and support your IT environment for ongoing success.",
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
      <ServiceCTA
        title="Ready to Transform Your Business?"
        subtitle="Contact our IT business consulting experts for a free assessment and see how we can help you achieve your goals."
        buttonText="Request Consultation"
      />
    </div>
  );
}
