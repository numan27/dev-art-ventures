"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import Image from "next/image";

const talentData = [
  {
    id: 1,
    title: "Frontend Developers",
    rating: "4.9/5",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 2,
    title: "Backend Developers",
    rating: "4.9/5",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 3,
    title: "UI/UX Designers",
    rating: "4.9/5",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 4,
    title: "DevOps Engineers",
    rating: "4.9/5",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 5,
    title: "Full-Stack Developers",
    rating: "4.9/5",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 6,
    title: "QA Engineers",
    rating: "4.9/5",
    image: Images.AcademyTeam2.src,
  },
];

const StarRating = ({ rating }: { rating: string }) => {
  const stars = Array(5).fill(null);

  return (
    <div className="flex items-center gap-1">
      {stars.map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-white text-sm ml-2">
        {rating} Average Client Rating
      </span>
    </div>
  );
};

const Talent = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="our talents"
          heading="Available Roles"
          description="Access pre-vetted tech professionals ready to join your team immediately"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.servicesContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          )}
        >
          {talentData.map((talent) => (
            <div key={talent.id} className={classNames(styles.item)}>
              <Image
                width={300}
                height={300}
                src={talent.image}
                alt={talent.title}
                className="rounded-lg"
              />
              <div className={classNames(styles.content)}>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {talent.title}
                </h4>
                <StarRating rating={talent.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talent;
