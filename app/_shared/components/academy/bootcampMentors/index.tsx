"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Alex Martin",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 2,
    name: "Ms. Sarah Johnson",
    description:
      "Building responsive and performant web applications with modern technologies",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 3,
    name: "Mr. David Chen",
    description: "Architecting scalable server-side solutions and robust APIs",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 4,
    name: "Ms. Emily Rodriguez",
    description:
      "Creating data-driven marketing campaigns that drive business growth",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 5,
    name: "Mr. Alex Martin",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 6,
    name: "Mr. Alex Martin",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
    image: Images.AcademyTeam1.src,
  },
];

const BootcampMentors = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Mentors"
          heading="Bootcamp Mentors"
          description="Speaker/Instructor Showcase) Workshop Leaders:"
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
          {teamMembers.map((member) => (
            <div key={member.id} className={classNames(styles.item)}>
              <Image
                width={300}
                height={300}
                src={member.image}
                alt={member.name}
              />
              <div className={classNames(styles.content)}>
                <h4>{member.name}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootcampMentors;
