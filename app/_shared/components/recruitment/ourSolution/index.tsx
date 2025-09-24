"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomCard from "components/common/customCard";
import CustomButton from "components/common/customButton";
import {
  CheckCircle2,
  Layers3,
  Rocket,
  Users2,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { routeConstant } from "routes/constants";

const OurSolution = () => {
  const solutions = [
    {
      iconNode: (
        <CheckCircle2 size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Pre-Vetted Candidates",
      description:
        "Technical tests, portfolio review & interviews ensure every candidate meets your standards before you even see them.",
    },
    {
      iconNode: (
        <Layers3 size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Coverage Across All Tech Stacks",
      description:
        "Frontend, Backend, Full-stack, Mobile, DevOps, UI/UX & more - we have talent for every technology you need.",
    },
    {
      iconNode: (
        <Rocket size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Fast Turnaround",
      description:
        "Get shortlisted profiles in 48–72 hours, not weeks. Start building your team immediately with our rapid screening process.",
    },
    {
      iconNode: (
        <Users2 size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Culture Fit Guaranteed",
      description:
        "Communication, collaboration, and soft skills are thoroughly assessed to ensure seamless team integration.",
    },
    {
      iconNode: (
        <BadgeDollarSign
          size={48}
          strokeWidth={1.75}
          className="text-[#B7A9FF]"
        />
      ),
      title: "Transparent Pricing",
      description:
        "Fixed percentage on successful placement only. No hidden fees, no surprises - you only pay when you hire.",
    },
    {
      iconNode: (
        <ShieldCheck size={48} strokeWidth={1.75} className="text-[#B7A9FF]" />
      ),
      title: "Replacement Guarantee",
      description:
        "If the hire doesn't work out within 60 days, we replace at no cost. Your success is our commitment.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Our Solution"
          heading="Your Shortcut to World-Class Talent"
          description="We've solved the recruitment problem with a comprehensive approach that delivers results:"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.solutionsContainer}>
          {solutions.map((solution, index) => (
            <CustomCard
              key={index}
              iconNode={solution.iconNode}
              title={solution.title}
              description={solution.description}
              centered={false}
            />
          ))}
        </div>
        <div
          className={classNames(
            styles.ctaContainer,
            "mt-8 flex items-center justify-center pt-8"
          )}
        >
          <Link href={routeConstant.contact.path}>
            <CustomButton title="Get Vetted Profiles Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
