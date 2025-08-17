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
    title: "UI/UX Designers",
    description:
      "Creative designers for intuitive and beautiful user experiences",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    image: Images.UIUXDesigner.src,
  },
  {
    id: 2,
    title: "Web Designers",
    description:
      "Specialists in creating responsive and modern website designs",
    skills: [
      "HTML/CSS",
      "Responsive Design",
      "Adobe Creative Suite",
      "Typography",
      "Layout Design",
    ],
    image: Images.WebDesigner.src,
  },
  {
    id: 3,
    title: "Mobile App Designers",
    description:
      "Experts in designing intuitive mobile app interfaces and experiences",
    skills: [
      "Mobile UI/UX",
      "iOS/Android Guidelines",
      "Prototyping",
      "User Testing",
      "Design Systems",
    ],
    image: Images.MobileAppDesigner.src,
  },
  {
    id: 4,
    title: "Graphic Designers",
    description:
      "Creative professionals for branding, marketing, and visual communication",
    skills: [
      "Adobe Illustrator",
      "Photoshop",
      "InDesign",
      "Branding",
      "Print Design",
    ],
    image: Images.GraphicsDesigner.src,
  },
  {
    id: 5,
    title: "Product Designers",
    description:
      "Strategic designers focused on product strategy and user-centered design",
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
    id: 6,
    title: "Brand Designers",
    description:
      "Creative professionals specializing in brand identity, visual branding, and brand strategy development",
    skills: [
      "Brand Identity",
      "Logo Design",
      "Visual Branding",
      "Brand Guidelines",
      "Typography",
    ],
    image: Images.BrandDesigner.src,
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
          badge="Design Roles"
          heading="Design Roles We Provide"
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
