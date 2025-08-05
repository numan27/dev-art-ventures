import { memo } from "react";
import { Images } from "assets";
import InfiniteSlider from "components/common/infiniteSlider";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";

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

const PreviousWorkshops = () => {
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
      <CustomSectionHeading
        heading="Previous Workshops"
        description="See why we stand out with superior service, innovation, and client satisfaction benchmarks."
        centered={true}
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

export default memo(PreviousWorkshops);
