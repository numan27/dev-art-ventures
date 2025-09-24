"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomCard from "components/common/customCard";
import {
  Sparkles,
  Timer,
  BadgeDollarSign,
  Palette,
  Globe2,
} from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      iconNode: (
        <Sparkles size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Exclusive Network Of Pre‑Vetted Talent",
      description:
        "Curated designers and developers rigorously tested for skills and reliability.",
    },
    {
      iconNode: (
        <Timer size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Faster Hiring Than Traditional Recruiters",
      description: "Qualified candidates in days, not months.",
    },
    {
      iconNode: (
        <BadgeDollarSign
          size={48}
          strokeWidth={1.75}
          className="text-[#B7A9FF]"
        />
      ),
      title: "No Hidden Fees — Fixed Percentage Only",
      description:
        "Transparent pricing with a simple percentage fee. No surprises.",
    },
    {
      iconNode: (
        <Palette size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Strong Focus On Design + Development Talent",
      description:
        "Specialized in creative and technical roles for high‑impact delivery.",
    },
    {
      iconNode: (
        <Globe2 size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Flexible Roles: Remote, Hybrid, Or On‑Site",
      description: "Talent that fits your model—remote, hybrid, or on‑site.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Why Choose Us"
          heading="What Makes Us Different"
          description="We've reimagined recruitment to deliver exceptional results through our unique approach and specialized focus:"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.differentiatorsContainer}>
          {differentiators.map((differentiator, index) => (
            <div
              key={index}
              className={classNames(
                styles.cardWrapper,
                index === 0 ? styles.featured : undefined
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CustomCard
                iconNode={differentiator.iconNode}
                title={differentiator.title}
                description={differentiator.description}
                centered={false}
                height="min-h-[240px]"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
