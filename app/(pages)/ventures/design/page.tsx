import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import PortfolioSlider from "components/design/portfolioSlider";
import Features from "components/design/features";
import Services from "components/design/services";
import Work from "components/design/work";
import Process from "components/design/process";
import Comparison from "components/design/comparison";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";

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
        primaryButtonPath="/contact"
        secondaryButtonText="Start a Project"
        secondaryButtonPath="/contact"
      />
      <div className="mt-16">
        <PortfolioSlider />
        <Features />
        <Services />
        <Work />
        <Process />
        <Comparison />
        <Testimonials />
        <FAQs />
        <CTA showBadge={false} />
      </div>
    </div>
  );
}
