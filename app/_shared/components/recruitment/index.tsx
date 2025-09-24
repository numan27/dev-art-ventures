"use client";
import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import { routeConstant } from "routes/constants";
import CTA from "components/home/cta";
import useWindowDimensions from "hooks/useWindowDimensions";
import PainPoints from "./painPoints";
import OurSolution from "./ourSolution";
import HowItWorks from "./howItWorks";
import Pricing from "./pricing";
import TalentSnapshot from "./talentSnapshot";
import Testimonials from "components/home/testimonials";
import Differentiators from "./differentiators";
import RecruitmentForm from "./recruitmentForm";

export const metadata: Metadata = {
  title: "Recruitment Services | DevArt Ventures",
  description:
    "Strategic talent acquisition and recruitment services to help you find and retain top talent for your organization.",
  alternates: {
    canonical: "https://devartventures.com/services/recruitment-services",
  },
};

export default function RecruitmentServices() {
  const { width } = useWindowDimensions();
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Strategic Talent Acquisition"
        heading={
          <>
            Hire Pre-Vetted Tech Talent. {width > 768 && <br />} Fast, Reliable,
            and Risk-Free.
          </>
        }
        description="We connect you with top designers and developers across all tech stacks. Every candidate is rigorously vetted for skills, experience, and culture fit. Start building your dream team in days — not months"
        primaryButtonText="Request Talent"
        primaryButtonPath="#recruitment-form"
        secondaryButtonText="Submit Your Job Role"
        secondaryButtonPath="#recruitment-form"
      />
      <PainPoints />
      <OurSolution />
      <HowItWorks />
      <Pricing />
      <TalentSnapshot />
      <Testimonials />
      <Differentiators />
      <CTA
        heading="Ready to transform your talent acquisition strategy?"
        description="Contact us today to discuss how our recruitment services can help you build high-performing teams!"
        buttonText="Start a Project"
        buttonLink="https://calendly.com/devartventures/30min"
      />
      <RecruitmentForm />
    </div>
  );
}
