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
  Handshake,
} from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      iconNode: (
        <Sparkles size={36} strokeWidth={1.75} className="text-[#530fff]" />
      ),
      title: "Exclusive Network Of Pre-Vetted Talent",
      description: "Top designers and developers, rigorously vetted.",
    },
    {
      iconNode: (
        <Timer size={36} strokeWidth={1.75} className="text-[#530fff]" />
      ),
      title: "Faster Hiring Than Traditional Recruiters",
      description: "Qualified candidates in days, not months.",
    },
    {
      iconNode: (
        <BadgeDollarSign
          size={36}
          strokeWidth={1.75}
          className="text-[#530fff]"
        />
      ),
      title: "No Hidden Fees — Fixed Percentage Only",
      description:
        "Transparent pricing with a simple percentage fee. No surprises.",
    },
    {
      iconNode: (
        <Palette size={36} strokeWidth={1.75} className="text-[#530fff]" />
      ),
      title: "Strong Focus On Design + Development Talent",
      description:
        "Specialized in creative and technical roles for high-impact delivery.",
    },
    {
      iconNode: (
        <Globe2 size={36} strokeWidth={1.75} className="text-[#530fff]" />
      ),
      title: "Flexible Roles: Remote, Hybrid, Or On-Site",
      description: "Talent that fits your model—remote, hybrid, or on-site.",
    },
    {
      iconNode: (
        <Handshake size={36} strokeWidth={1.75} className="text-[#530fff]" />
      ),
      title: "Long-Term Partnership & Retention Support",
      description:
        "We help ensure smooth onboarding and lasting talent relationships.",
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
                styles.cardWrapper
                // index === 0 ? styles.featured : undefined
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
