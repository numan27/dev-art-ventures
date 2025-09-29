"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const tableData = [
  {
    id: 1,
    problem: {
      title: "Lengthy, expensive hiring processes",
      description:
        "Traditional recruitment takes months and costs thousands in agency fees and lost productivity.",
      icon: Clock,
    },
    solution: {
      title: "Lightning-fast onboarding",
      description:
        "Get started in under a week with pre-vetted talent ready to hit the ground running.",
      icon: Zap,
    },
  },
  {
    id: 2,
    problem: {
      title: "Inconsistent portfolio quality",
      description:
        "Hard to verify design skills and experience through interviews alone.",
      icon: Target,
    },
    solution: {
      title: "Curated talent pool",
      description:
        "Rigorously vetted designers with proven portfolios and verified skills.",
      icon: Shield,
    },
  },
  {
    id: 3,
    problem: {
      title: "High cost of full-time senior designers",
      description:
        "Salaries, benefits, and overhead costs add up quickly for permanent hires.",
      icon: DollarSign,
    },
    solution: {
      title: "Flexible pricing model",
      description:
        "Pay only for what you need with transparent rates and no hidden costs.",
      icon: TrendingUp,
    },
  },
  {
    id: 4,
    problem: {
      title: "Design talent gaps stalling projects",
      description:
        "Critical deadlines missed due to lack of available skilled designers.",
      icon: AlertTriangle,
    },
    solution: {
      title: "Immediate availability",
      description:
        "Access to skilled designers within 48 hours to keep your projects on track.",
      icon: CheckCircle,
    },
  },
  {
    id: 5,
    problem: {
      title: "Onboarding and management overhead",
      description:
        "Time spent training and managing new team members instead of focusing on design.",
      icon: Users,
    },
    solution: {
      title: "Seamless team integration",
      description:
        "They work as an extension of your team using your tools and processes.",
      icon: Users,
    },
  },
  {
    id: 6,
    problem: {
      title: "Limited access to specialized skills",
      description:
        "Struggling to find designers with expertise in specific tools, industries, or design systems.",
      icon: Lightbulb,
    },
    solution: {
      title: "Specialized expertise on demand",
      description:
        "Find designers with specific skills in Figma, Adobe Suite, or industry experience.",
      icon: Target,
    },
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

        {/* Modern Table Layout */}
        <div className={styles.tableContainer}>
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>
              <div className={styles.headerIcon}>
                <AlertTriangle size={32} className={styles.headerIconSvg} />
              </div>
              <h3 className={styles.headerTitle}>Pain Points</h3>
              <p className={styles.headerDescription}>
                Traditional hiring challenges that slow down your projects and
                increase costs
              </p>
            </div>
            <div className={styles.headerCell}>
              <div className={styles.headerIcon}>
                <CheckCircle size={32} className={styles.headerIconSvg} />
              </div>
              <h3 className={styles.headerTitle}>Our Solutions</h3>
              <p className={styles.headerDescription}>
                Smart alternatives that eliminate hiring headaches and
                accelerate growth
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {tableData.map((row, index) => (
              <div
                key={row.id}
                className={styles.tableRow}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Problem Cell */}
                <div className={styles.tableCell}>
                  <div className={styles.cellContent}>
                    <div className={styles.cellIcon}>
                      <row.problem.icon
                        size={24}
                        className={styles.cellIconSvg}
                      />
                    </div>
                    <div className={styles.cellText}>
                      <h4 className={styles.cellTitle}>{row.problem.title}</h4>
                      <p className={styles.cellDescription}>
                        {row.problem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile-only Solutions Subheader (appears once between problems and solutions) */}
                {index === 0 && (
                  <div className={styles.mobileSolutionsHeader}>
                    <div className={styles.headerIcon}>
                      <CheckCircle size={28} className={styles.headerIconSvg} />
                    </div>
                    <h3 className={styles.headerTitle}>Our Solutions</h3>
                    <p className={styles.headerDescription}>
                      Smart alternatives that eliminate hiring headaches and
                      accelerate growth
                    </p>
                  </div>
                )}

                {/* Solution Cell */}
                <div className={styles.tableCell}>
                  <div className={styles.cellContent}>
                    <div className={styles.cellIcon}>
                      <row.solution.icon
                        size={24}
                        className={styles.cellIconSvg}
                      />
                    </div>
                    <div className={styles.cellText}>
                      <h4 className={styles.cellTitle}>{row.solution.title}</h4>
                      <p className={styles.cellDescription}>
                        {row.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsAndSolutions;
