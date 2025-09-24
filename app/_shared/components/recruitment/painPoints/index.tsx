"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomCard from "components/common/customCard";
import CustomBadge from "components/common/customBadge";

const PainPoints = () => {
  const createEmojiIcon = (emoji: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 48;
    canvas.height = 48;
    if (ctx) {
      ctx.font = "32px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(emoji, 24, 24);
    }
    return canvas.toDataURL();
  };

  const painPoints = [
    {
      icon: Images.DevFeature2.src,
      title: "Slow Hiring Cycles",
      description: "Hiring drags for weeks, stalling progress.",
    },
    {
      icon: Images.DesignProcess2.src,
      title: "Resume Overload",
      description: "Too many unqualified resumes waste time.",
    },
    {
      icon: Images.Dollar.src,
      title: "Hidden Fees And Unclear Pricing",
      description: "Opaque costs disrupt budgets and planning.",
    },
    {
      icon: Images.DesignProcess6.src,
      title: "Uncertain Skill & Culture Fit",
      description: "Poor vetting risks bad skills and mismatch.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <div
          className={
            (styles.painPointsLayout,
            "grid lg:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6")
          }
        >
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col md:gap-5 sm:gap-4 gap-3 justify-center items-start relative z-10"
            )}
          >
            <CustomBadge title="Pain Points" />
            <h2>Why Traditional Hiring Fails</h2>
            <p>
              The recruitment industry is broken. Here are the common challenges
              that waste your time, money, and resources
            </p>
          </div>

          <div
            className={
              (styles.painPointsContainer,
              "grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3")
            }
          >
            {painPoints.map((point, index) => (
              <CustomCard
                key={index}
                icon={point.icon}
                title={point.title}
                description={point.description}
                centered={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
