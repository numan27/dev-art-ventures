"use client";
import styles from "./style.module.scss";
import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import SectionHeading from "components/common/sectionHeading";
import { motion } from "framer-motion";
import {
  FolderOpen,
  Link2,
  Palette,
  Code2,
  Monitor,
  Globe,
  Server,
  Headphones,
  Briefcase,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { label: "All", value: "all" },
  { label: "Web & UI/UX", value: "web" },
  { label: "IT & Cloud", value: "it" },
  { label: "Digital Marketing", value: "marketing" },
  { label: "Business Solutions", value: "business" },
];

const projects = [
  // Web & UI/UX
  {
    title: "E-Commerce Platform",
    description:
      "A scalable, modern e-commerce solution with seamless checkout and admin dashboard.",
    image: "/images/portfolio1.jpg",
    tags: ["React", "Node.js", "Stripe"],
    icon: <Monitor size={32} color="#41c8f1" strokeWidth={2.2} />,
    link: "#",
    category: "web",
  },
  {
    title: "Brand Website Redesign",
    description:
      "Vibrant, responsive website for a global brand, focused on UX and performance.",
    image: "/images/portfolio2.jpg",
    tags: ["Next.js", "UI/UX", "Branding"],
    icon: <Palette size={32} color="#b26cff" strokeWidth={2.2} />,
    link: "#",
    category: "web",
  },
  {
    title: "Global News Portal",
    description:
      "A fast, SEO-optimized news portal with multi-language support and CMS integration.",
    image: "/images/portfolio4.jpg",
    tags: ["Next.js", "SEO", "CMS"],
    icon: <Globe size={32} color="#2ec4b6" strokeWidth={2.2} />,
    link: "#",
    category: "web",
  },
  {
    title: "Portfolio Showcase",
    description: "Personal portfolio site for a creative professional.",
    image: "/images/portfolio7.jpg",
    tags: ["React", "Portfolio", "Animation"],
    icon: <Monitor size={32} color="#41c8f1" strokeWidth={2.2} />,
    link: "#",
    category: "web",
  },
  // IT & Cloud
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS, featuring real-time data and custom reports.",
    image: "/images/portfolio3.jpg",
    tags: ["TypeScript", "D3.js", "Cloud"],
    icon: <Code2 size={32} color="#ffd166" strokeWidth={2.2} />,
    link: "#",
    category: "it",
  },
  {
    title: "Cloud Migration Suite",
    description: "End-to-end cloud migration for a large enterprise.",
    image: "/images/portfolio8.jpg",
    tags: ["AWS", "Cloud", "DevOps"],
    icon: <Server size={32} color="#41c8f1" strokeWidth={2.2} />,
    link: "#",
    category: "it",
  },
  {
    title: "IT Support Portal",
    description: "Internal IT support and ticketing system for a corporation.",
    image: "/images/portfolio9.jpg",
    tags: ["Support", "Automation", "Node.js"],
    icon: <Headphones size={32} color="#b26cff" strokeWidth={2.2} />,
    link: "#",
    category: "it",
  },
  // Digital Marketing
  {
    title: "Marketing Campaign",
    description: "Creative digital marketing campaign for a retail brand.",
    image: "/images/portfolio5.jpg",
    tags: ["SEO", "Content", "Campaign"],
    icon: <Palette size={32} color="#b26cff" strokeWidth={2.2} />,
    link: "#",
    category: "marketing",
  },
  {
    title: "SEO Optimization",
    description: "SEO and content strategy for a SaaS startup.",
    image: "/images/portfolio10.jpg",
    tags: ["SEO", "Content", "Growth"],
    icon: <Globe size={32} color="#2ec4b6" strokeWidth={2.2} />,
    link: "#",
    category: "marketing",
  },
  {
    title: "Social Media Suite",
    description: "Social media management and analytics dashboard.",
    image: "/images/portfolio11.jpg",
    tags: ["Social", "Analytics", "Branding"],
    icon: <Palette size={32} color="#b26cff" strokeWidth={2.2} />,
    link: "#",
    category: "marketing",
  },
  // Business Solutions
  {
    title: "Business Automation Suite",
    description: "Custom IT solution for business process automation.",
    image: "/images/portfolio6.jpg",
    tags: ["Automation", "Business IT", "Cloud"],
    icon: <Code2 size={32} color="#ffd166" strokeWidth={2.2} />,
    link: "#",
    category: "business",
  },
  {
    title: "ERP Integration",
    description: "ERP integration for a manufacturing company.",
    image: "/images/portfolio12.jpg",
    tags: ["ERP", "Integration", "Business"],
    icon: <Briefcase size={32} color="#41c8f1" strokeWidth={2.2} />,
    link: "#",
    category: "business",
  },
  {
    title: "HR Management Portal",
    description: "HR management and payroll portal for a mid-sized business.",
    image: "/images/portfolio13.jpg",
    tags: ["HR", "Payroll", "Business"],
    icon: <Users size={32} color="#b26cff" strokeWidth={2.2} />,
    link: "#",
    category: "business",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  return (
    <div className={styles.pageWrapper}>
      <ServiceBanner
        title="Our Portfolio"
        subtitle="Showcasing Our Best Work & Digital Solutions"
        buttonText="Contact Us"
        badge="Portfolio"
        image="/images/portfolio-banner.jpg"
      />
      <section className={styles.introSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Our Work"
            title="Featured Projects"
            align="center"
            className={styles.sectionHeading}
          />
          <motion.p
            className={styles.introText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We deliver modern, scalable, and beautiful digital products for
            clients worldwide. Explore some of our favorite projects below.
          </motion.p>
          <div className={styles.tabsNav}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={
                  activeTab === cat.value ? styles.activeTab : styles.tabBtn
                }
                onClick={() => setActiveTab(cat.value)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.projectsSection}>
        <div className={styles.customContainer}>
          <motion.div
            className={styles.projectsGrid}
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                className={styles.projectCard}
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.12 }}
              >
                <div className={styles.projectImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={420}
                    height={260}
                    className={styles.projectImage}
                  />
                  <span className={styles.projectIcon}>{project.icon}</span>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span className={styles.projectTag} key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link2 size={20} color="#41c8f1" />
                    <span>View Project</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
