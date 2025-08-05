import { memo } from "react";
import { Images } from "assets";
import InfiniteSlider from "components/common/infiniteSlider";

const developmentIcons = [
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

const DevelopmentPortfolioSlider = () => {
  const images = developmentIcons.map((icon, index) => ({
    src: icon.src,
    alt: `Development brand ${index + 1}`,
  }));

  return <InfiniteSlider images={images} />;
};

export default memo(DevelopmentPortfolioSlider);
