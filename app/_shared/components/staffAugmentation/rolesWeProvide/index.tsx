"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import Image from "next/image";
import CustomBadge from "components/common/customBadge";

const rolesData = [
  {
    id: 1,
    title: "UI/UX Designer",
    description:
      "Creates intuitive, user-centered interfaces and experiences for web and mobile apps. Proficient in Figma, user flows, and prototyping.",
    skills: [
      "Figma",
      "User Flows",
      "Prototyping",
      "User Research",
      "Interface Design",
    ],
    image: Images.UIUXDesigner.src,
  },
  {
    id: 2,
    title: "Product Designer",
    description:
      "Focuses on the entire product lifecycle, from strategy and research to execution and iteration.",
    skills: [
      "Product Strategy",
      "User Research",
      "Wireframing",
      "Design Thinking",
      "User Journey Mapping",
    ],
    image: Images.ProductDesigner.src,
  },
  {
    id: 3,
    title: "Graphic Designer",
    description:
      "Develops compelling visual assets for branding, marketing, and sales collateral.",
    skills: [
      "Adobe Illustrator",
      "Photoshop",
      "InDesign",
      "Branding",
      "Visual Design",
    ],
    image: Images.GraphicsDesigner.src,
  },
  {
    id: 4,
    title: "Motion Graphics Designer",
    description:
      "Brings interfaces and brands to life with engaging animation and video.",
    skills: [
      "After Effects",
      "Animation",
      "Video Editing",
      "Motion Design",
      "Visual Effects",
    ],
    image: Images.GraphicsDesigner.src,
  },
  {
    id: 5,
    title: "LOGO Designer",
    description:
      "Specializes in creating distinctive and memorable brand identities through logo design and visual branding.",
    skills: [
      "Logo Design",
      "Brand Identity",
      "Typography",
      "Visual Branding",
      "Creative Design",
    ],
    image: Images.BrandDesigner.src,
  },
  {
    id: 6,
    title: "Mobile App Designer",
    description:
      "Expert in designing intuitive and engaging mobile app interfaces and user experiences.",
    skills: [
      "Mobile UI/UX",
      "iOS/Android Guidelines",
      "App Prototyping",
      "User Testing",
      "Mobile Design Systems",
    ],
    image: Images.MobileAppDesigner.src,
  },
];

const RolesWeProvide = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="Designer Roles"
          heading="Designer Roles We Provide"
          description="Access pre-vetted design professionals across all major creative disciplines"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.rolesContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          )}
        >
          {rolesData.map((role) => (
            <div key={role.id} className={classNames(styles.roleCard)}>
              <div className={classNames(styles.imageContainer)}>
                <Image
                  width={200}
                  height={200}
                  src={role.image}
                  alt={role.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className={classNames(styles.content)}>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {role.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3">{role.description}</p>
                <div className="flex flex-wrap gap-1">
                  {role.skills.slice(0, 3).map((skill, index) => (
                    <CustomBadge key={index} title={skill} height={28} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesWeProvide;
