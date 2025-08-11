"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomBadge from "components/common/customBadge";
import CustomButton from "components/common/customButton";
import CustomAccordion from "components/common/customAccordion";

interface FAQItem {
  id: number;
  title: string;
  content: string;
}

interface FAQsProps {
  faqsData?: FAQItem[];
  badge?: string;
  heading?: string;
  description?: string;
}

const defaultFaqsData: FAQItem[] = [
  {
    id: 1,
    title: "What services do you offer?",
    content:
      "We offer a comprehensive range of design services including UI/UX design, web design, mobile app design, branding, and graphic design. Our team specializes in creating user-centered digital experiences that drive results.",
  },
  {
    id: 2,
    title: "How long does a typical project take?",
    content:
      "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    title: "Do you offer ongoing support after the website launch?",
    content:
      "Yes, we provide comprehensive post-launch support including maintenance, updates, hosting management, and ongoing optimization. We offer various support packages to meet your specific needs.",
  },
  {
    id: 4,
    title: "Can I see examples of your previous work?",
    content:
      "Absolutely! We have an extensive portfolio showcasing our work across various industries and project types. You can view case studies, live websites, and detailed project breakdowns on our portfolio page.",
  },
  {
    id: 5,
    title: "What is your pricing structure like?",
    content:
      "Our pricing is transparent and project-based. We provide detailed quotes after understanding your requirements. Factors include project scope, complexity, timeline, and ongoing support needs. We offer flexible payment terms.",
  },
];

const FAQs = ({
  faqsData = defaultFaqsData,
  badge = "FAQ's",
  heading = "Frequently Asked Questions",
  description = "Answers to common questions about our services, processes, and what sets us apart.",
}: FAQsProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const handleAccordionClick = (faqId: number) => {
    console.log("Clicking accordion:", faqId, "Current open:", openAccordion);
    setOpenAccordion(openAccordion === faqId ? null : faqId);
  };

  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge={badge}
          heading={heading}
          description={description}
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.TestimonialsSectionBg.src}
        />

        <div className={classNames(styles.cardContainer)}>
          {faqsData.map((faq) => (
            <CustomAccordion
              key={faq.id}
              title={faq.title}
              isOpen={openAccordion === faq.id}
              onClick={() => handleAccordionClick(faq.id)}
            >
              {faq.content}
            </CustomAccordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
