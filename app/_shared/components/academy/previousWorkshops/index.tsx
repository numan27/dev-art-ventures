import { memo } from "react";
import { Images } from "assets";
import InfiniteSlider from "components/common/infiniteSlider";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const academyIcons = [
  Images.DesignSlider1,
  Images.DesignSlider2,
  Images.DesignSlider3,
  Images.DesignSlider4,
  Images.DesignSlider5,
  Images.DesignSlider6,
  Images.DesignSlider7,
  Images.DesignSlider8,
  Images.DesignSlider9,
];

const academyIconsSecondRow = [
  Images.DesignSlider9,
  Images.DesignSlider8,
  Images.DesignSlider7,
  Images.DesignSlider6,
  Images.DesignSlider5,
  Images.DesignSlider4,
  Images.DesignSlider3,
  Images.DesignSlider2,
  Images.DesignSlider1,
];

const Portfolio = () => {
  const firstRowImages = academyIcons.map((icon, index) => ({
    src: icon.src,
    alt: `Academy brand ${index + 1}`,
  }));

  const secondRowImages = academyIconsSecondRow.map((icon, index) => ({
    src: icon.src,
    alt: `Academy brand ${index + 1} (second row)`,
  }));

  return (
    <div className={classNames(styles.portfolioSlider)}>
      <SectionHeadingCard
        badge="Portfolio"
        heading="Our Portfolio"
        description="A look back at recent sessions, projects, and design showcases from our community."
        centered={true}
        maxParticles={250}
        section="services"
        backgroundImage={Images.ServiceSectionBg.src}
      />
      <InfiniteSlider
        images={firstRowImages}
        dualRow={true}
        secondRowImages={secondRowImages}
        animationDuration={45}
        imageHeight={280}
        imageWidth={180}
        gap={12}
      />
    </div>
  );
};

export default memo(Portfolio);
