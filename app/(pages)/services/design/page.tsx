import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import PortfolioSlider from "components/design/portfolioSlider";
import Features from "components/design/features";
import Services from "components/design/services";
import Work from "components/design/work";
import Process from "components/design/process";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";
import CustomComparison from "components/design/customComparisonTable";

export const metadata: Metadata = {
  title: "UI/UX and Graphic Design | DevArt Ventures",
  description:
    "We offer UI/UX and Graphic Design services to businesses. We create beautiful and functional designs for your business.",
  alternates: {
    canonical: "https://devartventures.com/design",
  },
};

export default function Design() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Premium Designs That <br /> Bring Growth & Business Success
          </>
        }
        description="Your Partner in Transforming ideas into impactful digital solutions. Let's Build Things Together."
        primaryButtonText="Book Free Consultation"
        primaryButtonPath="https://calendly.com/devartventures/30min"
        secondaryButtonText="Start a Project"
        secondaryButtonPath="https://calendly.com/devartventures/30min"
      />
      <div className="mt-16">
        <PortfolioSlider />
        <Features />
        <Services />
        <Work />
        <Process />
        <CustomComparison />
        <Testimonials />
        <FAQs />
        <CTA
          heading="Let's work together!"
          description="Contact us today to start crafting your exceptional and customized design solutions! Start today, scale tomorrow!"
          buttonText="Start a Project"
          buttonLink="https://calendly.com/devartventures/30min"
          buttonTarget="_blank"
        />
      </div>
    </div>
  );
}
