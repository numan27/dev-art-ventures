import { memo } from "react";
import { Images } from "assets";
import InfiniteSlider from "components/common/infiniteSlider";

const developmentIcons = [
  Images.DevPortfolio1,
  Images.DevPortfolio2,
  Images.DevPortfolio3,
  Images.DevPortfolio4,
  Images.DevPortfolio5,
  Images.DevPortfolio6,
  Images.DevPortfolio7,
  Images.DevPortfolio8,
  Images.DevPortfolio9,
  Images.DevPortfolio10,
];

const DevelopmentPortfolioSlider = () => {
  const images = developmentIcons.map((icon, index) => ({
    src: icon.src,
    alt: `Development brand ${index + 1}`,
  }));

  return (
    <div className="w-full">
      <div className="w-full">
        <InfiniteSlider images={images} />
      </div>
    </div>
  );
};

export default memo(DevelopmentPortfolioSlider);
