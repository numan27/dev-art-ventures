"use client";

import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import ServiceCTA from "../../../_shared/components/common/ServiceCTA";
import SectionHeading from "../../../_shared/components/common/sectionHeading";
import {
  FaSearch,
  FaChartLine,
  FaPen,
  FaShare,
  FaBullseye,
  FaRocket,
  FaUsers,
  FaGlobe,
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

const seoServices = [
  {
    icon: <FaSearch size={24} color="#fff" />,
    title: "Search Engine Optimization",
    desc: "Comprehensive SEO strategies to improve your website's visibility and organic search rankings.",
  },
  {
    icon: <FaPen size={24} color="#fff" />,
    title: "Content Marketing",
    desc: "High-quality, SEO-optimized content that engages your audience and drives conversions.",
  },
  {
    icon: <FaShare size={24} color="#fff" />,
    title: "Social Media Marketing",
    desc: "Strategic social media campaigns to build brand awareness and engage with your audience.",
  },
  {
    icon: <FaChartLine size={24} color="#fff" />,
    title: "Analytics & Reporting",
    desc: "Data-driven insights and comprehensive reporting to track performance and optimize campaigns.",
  },
];

const marketingSolutions = [
  {
    icon: <FaBullseye size={24} color="#fff" />,
    title: "Local SEO",
    desc: "Optimize your business for local search results and attract customers in your area.",
  },
  {
    icon: <FaRocket size={24} color="#fff" />,
    title: "PPC Campaigns",
    desc: "Targeted paid advertising campaigns to drive immediate traffic and conversions.",
  },
  {
    icon: <FaUsers size={24} color="#fff" />,
    title: "Email Marketing",
    desc: "Nurture leads and build customer relationships through strategic email campaigns.",
  },
  {
    icon: <FaGlobe size={24} color="#fff" />,
    title: "Conversion Optimization",
    desc: "Improve website performance and increase conversion rates through A/B testing and optimization.",
  },
];

const seoMetrics = [
  { label: "Organic Traffic", value: "300%" },
  { label: "Keyword Rankings", value: "85%" },
  { label: "Conversion Rate", value: "45%" },
  { label: "ROI Improvement", value: "250%" },
];

const seoTechnologies = [
  "Google Analytics",
  "Google Search Console",
  "SEMrush",
  "Ahrefs",
  "Meta Business Suite",
  "Google Ads",
  "Mailchimp",
  "Hotjar",
];

const rankingImprovements = [
  {
    keyword: "IT Services",
    before: "Page 3",
    after: "Page 1",
    improvement: "200%",
  },
  {
    keyword: "Web Development",
    before: "Page 4",
    after: "Page 1",
    improvement: "300%",
  },
  {
    keyword: "Cybersecurity",
    before: "Page 2",
    after: "Page 1",
    improvement: "150%",
  },
  {
    keyword: "Digital Marketing",
    before: "Page 5",
    after: "Page 1",
    improvement: "400%",
  },
];

export default function SEODigitalMarketingPage() {
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="SEO & Digital Marketing"
        subtitle="Drive Growth with Data-Driven Digital Marketing Strategies"
        badge="Digital Growth"
        buttonText="Free SEO Audit"
        image={Images.SEObg}
      />

      {/* SEO Services Overview */}
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
          title="Comprehensive Digital Marketing Solutions"
          align="center"
        />
        <div className={styles.verticalStepper}>
          {seoServices.map((service, i) => (
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
              {i !== seoServices.length - 1 && (
                <div className={styles.stepperLine} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Marketing Solutions */}
      <motion.section
        className={styles.flowSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="Marketing Solutions"
          title="Targeted Digital Marketing Services"
          align="center"
        />
        <div className={styles.flowGrid}>
          {marketingSolutions.map((solution, i) => (
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

      {/* Ranking Improvements */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        data-aos="fade-up"
      >
        <SectionHeading
          subtitle="SEO Results"
          title="Keyword Ranking Improvements"
          align="center"
        />
        <div className={classNames(styles.customContainer)}>
          <div className={styles.rankingGrid}>
            {rankingImprovements.map((ranking, i) => (
              <motion.div
                className={styles.rankingCard}
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
                <div className={styles.rankingKeyword}>{ranking.keyword}</div>
                <div className={styles.rankingComparison}>
                  <div className={styles.rankingBefore}>
                    <span>Before</span>
                    <strong>{ranking.before}</strong>
                  </div>
                  <div className={styles.rankingArrow}>→</div>
                  <div className={styles.rankingAfter}>
                    <span>After</span>
                    <strong>{ranking.after}</strong>
                  </div>
                </div>
                <div className={styles.rankingImprovement}>
                  <span>{ranking.improvement} Improvement</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SEO Performance Metrics */}
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
          title="Proven Marketing Results"
          align="center"
        />
        <div className={styles.dashboardPreview}>
          {seoMetrics.map((metric, i) => (
            <div className={styles.dashboardStat} key={i}>
              <span className={styles.dashboardValue}>{metric.value}</span>
              <span className={styles.dashboardLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SEO Technologies */}
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
          title="Marketing Technology Stack"
          align="center"
        />
        <div className={styles.techGrid}>
          {seoTechnologies.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </motion.section>

      {/* SEO Process */}
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
          title="SEO & Marketing Methodology"
          align="center"
        />
        <div className={styles.processGrid}>
          {[
            {
              step: 1,
              title: "Audit & Research",
              desc: "Comprehensive website audit, competitor analysis, and keyword research to identify opportunities.",
            },
            {
              step: 2,
              title: "Strategy Development",
              desc: "Create customized marketing strategies based on data insights and business objectives.",
            },
            {
              step: 3,
              title: "Implementation",
              desc: "Execute SEO optimizations, content creation, and marketing campaigns across all channels.",
            },
            {
              step: 4,
              title: "Optimization",
              desc: "Continuous monitoring, performance analysis, and strategy refinement for maximum results.",
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
