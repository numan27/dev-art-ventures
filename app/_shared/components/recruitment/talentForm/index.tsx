"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomInput from "components/common/customInput";
import CustomDropdown from "components/common/customDropdown";
import CustomTextArea from "components/common/customTextArea";
import { useState } from "react";

const TalentForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    teamSize: "",
    duration: "",
    skills: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [agreementChecked, setAgreementChecked] = useState(false);

  const projectTypeOptions = [
    {
      title: "Web Development",
      action: () =>
        setFormData({ ...formData, projectType: "Web Development" }),
    },
    {
      title: "Mobile Development",
      action: () =>
        setFormData({ ...formData, projectType: "Mobile Development" }),
    },
    {
      title: "UI/UX Design",
      action: () => setFormData({ ...formData, projectType: "UI/UX Design" }),
    },
    {
      title: "DevOps & Infrastructure",
      action: () =>
        setFormData({ ...formData, projectType: "DevOps & Infrastructure" }),
    },
    {
      title: "QA & Testing",
      action: () => setFormData({ ...formData, projectType: "QA & Testing" }),
    },
    {
      title: "Full-Stack Development",
      action: () =>
        setFormData({ ...formData, projectType: "Full-Stack Development" }),
    },
  ];

  const teamSizeOptions = [
    {
      title: "1-2 developers",
      action: () => setFormData({ ...formData, teamSize: "1-2 developers" }),
    },
    {
      title: "3-5 developers",
      action: () => setFormData({ ...formData, teamSize: "3-5 developers" }),
    },
    {
      title: "6-10 developers",
      action: () => setFormData({ ...formData, teamSize: "6-10 developers" }),
    },
    {
      title: "10+ developers",
      action: () => setFormData({ ...formData, teamSize: "10+ developers" }),
    },
  ];

  const durationOptions = [
    {
      title: "1-3 months",
      action: () => setFormData({ ...formData, duration: "1-3 months" }),
    },
    {
      title: "3-6 months",
      action: () => setFormData({ ...formData, duration: "3-6 months" }),
    },
    {
      title: "6-12 months",
      action: () => setFormData({ ...formData, duration: "6-12 months" }),
    },
    {
      title: "12+ months",
      action: () => setFormData({ ...formData, duration: "12+ months" }),
    },
  ];

  const timelineOptions = [
    {
      title: "Immediate (1-2 weeks)",
      action: () =>
        setFormData({ ...formData, timeline: "Immediate (1-2 weeks)" }),
    },
    {
      title: "Soon (2-4 weeks)",
      action: () => setFormData({ ...formData, timeline: "Soon (2-4 weeks)" }),
    },
    {
      title: "Flexible (1-2 months)",
      action: () =>
        setFormData({ ...formData, timeline: "Flexible (1-2 months)" }),
    },
  ];

  const handleInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: (e.target as HTMLInputElement).value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Staff augmentation request submitted:", formData);
  };

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Get Started"
          heading={
            <>
              Request Staff <br /> Augmentation
            </>
          }
          description="Tell us about your project needs and we'll match you with the right professionals to scale your team."
          centered={true}
          maxParticles={200}
          section="services"
          // backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={classNames(styles.formContainer)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <CustomInput
              label="Company Name"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e)}
            />
            <CustomInput
              label="Contact Name"
              placeholder="Enter your name"
              value={formData.contactName}
              onChange={(e) => handleInputChange("contactName", e)}
            />
            <CustomInput
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e)}
            />
            <CustomInput
              label="Phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e)}
            />
            <CustomDropdown
              label="Project Type"
              placeholder="Select project type..."
              value={formData.projectType}
              options={projectTypeOptions}
              wrapInGlobalWrapper={false}
            />
            <CustomDropdown
              label="Team Size Needed"
              placeholder="Select team size..."
              value={formData.teamSize}
              options={teamSizeOptions}
              wrapInGlobalWrapper={false}
            />
            <CustomDropdown
              label="Project Duration"
              placeholder="Select duration..."
              value={formData.duration}
              options={durationOptions}
              wrapInGlobalWrapper={false}
            />
            <CustomDropdown
              label="Timeline to Start"
              placeholder="Select timeline..."
              value={formData.timeline}
              options={timelineOptions}
              wrapInGlobalWrapper={false}
            />
            <CustomInput
              label="Required Skills"
              placeholder="e.g., React, Node.js, AWS"
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e)}
            />
            <CustomInput
              label="Budget Range"
              placeholder="e.g., $50k-100k"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e)}
            />
          </div>

          <div className="mb-6">
            <CustomTextArea
              label="Project Description"
              placeholder="Describe your project requirements, goals, and any specific needs..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e)}
            />
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="agreement"
              checked={agreementChecked}
              onChange={(e) => setAgreementChecked(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="agreement"
              className="text-sm text-gray-300 cursor-pointer"
            >
              I agree to the terms and conditions
            </label>
          </div>

          <CustomButton
            title="Submit Request"
            onClick={handleSubmit}
            disabled={!agreementChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentForm;
