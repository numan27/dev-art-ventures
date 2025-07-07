"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import SectionHeading from "../../common/sectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      rating: 5,
      content:
        "CoreIT Ventures transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations. The team delivered exceptional results that drove significant growth for our business.",
      project: "E-commerce Platform Redesign",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      company: "InnovateCorp",
      avatar: "👨‍💻",
      rating: 5,
      content:
        "Working with CoreIT Ventures was a game-changer for our startup. Their expertise in modern technologies and strategic thinking helped us build a scalable solution that positioned us for success in the market.",
      project: "SaaS Platform Development",
      industry: "SaaS",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthFirst",
      company: "GrowthFirst",
      avatar: "👩‍🎨",
      rating: 5,
      content:
        "The team at CoreIT Ventures is incredibly professional and creative. They understood our vision perfectly and delivered a solution that not only met but exceeded our goals. Highly recommended!",
      project: "Digital Marketing Platform",
      industry: "Marketing",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, HealthTech Pro",
      company: "HealthTech Pro",
      avatar: "👨‍⚕️",
      rating: 5,
      content:
        "CoreIT Ventures helped us navigate the complex healthcare technology landscape. Their deep understanding of compliance requirements and technical expertise made all the difference in our project's success.",
      project: "Healthcare Management System",
      industry: "Healthcare",
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager, FinTech Solutions",
      company: "FinTech Solutions",
      avatar: "👩‍💼",
      rating: 5,
      content:
        "Exceptional service and outstanding results! CoreIT Ventures delivered a robust financial platform that handles millions of transactions securely. Their commitment to quality and security is unmatched.",
      project: "Financial Trading Platform",
      industry: "FinTech",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideVariants = {
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <motion.div
          className={classNames(styles.content)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="Client Success Stories"
            title="What Our Clients Say"
            align="center"
          />

          <motion.div
            className={styles.testimonialsContainer}
            variants={fadeInUp}
          >
            <div className={styles.sliderWrapper}>
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
                  className={styles.testimonialCard}
                >
                  <div className={styles.testimonialContent}>
                    <div className={styles.quoteIcon}>❝</div>

                    <div className={styles.rating}>
                      {[...Array(testimonials[currentSlide].rating)].map(
                        (_, i) => (
                          <span key={i} className={styles.star}>
                            ⭐
                          </span>
                        )
                      )}
                    </div>

                    <p className={styles.testimonialText}>
                      {testimonials[currentSlide].content}
                    </p>

                    <div className={styles.testimonialMeta}>
                      <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                          {testimonials[currentSlide].avatar}
                        </div>
                      </div>

                      <div className={styles.clientInfo}>
                        <h4 className={styles.clientName}>
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className={styles.clientPosition}>
                          {testimonials[currentSlide].position}
                        </p>
                        <p className={styles.clientCompany}>
                          {testimonials[currentSlide].company}
                        </p>
                      </div>
                    </div>

                    <div className={styles.projectInfo}>
                      <span className={styles.projectLabel}>Project:</span>
                      <span className={styles.projectName}>
                        {testimonials[currentSlide].project}
                      </span>
                      <span className={styles.industryTag}>
                        {testimonials[currentSlide].industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.sliderControls}>
              <button
                className={styles.navButton}
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className={styles.dotsContainer}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={classNames(styles.dot, {
                      [styles.activeDot]: index === currentSlide,
                    })}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className={styles.navButton}
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            className={classNames(styles.ctaContainer, "flex justify-center")}
            variants={fadeInUp}
          >
            <CustomButton
              title="Start Your Project"
              className={styles.ctaButton}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
