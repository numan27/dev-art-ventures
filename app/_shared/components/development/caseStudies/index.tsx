"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomButton from "components/common/customButton";
import { useState } from "react";

const caseStudiesData = [
  {
    id: 1,
    icon: Images.DevFeature2?.src || "/tools/nextjs.png",
    title: "Next.js Enterprise Platform",
    description:
      "Full-stack enterprise platform built with Next.js 15, featuring server-side rendering, API routes, and advanced TypeScript implementation for type safety.",
    technologies: ["Next.js", "TypeScript", "SCSS Modules", "Tailwind CSS"],
    category: "Modern Web Platform",
    image: "/tools/nextjs.png",
  },
  {
    id: 2,
    icon: Images.DevFeature3?.src || "/tools/react.png",
    title: "React + TypeScript Dashboard",
    description:
      "Advanced admin dashboard with React 19, TypeScript for type safety, and custom SCSS modules for sophisticated UI components and animations.",
    technologies: ["React", "TypeScript", "SCSS Modules", "Tailwind CSS"],
    category: "Admin Dashboard",
    image: "/tools/react.png",
  },
  {
    id: 3,
    icon: Images.DevFeature4?.src || "/tools/nuxt.png",
    title: "Nuxt.js Web Application",
    description:
      "Modern, SEO-optimized web application built with Nuxt.js featuring server-side rendering, dynamic routing, and seamless user experience.",
    technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    category: "Modern Web App",
    image: "/tools/nuxt.png",
  },
  {
    id: 4,
    icon: Images.DevFeature5?.src || "/tools/wordpress.png",
    title: "Headless WordPress CMS",
    description:
      "Decoupled WordPress backend with custom REST API endpoints, enabling modern frontend frameworks to consume content efficiently.",
    technologies: ["WordPress", "REST API", "GraphQL", "JWT Auth"],
    category: "Headless CMS",
    image: "/tools/wordpress.png",
  },
  {
    id: 5,
    icon: Images.DevFeature6?.src || "/tools/react.png",
    title: "Full-Stack E-commerce",
    description:
      "Complete e-commerce solution with Next.js frontend, TypeScript backend, and custom SCSS modules for unique design implementation.",
    technologies: ["Next.js", "TypeScript", "SCSS Modules", "Tailwind CSS"],
    category: "E-commerce",
    image: "/tools/react.png",
  },
  {
    id: 6,
    icon: Images.DevFeature2?.src || "/tools/docker.png",
    title: "DevOps Implementation",
    description:
      "Complete DevOps setup with Docker containers, CI/CD pipelines, and cloud infrastructure management for scalable applications.",
    technologies: ["Docker", "AWS", "GitHub Actions", "Kubernetes"],
    category: "DevOps",
    image: "/tools/docker.png",
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudiesData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <CustomSectionHeading
          badge="Case Studies"
          heading={
            <>
              Development Projects <br /> We're Proud Of
            </>
          }
          description="Explore our portfolio of successful development projects that demonstrate our technical expertise and problem-solving capabilities"
          centered={true}
        />

        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudiesData.map((project) => (
                <div key={project.id} className={styles.carouselSlide}>
                  <div className={styles.slideContent}>
                    <div className={styles.slideImage}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={styles.projectImage}
                      />
                      <div className={styles.imageOverlay} />
                    </div>

                    <div className={styles.slideInfo}>
                      <div className={styles.categoryBadge}>
                        <span className={styles.categoryText}>
                          {project.category}
                        </span>
                      </div>

                      <h3 className={styles.slideTitle}>{project.title}</h3>

                      <p className={styles.slideDescription}>
                        {project.description}
                      </p>

                      <div className={styles.techTags}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {caseStudiesData.map((_, index) => (
              <button
                key={index}
                className={classNames(
                  styles.dot,
                  index === activeIndex && styles.activeDot
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
