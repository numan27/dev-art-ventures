import { memo, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

interface BrandSliderProps {
  imagesData?: string[];
  brandsHeading?: string;
}

const defaultBrands = [
  "microsoft.svg",
  "cisco.svg",
  "google.svg",
  "fortinet.svg",
  "sophos.svg",
  "aws.svg",
  "cisco-meraki.svg",
  "veeam.svg",
  "ubiquiti.svg",
  "dell.svg",
  "hp.svg",
  "zoho.svg",
  "zoom.svg",
  "anydesk.svg",
  "webex.svg",
  "adobe.svg",
  "slack.svg",
  "juniper.svg",
  "tplink.svg",
  "huawei.svg",
  "parallels.svg",
  "citrix.svg",
  "atlassian.svg",
  "seabox.svg",
];

const BrandSlider = ({
  imagesData = defaultBrands.map((name) => `/brands/${name}`),
  brandsHeading = "Certified Experts | Trusted Technologies We Work With",
}: BrandSliderProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let scrolled = false;
    const onScroll = () => {
      if (!scrolled && sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        scrolled = true;
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={sectionRef} className={classNames(styles.brands__section)}>
      <div className={classNames(styles.brands__sectionContent)}>
        <h4>{brandsHeading}</h4>
        <div data-aos="fade-up" className={classNames(styles.loopSlider)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {/* Render the images once */}
            {imagesData.map((image, index) => (
              <SlideItem image={image} key={`original-${index}`} />
            ))}
            {/* Render the images again for seamless looping */}
            {imagesData.map((image, index) => (
              <SlideItem image={image} key={`duplicate-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SlideItemProps {
  image: string; // SVG path
}

const SlideItem = ({ image }: SlideItemProps) => (
  <div className={classNames(styles.slideItem)}>
    <img
      src={image}
      alt="Brand logo"
      width={100}
      height={50}
      className={styles.brandLogo}
      loading="lazy"
    />
  </div>
);

export default memo(BrandSlider);
