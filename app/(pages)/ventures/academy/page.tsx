import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import Services from "components/development/services";
import Work from "components/design/work";
import Process from "components/development/process";
import Comparison from "components/design/comparison";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";
import Tools from "components/development/tools";
import Mission from "components/home/mission";
import ProgramsOffered from "components/academy/programsOffered";

export const metadata: Metadata = {
  title: "Academy | DevArt Ventures",
  description:
    "We offer a range of courses to help you learn new skills and advance your career.",
  alternates: {
    canonical: "https://devartventures.com/academy",
  },
};

export default function Academy() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Master Tech & Design with <br /> Industry Leaders
          </>
        }
        description={
          <>
            Choose Your Path: Fast-Track Workshops with CEOs or Skill-Building{" "}
            <br />
            Bootcamps for Aspiring Designers & Developers.
          </>
        }
        primaryButtonText="Join Bootcamps"
        primaryButtonPath="/contact"
        secondaryButtonText="Explore Workshops"
        secondaryButtonPath="/portfolio"
      />
      <Mission
        heading="Our Mission"
        description=<>
          Provide high-impact, hands-on learning experiences led by top
          professionals, ensuring <br /> real-world applicability and career
          growth.
        </>
      />
      <ProgramsOffered />
      // <Tools />
      // <Services />
      // <Work />
      // <Process />
      // <Comparison />
      // <Testimonials />
      // <FAQs />
      // <CTA showBadge={false} />
    </div>
  );
}
