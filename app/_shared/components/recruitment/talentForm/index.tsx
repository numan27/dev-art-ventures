"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomInput from "components/common/customInput";
import CustomDropdown from "components/common/customDropdown";
import { useState } from "react";

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: "Jane Smith",
    profession: "Framer Developer",
    yearsOfExperience: "",
    email: "jane@framer.com",
    employmentType: "",
    cvPortfolio: "https://",
  });

  const [agreementChecked, setAgreementChecked] = useState(false);

  const employmentTypeOptions = [
    {
      title: "Full-time",
      action: () => setFormData({ ...formData, employmentType: "Full-time" }),
    },
    {
      title: "Part-time",
      action: () => setFormData({ ...formData, employmentType: "Part-time" }),
    },
    {
      title: "Contract",
      action: () => setFormData({ ...formData, employmentType: "Contract" }),
    },
    {
      title: "Freelance",
      action: () => setFormData({ ...formData, employmentType: "Freelance" }),
    },
    {
      title: "Internship",
      action: () => setFormData({ ...formData, employmentType: "Internship" }),
    },
  ];

  const handleInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: (e.target as HTMLInputElement).value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="join DevArt"
          heading={
            <>
              Get discovered by <br /> top tech employers
            </>
          }
          description="Join our network and let companies find you for remote tech roles. Share your profile to get noticed."
          centered={true}
          maxParticles={200}
          section="services"
          // backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={classNames(styles.formContainer)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <CustomInput
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e)}
            />
            <CustomInput
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e)}
            />
            <CustomInput
              label="Profession"
              placeholder="Enter your profession"
              value={formData.profession}
              onChange={(e) => handleInputChange("profession", e)}
            />
            <CustomDropdown
              label="Employment Type"
              placeholder="Select..."
              value={formData.employmentType}
              options={employmentTypeOptions}
              wrapInGlobalWrapper={false}
            />
            <CustomInput
              label="Years of experience"
              placeholder="Write a number"
              type="number"
              isNumber={true}
              value={formData.yearsOfExperience}
              onChange={(e) => handleInputChange("yearsOfExperience", e)}
            />
            <CustomInput
              label="CV / Portfolio"
              placeholder="Enter your portfolio URL"
              value={formData.cvPortfolio}
              onChange={(e) => handleInputChange("cvPortfolio", e)}
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreementChecked}
                onChange={(e) => setAgreementChecked(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700">
                By submitting, you agree to share your email for jobs and
                marketing
              </span>
            </label>
          </div>

          <div className="flex justify-center mt-3">
            <CustomButton
              title="Submit"
              onClick={handleSubmit}
              containerStyle="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentForm;
