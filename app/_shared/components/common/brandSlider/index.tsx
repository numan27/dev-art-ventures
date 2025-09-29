import { memo, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const socialIcons = [
  // "/brands/adobe-xs.png",
  // "/brands/aws.svg",
  // "/brands/figma.png",
  // "/brands/zoom.svg",
  // "/brands/google.svg",
  // "/brands/framer.png",
  // "/tools/next.png",
  // "/tools/nest.png",
  // "/tools/angular.png",
  // "/tools/react.png",
  // "/tools/typescript.png",
  // "/tools/mongo-db.png",
  // "/tools/wordpress.png",
  // "/tools/vs-code.png",
  // "/tools/git.png",
  // "/tools/git-hub.png",
  // "/tools/vite.png",
  // "/tools/vercel.png",
  // "/tools/tailwind.png",
  // "/tools/css.png",
  // "/tools/git-lab.png",
  // "/tools/html.png",
  // "/tools/jira.png",
  // "/tools/nuxt.png",
  // "/brands/cisco.svg",
  // "/tools/php.png",
  // "/tools/svelte.png",
  "/brands/cridio-studio.png",
  "/brands/core-it-ventures.png",
  "/brands/ace-homes.png",
  "/brands/code-ninjas.png",
  "/brands/92-startups.png",
  "/brands/zemotify.png",
  "/brands/logo-3.png",
  "/brands/ecomrades.png",
  "/brands/wp-vendor.png",
  "/brands/2b_visiontechnologies_logo.png",
];

const BrandSlider = () => {
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
        <div data-aos="fade-up" className={classNames(styles.loopSlider)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {/* Render the images once */}
            {socialIcons.map((image, index) => (
              <SlideItem image={image} key={`original-${index}`} />
            ))}
            {/* Render the images again for seamless looping */}
            {socialIcons.map((image, index) => (
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
