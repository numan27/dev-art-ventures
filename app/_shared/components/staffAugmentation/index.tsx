"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import Testimonials from "components/home/testimonials";
import Features from "components/staffAugmentation/features";
import TalentForm from "components/staffAugmentation/talentForm";
import AlternativeRecruitment from "components/staffAugmentation/alternativeRecruitment";
import RolesWeProvide from "components/staffAugmentation/rolesWeProvide";
import WhyChooseUs from "components/staffAugmentation/pricingExample";
import StaffAugmentationHeroBanner from "components/staffAugmentation/recruitmentHeroBanner";
import FAQs from "components/design/faqs";
import CTA from "components/home/cta";
import useWindowDimensions from "hooks/useWindowDimensions";
import { staffAugmentationFaqs } from "utils/constants";
import ProblemsAndSolutions from "./problemsAndSolutions";

export default function StaffAugmentationContent() {
  const { width } = useWindowDimensions();

  return (
    <div className={classNames(styles.pageWrapper)}>
      <StaffAugmentationHeroBanner
        tag="Trusted by 50+ Tech Teams"
        heading={
          <>
            Scale Your Design Team. {width > 768 && <br />} On Demand, On
            Budget.
          </>
        }
        description={
          <>
            Integrate pre-vetted, senior-level designers into your team
            seamlessly to hit deadlines and elevate your product's user
            experience
          </>
        }
        primaryButtonText="Hire a Designer Now"
        primaryButtonPath="#talent-form"
        secondaryButtonText="Get Started"
        secondaryButtonPath="#talent-form"
      />
      <ProblemsAndSolutions />
      <RolesWeProvide />
      <Features />
      <WhyChooseUs />
      <AlternativeRecruitment />
      <CTA
        tag="Permanent Recruitment"
        heading="Ready to Build Your Permanent Team?"
        description="Our recruitment experts will help you find the perfect
                candidates who align with your company culture and long-term
                vision."
        buttonText="Explore Recruitment Service"
        buttonLink=""
        buttonTarget="_blank"
      />
      <Testimonials />
      <FAQs
        faqsData={staffAugmentationFaqs}
        badge="Staff Augmentation FAQ's"
        heading="Frequently Asked Questions"
        description="Get answers to common questions about our staff augmentation services, processes, and how we can help scale your development team."
      />
      <TalentForm />
    </div>
  );
}
