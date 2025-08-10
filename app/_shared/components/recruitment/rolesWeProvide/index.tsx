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
    title: "Frontend Developers",
    description: "React, Vue, Angular specialists for modern web applications",
    skills: ["React", "Vue", "Angular", "TypeScript", "Next.js"],
    experience: "3-8 years",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 2,
    title: "Backend Developers",
    description:
      "Node.js, Python, Java experts for robust server-side solutions",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
    experience: "3-8 years",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 3,
    title: "Full-Stack Developers",
    description: "End-to-end development specialists for complete solutions",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    experience: "4-10 years",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 4,
    title: "UI/UX Designers",
    description:
      "Creative designers for intuitive and beautiful user experiences",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    experience: "2-6 years",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 5,
    title: "DevOps Engineers",
    description:
      "Infrastructure and deployment specialists for scalable systems",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    experience: "3-7 years",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 6,
    title: "QA Engineers",
    description: "Quality assurance experts for robust testing and automation",
    skills: [
      "Selenium",
      "Jest",
      "Cypress",
      "API Testing",
      "Performance Testing",
    ],
    experience: "2-6 years",
    image: Images.AcademyTeam2.src,
  },
  {
    id: 7,
    title: "Mobile Developers",
    description:
      "iOS and Android specialists for native and cross-platform apps",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    experience: "3-7 years",
    image: Images.AcademyTeam1.src,
  },
  {
    id: 8,
    title: "Data Engineers",
    description:
      "Data pipeline and analytics specialists for insights-driven solutions",
    skills: ["Python", "SQL", "Apache Spark", "Airflow", "BigQuery"],
    experience: "3-8 years",
    image: Images.AcademyTeam2.src,
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
          badge="Our Roles"
          heading="Roles We Provide"
          description="Access pre-vetted tech professionals across all major development disciplines"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.rolesContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <div className="mb-3">
                  <span className="text-blue-400 text-xs font-medium">
                    Experience: {role.experience}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {role.skills.slice(0, 3).map((skill, index) => (
                    <CustomBadge key={index} title={skill} />
                  ))}
                  {role.skills.length > 3 && (
                    <span className="text-gray-400 text-xs">
                      +{role.skills.length - 3} more
                    </span>
                  )}
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
