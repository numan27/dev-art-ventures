"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import SectionHeading from "../../common/sectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiEye,
} from "react-icons/fi";
import { Variants } from "framer-motion";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Enterprise Network Infrastructure",
      category: "Networking",
      description:
        "Designed and implemented a comprehensive network infrastructure for a multi-location enterprise, improving connectivity and security across all branches.",
      technologies: [
        "Cisco",
        "VMware",
        "SD-WAN",
        "Network Security",
        "Monitoring",
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Multi-site Connectivity",
        "Security Implementation",
        "Performance Optimization",
        "24/7 Monitoring",
      ],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Development",
      description:
        "Built a scalable e-commerce platform with advanced features including payment processing, inventory management, and customer analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Customer Analytics",
        "Mobile Responsive",
      ],
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      category: "Cloud Solutions",
      description:
        "Successfully migrated legacy systems to cloud infrastructure, reducing costs by 40% while improving performance and scalability.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Infrastructure Migration",
        "Cost Optimization",
        "Scalability",
        "Automated Deployment",
      ],
    },
    {
      id: 4,
      title: "Cybersecurity Framework",
      category: "Security",
      description:
        "Implemented comprehensive cybersecurity measures including threat detection, vulnerability assessment, and compliance management.",
      technologies: [
        "SIEM",
        "Firewall",
        "Penetration Testing",
        "Compliance Tools",
        "Incident Response",
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Compliance Management",
        "Incident Response",
      ],
    },
    {
      id: 5,
      title: "Business Intelligence Dashboard",
      category: "Data Analytics",
      description:
        "Developed a real-time business intelligence dashboard providing insights into key performance indicators and business metrics.",
      technologies: [
        "Power BI",
        "SQL Server",
        "Python",
        "Azure",
        "Data Warehousing",
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time Analytics",
        "KPI Tracking",
        "Data Visualization",
        "Automated Reporting",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className={classNames(styles.sectionWrapper)}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingOrb1}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.floatingOrb2}
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.floatingOrb3}
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className={classNames(styles.customContainer)}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              subtitle="Our Portfolio"
              title="Featured Projects"
              align="center"
            />
          </motion.div>

          <motion.div
            className={styles.sliderContainer}
            variants={itemVariants}
          >
            <div className={styles.sliderWrapper} ref={sliderRef}>
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className={styles.slide}
                >
                  <div className={styles.projectCard}>
                    <div className={styles.projectImage}>
                      <div className={styles.imagePlaceholder}>
                        <div className={styles.placeholderContent}>
                          <div className={styles.placeholderIcon}>🚀</div>
                          <span>{projects[currentSlide].title}</span>
                        </div>
                      </div>
                      <div className={styles.projectOverlay}>
                        <div className={styles.overlayContent}>
                          <motion.button
                            className={styles.viewButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiEye />
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectInfo}>
                      <div className={styles.projectHeader}>
                        <span className={styles.category}>
                          {projects[currentSlide].category}
                        </span>
                        <h3 className={styles.projectTitle}>
                          {projects[currentSlide].title}
                        </h3>
                      </div>

                      <p className={styles.projectDescription}>
                        {projects[currentSlide].description}
                      </p>

                      <div className={styles.technologies}>
                        {projects[currentSlide].technologies.map(
                          (tech, index) => (
                            <motion.span
                              key={index}
                              className={styles.techTag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          )
                        )}
                      </div>

                      <div className={styles.projectFeatures}>
                        <h4>Key Features:</h4>
                        <ul>
                          {projects[currentSlide].features.map(
                            (feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {feature}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className={styles.projectActions}>
                        <motion.a
                          href={projects[currentSlide].liveUrl}
                          className={styles.actionButton}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={projects[currentSlide].githubUrl}
                          className={styles.actionButton}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className={styles.sliderControls}>
              <motion.button
                className={styles.navButton}
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowLeft />
              </motion.button>

              <div className={styles.dotsContainer}>
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    className={classNames(styles.dot, {
                      [styles.activeDot]: index === currentSlide,
                    })}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                className={styles.navButton}
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Project Grid for smaller screens */}
          {/* <motion.div className={styles.projectsGrid} variants={itemVariants}>
            <div className={styles.gridHeader}>
              <h3>All Projects</h3>
              <p>Explore our complete portfolio of innovative solutions</p>
            </div>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={styles.gridCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <div className={styles.gridCardImage}>
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.placeholderContent}>
                        <div className={styles.placeholderIcon}>🚀</div>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isHovered === index && (
                        <motion.div
                          className={styles.gridCardOverlay}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className={styles.overlayActions}>
                            <motion.a
                              href={project.liveUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiExternalLink />
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiGithub />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={styles.gridCardContent}>
                    <span className={styles.gridCategory}>
                      {project.category}
                    </span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className={styles.gridTechnologies}>
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
