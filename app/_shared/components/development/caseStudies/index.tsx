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
    title: "Hayes Media - Marketing Agency Website (Headless CMS)",
    description:
      "A sophisticated marketing agency website built with Next.js 15 and TypeScript, featuring server-side rendering, API routes, and a headless WordPress CMS backend. The project showcases advanced TypeScript implementation for type safety and custom SCSS modules for unique design elements.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Headless CMS",
      "WordPress",
    ],
    category: "Marketing Agency Website",
    image: Images.DevPortfolioDetail1?.src,
  },
  {
    id: 2,
    icon: Images.DevFeature3?.src || "/tools/react.png",
    title: "Noyr - E-commerce Website",
    description:
      "A modern e-commerce platform built with Next.js 15 and TypeScript, featuring custom SCSS modules for sophisticated UI components and animations. The project includes responsive design, optimized performance, and seamless user experience for online shopping.",
    technologies: ["Next.js", "TypeScript", "SCSS Modules", "Tailwind CSS"],
    category: "E-commerce Website",
    image: Images.DevPortfolioDetail2?.src,
  },
  {
    id: 3,
    icon: Images.DevFeature4?.src || "/tools/nuxt.png",
    title: "Core IT Ventures - IT Consultation Agency Website",
    description:
      "A comprehensive IT consultation agency website built with Next.js and Node.js, featuring server-side rendering, dynamic routing, and multi-language support. The project demonstrates advanced TypeScript implementation and custom SCSS modules for professional business presentation.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Multi-language",
    ],
    category: "IT Consultation Agency Website",
    image: Images.DevPortfolioDetail3?.src,
  },
  {
    id: 4,
    icon: Images.DevFeature5?.src || "/tools/wordpress.png",
    title: "Code Ninjas - Coding Bootcamp Website",
    description:
      "A modern coding bootcamp website built with Next.js and TypeScript, featuring Shadcn UI components and custom SCSS modules. The project showcases a clean, educational design with Tailwind CSS for responsive layouts and engaging user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "SCSS Modules",
      "Tailwind CSS",
    ],
    category: "Coding Bootcamp Website",
    image: Images.DevPortfolioDetail4?.src,
  },
  {
    id: 5,
    icon: Images.DevFeature6?.src || "/tools/react.png",
    title: "Datlyx - Business Consultation Agency Website",
    description:
      "A professional business consultation agency website built with WordPress and Elementor, featuring a custom CMS for content management. The project demonstrates modern web design principles with responsive design and professional business presentation.",
    technologies: ["Elementor", "CMS", "WordPress"],
    category: "Business Consultation Agency Website",
    image: Images.DevPortfolioDetail5?.src,
  },
  {
    id: 6,
    icon: Images.DevFeature2?.src || "/tools/docker.png",
    title: "Who Does Your Hair - Hair Salon Directory Website",
    description:
      "A comprehensive hair salon directory platform built with Next.js and TypeScript, featuring Shadcn UI components and Tailwind CSS. The project includes advanced search functionality, responsive design, and seamless user experience for salon discovery.",
    technologies: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    category: "Hair Salon Directory Website",
    image: Images.DevPortfolioDetail6?.src,
  },
  {
    id: 7,
    icon: Images.DevFeature2?.src || "/tools/docker.png",
    title: "Personal Website - Business & Tax Consultancy",
    description:
      "A professional business and tax consultancy website built with WordPress and Elementor, featuring a custom CMS for content management. The project showcases professional business presentation with responsive design and modern web standards.",
    technologies: ["WordPress", "Elementor", "CMS"],
    category: "Business & Tax Consultancy Website",
    image: Images.DevPortfolioDetail7?.src,
  },
  {
    id: 8,
    icon: Images.DevFeature2?.src || "/tools/docker.png",
    title: "Glow Verse - E-commerce Website",
    description:
      "A modern e-commerce platform built with React.js and TypeScript, featuring Shadcn UI components and Tailwind CSS. The project includes dual-language support, responsive design, and optimized performance for online shopping experiences.",
    technologies: [
      "React.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Dual Lingo",
    ],
    category: "E-commerce Website",
    image: Images.DevPortfolioDetail8?.src,
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
    autoplaySpeed: 4000,
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
