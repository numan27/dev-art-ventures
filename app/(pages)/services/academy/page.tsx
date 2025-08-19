import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import PreviousWorkshops from "components/academy/previousWorkshops";
import BootCamps from "components/academy/bootCamps";
import Testimonials from "components/home/testimonials";
import FAQs from "components/design/faqs";
import Mission from "components/home/mission";
import ProgramsOffered from "components/academy/programsOffered";
import AcademyCTA from "components/academy/academyCTA";
import Workshops from "components/academy/workshops";
import Team from "components/academy/team";
import Features from "components/academy/features";
import BootcampMentors from "components/academy/bootcampMentors";
import AcademyCTABottom from "components/academy/academyCTABottom";

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
      <BootCamps />
      <AcademyCTA />
      <Workshops />
      <PreviousWorkshops />
      <Team />
      <Features />
      <BootcampMentors />
      <Testimonials />
      <FAQs />
      <AcademyCTABottom />
    </div>
  );
}
