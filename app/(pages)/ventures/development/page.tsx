import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import DevelopmentPortfolioSlider from "components/development/portfolioSlider";
import Services from "components/development/services";
import Process from "components/development/process";
import Highlights from "components/development/highlights";
import Tools from "components/development/tools";
import CaseStudies from "components/development/caseStudies";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";
import DevelopmentHeroBanner from "components/development/devHeroBanner";

export const metadata: Metadata = {
  title: "Web & App Development | DevArt Ventures",
  description:
    "Expert custom software development services including web apps, mobile apps, APIs, and e-commerce solutions. We build scalable, innovative software tailored to your business needs.",
  alternates: {
    canonical: "https://devartventures.com/development",
  },
};

export default function Development() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <DevelopmentHeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Custom Software <br /> Development Made Easy
          </>
        }
        description="We work with the latest technologies and methodologies to create software that is innovative, reliable, and tailored exactly to your business requirements."
        primaryButtonText="Book Free Consultation"
        primaryButtonPath="/contact"
        secondaryButtonText="Start a Project"
        secondaryButtonPath="/contact"
      />
      <div className="mt-16">
        <DevelopmentPortfolioSlider />
        <Services />
        <Process />
        <Highlights />
        <Tools />
        <CaseStudies />
        <Testimonials />
        <FAQs />
        <CTA showBadge={false} />
      </div>
    </div>
  );
}
