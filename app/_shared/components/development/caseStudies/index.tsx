"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomSlider from "components/common/customSlider";
import { Settings } from "react-slick";

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
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: false,
    arrows: false,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
          <CustomSlider settings={sliderSettings}>
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
          </CustomSlider>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
