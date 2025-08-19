"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomInput from "components/common/customInput";
import CustomDropdown from "components/common/customDropdown";
import CustomTextArea from "components/common/customTextArea";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactFormVS } from "utils/validation";
import axios from "axios";
import { Images } from "assets";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const projectTypeOptions = [
    {
      title: "Web Development",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "Mobile Development",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "UI/UX Design",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "Branding",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "Digital Marketing",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "Consulting",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
    {
      title: "Other",
      action: (value: string) => {
        // This will be handled by the CustomDropdown's onChange
      },
    },
  ];

  const initialValues = {
    fullname: "",
    email: "",
    phoneNumber: "",
    projectType: "",
    message: "",
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await axios.post("/api/submit-form", {
        formType: "contact",
        formData: {
          fullName: values.fullname,
          email: values.email,
          phone: values.phoneNumber,
          projectType: values.projectType,
          message: values.message,
        },
      });

      if (response.status === 200) {
        setSubmitMessage({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        resetForm();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitMessage({
        type: "error",
        message:
          error.response?.data?.error ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className={classNames(styles.sectionWrapper)} id="contact-form">
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Get In Touch"
          heading={<>Contact Us</>}
          description="Have a project in mind? Let's discuss how we can help bring your vision to life."
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.TestimonialsSectionBg.src}
        />

        <div className={classNames(styles.formContainer)}>
          <Formik
            initialValues={initialValues}
            validationSchema={ContactFormVS}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => {
              // Create options with proper action functions that update Formik
              const projectTypeOptionsWithActions = projectTypeOptions.map(
                (option) => ({
                  ...option,
                  action: (value: string) => {
                    setFieldValue("projectType", option.title);
                    // Trigger onBlur to mark field as touched for validation
                    handleBlur({ target: { name: "projectType" } } as any);
                  },
                })
              );

              return (
                <Form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <CustomInput
                        label="Full Name"
                        placeholder="Enter your full name"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.fullname && touched.fullname
                            ? errors.fullname
                            : ""
                        }
                        required
                      />
                    </div>

                    <div>
                      <CustomInput
                        label="Email"
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.email && touched.email ? errors.email : ""
                        }
                        required
                      />
                    </div>

                    <div>
                      <CustomInput
                        label="Phone"
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.phoneNumber && touched.phoneNumber
                            ? errors.phoneNumber
                            : ""
                        }
                        required
                      />
                    </div>

                    <div>
                      <CustomDropdown
                        label="Project Type"
                        placeholder="Select project type..."
                        options={projectTypeOptionsWithActions}
                        value={
                          values.projectType
                            ? projectTypeOptions.find(
                                (opt) => opt.title === values.projectType
                              )?.title || values.projectType
                            : ""
                        }
                        error={
                          errors.projectType && touched.projectType
                            ? errors.projectType
                            : ""
                        }
                        required
                        wrapInGlobalWrapper={false}
                        isLanguageDropdown={true}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <CustomTextArea
                      label="Message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, requirements, and any specific needs..."
                      value={values.message || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.message && touched.message ? errors.message : ""
                      }
                      required
                    />
                  </div>

                  {submitMessage && (
                    <div
                      className={`mb-4 p-4 rounded-lg ${
                        submitMessage.type === "success"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitMessage.message}
                    </div>
                  )}

                  <CustomButton
                    title={isSubmitting ? "Sending..." : "Send Message"}
                    type="submit"
                    disabled={isSubmitting}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
