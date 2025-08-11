import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import Testimonials from "components/home/testimonials";
import Mission from "components/home/mission";
import Features from "components/staffAugmentation/features";
import HireTalent from "components/staffAugmentation/hireTalent";
import Highlights from "components/staffAugmentation/highlights";
import RecruitmentCTABottom from "components/staffAugmentation/recruitmentCTABottom";
import TalentForm from "components/staffAugmentation/talentForm";
import AlternativeRecruitment from "components/staffAugmentation/alternativeRecruitment";
import RolesWeProvide from "components/staffAugmentation/rolesWeProvide";
import WhyChooseUs from "components/staffAugmentation/pricingExample";
import StaffAugmentationHeroBanner from "components/staffAugmentation/recruitmentHeroBanner";
import FAQs from "components/design/faqs";

export const metadata: Metadata = {
  title: "Staff Augmentation | DevArt Ventures",
  description:
    "Scale your team with pre-vetted tech talent. Hire skilled developers, designers, and engineers on-demand.",
  alternates: {
    canonical: "https://devartventures.com/staff-augmentation",
  },
};

export default function StaffAugmentation() {
  const faqs = [
    {
      id: 1,
      title: "What is staff augmentation and how does it work?",
      content:
        "Staff augmentation is a flexible hiring strategy where you temporarily add skilled professionals to your existing team without the overhead of permanent hiring. We provide pre-vetted developers, designers, and engineers who integrate seamlessly with your team, work under your management, and can be scaled up or down based on project needs. It's like having an extended team without the recruitment, training, or long-term commitment costs.",
    },
    {
      id: 2,
      title: "How quickly can you deploy staff augmentation resources?",
      content:
        "We can deploy pre-vetted developers and designers within 72 hours of project approval. Our extensive talent pool and streamlined onboarding process ensure rapid deployment without compromising quality.",
    },
    {
      id: 3,
      title: "What happens if a team member doesn't meet our expectations?",
      content:
        "We offer a 100% satisfaction guarantee. If any team member doesn't meet your expectations within the first 2 weeks, we'll replace them at no additional cost. We're committed to ensuring your project success.",
    },
    {
      id: 4,
      title: "How do you ensure data security and confidentiality?",
      content:
        "All our team members sign comprehensive NDAs and work under strict security protocols. We use enterprise-grade security measures, secure communication channels, and comply with international data protection standards.",
    },
    {
      id: 5,
      title: "Can we scale the team up or down during the project?",
      content:
        "Absolutely! Our flexible engagement model allows you to scale your team up or down based on project requirements. You can add or remove team members with just 2 weeks' notice, ensuring optimal resource allocation.",
    },
    {
      id: 6,
      title: "What are the typical cost savings compared to local hiring?",
      content:
        "Our clients typically save 40-60% compared to local hiring when factoring in recruitment costs, benefits, overhead, and time-to-market. You get enterprise-level talent at competitive rates with zero long-term commitments.",
    },
    {
      id: 7,
      title: "Do you offer specialized roles like DevOps or AI engineers?",
      content:
        "Yes, we provide specialists across all technology domains including DevOps, AI/ML engineers, cloud architects, security experts, and more. Our talent pool covers 50+ technologies and frameworks to meet any project requirement.",
    },
  ];

  return (
    <div className={classNames(styles.pageWrapper)}>
      <StaffAugmentationHeroBanner
        tag="Trusted by 50+ Tech Teams"
        heading={
          <>
            Hire Top Design <br /> Talent On-Demand
          </>
        }
        description={
          <>
            Scale your team with pre-vetted UI/UX, Graphic, and Product
            Designers ready to integrate seamlessly with your projects
          </>
        }
        primaryButtonText="Hire in 72 Hours"
        primaryButtonPath="/contact"
      />
      <Features />
      <WhyChooseUs />
      <RolesWeProvide />
      <Testimonials />
      <TalentForm />
      <AlternativeRecruitment />
      <FAQs
        faqsData={faqs}
        badge="Staff Augmentation FAQ's"
        heading="Frequently Asked Questions"
        description="Get answers to common questions about our staff augmentation services, processes, and how we can help scale your development team."
      />
      <RecruitmentCTABottom />
    </div>
  );
}
