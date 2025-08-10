import { memo } from "react";
import { Images } from "assets";
import InfiniteSlider from "components/common/infiniteSlider";
import SectionHeadingCard from "components/common/sectionHeadingCard";

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

  return (
    <div className="w-full">
      <SectionHeadingCard
        heading="Our Portfolio"
        description="We have worked with some of the best brands in the world"
        badge="Our Portfolio"
        centered={true}
        maxParticles={150}
        section="testimonials"
      />
      <div className="w-full">
        <InfiniteSlider images={images} />
      </div>
    </div>
  );
};

export default memo(DevelopmentPortfolioSlider);
