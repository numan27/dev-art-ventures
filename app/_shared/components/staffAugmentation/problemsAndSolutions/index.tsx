"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomCard from "components/common/customCard";

const problemsData = [
  {
    id: 1,
    title: "Lengthy, expensive hiring processes",
    description:
      "Traditional recruitment takes months and costs thousands in agency fees and lost productivity.",
    icon: Images.DesignProcess6.src,
  },
  {
    id: 2,
    title: "Inconsistent portfolio quality",
    description:
      "Hard to verify design skills and experience through interviews alone.",
    icon: Images.DesignService6.src,
  },
  {
    id: 3,
    title: "High cost of full-time senior designers",
    description:
      "Salaries, benefits, and overhead costs add up quickly for permanent hires.",
    icon: Images.Dollar.src,
  },
  {
    id: 4,
    title: "Design talent gaps stalling projects",
    description:
      "Critical deadlines missed due to lack of available skilled designers.",
    icon: Images.Networking.src,
  },
  {
    id: 5,
    title: "Onboarding and management overhead",
    description:
      "Time spent training and managing new team members instead of focusing on design.",
    icon: Images.DesignService4.src,
  },
  {
    id: 6,
    title: "Limited access to specialized skills",
    description:
      "Struggling to find designers with expertise in specific tools, industries, or design systems.",
    icon: Images.DevService5.src,
  },
];

const solutionsData = [
  {
    id: 1,
    title: "Curated Talent",
    description:
      "Rigorously vetted designers for skill, communication, and culture fit.",
    icon: Images.DevFeature2.src,
    color: "success",
  },
  {
    id: 2,
    title: "Seamless Integration",
    description:
      "They work as an extension of your team using your tools (Figma, Adobe Suite, etc.).",
    icon: Images.DevService5.src,
    color: "success",
  },
  {
    id: 3,
    title: "Speed",
    description:
      "Get started in under a week with pre-vetted talent ready to hit the ground running.",
    icon: Images.DevFeature5.src,
    color: "success",
  },
  {
    id: 4,
    title: "Flexibility",
    description:
      "Scale your team up or down as project needs change with just 2 weeks notice.",
    icon: Images.DesignFeature2.src,
    color: "success",
  },
];

const ProblemsAndSolutions = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="The Challenge"
          heading="Tired of the Endless Hunt for Design Talent?"
          description="We understand the pain points of traditional hiring. Here's how we provide a smarter way."
          centered={true}
          maxParticles={150}
          section="services"
          backgroundImage={Images.ServiceSectionBg?.src}
        />

        {/* Problems Section */}
        <div className={styles.problemsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Common Pain Points</h3>
            <p className={styles.sectionDescription}>
              These challenges are costing you time, money, and project momentum
            </p>
          </div>

          <div
            className={classNames(
              styles.problemsGrid,
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            )}
          >
            {problemsData.map((problem, index) => (
              <CustomCard
                key={problem.id}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                centered={true}
                className={styles.problemCard}
                height="min-h-[200px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Solution Bridge */}
        <div className={styles.solutionBridge}>
          <div className={styles.bridgeContent}>
            <h3 className={styles.bridgeTitle}>We Provide a Smarter Way</h3>
            <p className={styles.bridgeDescription}>
              Transform your hiring challenges into competitive advantages
            </p>
          </div>
        </div>

        {/* Solutions Section */}
        <div className={styles.solutionsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Solution</h3>
            <p className={styles.sectionDescription}>
              Everything you need to scale your design team without the
              traditional headaches
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {solutionsData.map((solution, index) => (
              <div
                key={solution.id}
                className={classNames(
                  styles.solutionCard,
                  styles[solution.color]
                )}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.iconWrapper}>
                  <img src={solution.icon} alt={solution.title} />
                </div>
                <h4 className={styles.cardTitle}>{solution.title}</h4>
                <p className={styles.cardDescription}>{solution.description}</p>
                <div className={styles.cardIndicator} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsAndSolutions;
