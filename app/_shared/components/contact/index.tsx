"use client";

import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ServiceBanner from "../services/ServiceBanner";
import CustomButton from "components/common/customButton";
import { Images } from "assets";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import dynamic from "next/dynamic";
import { routeConstant } from "_shared/routes/constants";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const LOCATIONS = [
  {
    name: "Vienna Office",
    address: "Mariahilfer Straße 123, 1060 Vienna, Austria",
    phone: "+43 1 234 5678",
    email: "vienna@coreitventures.com",
    lat: 48.2082,
    lng: 16.3738,
  },
  {
    name: "Budapest Office",
    address: "Andrássy út 45, 1061 Budapest, Hungary",
    phone: "+36 1 234 5678",
    email: "budapest@coreitventures.com",
    lat: 47.4979,
    lng: 19.0402,
  },
  {
    name: "Berlin Office",
    address: "Unter den Linden 77, 10117 Berlin, Germany",
    phone: "+49 30 1234 5678",
    email: "berlin@coreitventures.com",
    lat: 52.52,
    lng: 13.405,
  },
];

const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

const ContactSchema = Yup.object().shape({
  reason: Yup.string().required("Please select a reason"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  service: Yup.string(),
  message: Yup.string().required("Message is required"),
  wantsNDA: Yup.boolean(),
  callASAP: Yup.boolean(),
});

export default function ContactContent() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const serviceOptions = [
    routeConstant.services.managedIT,
    routeConstant.services.itSupport,
    routeConstant.services.itBusinessConsulting,
    routeConstant.services.cyberSecurity,
    routeConstant.services.networkInfrastructure,
    routeConstant.services.dataCenter,
    routeConstant.services.webDevelopment,
    routeConstant.services.creative,
    routeConstant.services.seoDigitalMarketing,
  ];

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [formMessage, setFormMessage] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <div className={styles.pageWrapper}>
      {/* Service Banner */}
      <ServiceBanner
        image={Images.ContactBg}
        title="Contact Us"
        subtitle="We're here to help you build something amazing. Get in touch with our team!"
        badge="Contact"
        buttonText="Let's Talk"
        showReasonButtons={true}
        selectedReason={selectedReason}
        onReasonSelect={setSelectedReason}
      />
      {/* Main Heading */}
      <div className="xl:pt-16 lg:pt-12 pt-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Build Something Amazing Together"
          align="center"
          className={styles.heroHeading}
        />
      </div>
      {/* Contact Form - modern look */}
      <section className={styles.formSection}>
        <div className={styles.customContainer}>
          <div className={styles.formContent}>
            <div
              className={classNames(
                styles.formInfo,
                "flex flex-col justify-center h-full"
              )}
            >
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible. We're excited to learn about your project and how we
                can help you succeed.
              </p>
              <div className="flex flex-col justify-start">
                {/* Info Box Below Form */}
                <div className={styles.infoBox}>
                  <strong>Prefer a direct chat?</strong> Reach out to us on
                  social media or email and our team will respond promptly.
                </div>
                {/* Social Icons */}
                <div
                  className={styles.socialContent}
                  style={{
                    // marginTop: 24,
                    display: "flex",
                    gap: 16,
                    //   justifyContent: "center",
                  }}
                >
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialItem}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.formContainer}>
              <Formik
                initialValues={{
                  reason: selectedReason,
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  service: "",
                  message: "",
                  wantsNDA: false,
                  callASAP: false,
                }}
                validationSchema={ContactSchema}
                enableReinitialize={true}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setFormStatus("idle");
                  setFormMessage("");
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(values),
                    });
                    if (res.ok) {
                      setFormStatus("success");
                      setFormMessage("Your message has been sent!");
                      resetForm();
                      setSelectedReason("");
                    } else {
                      const data = await res.json();
                      setFormStatus("error");
                      setFormMessage(data.error || "Failed to send message.");
                    }
                  } catch (err) {
                    setFormStatus("error");
                    setFormMessage("Failed to send message.");
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting, values, setFieldValue }) => (
                  <Form className={styles.contactForm}>
                    {/* Hidden reason field that gets updated from ServiceBanner */}
                    <Field type="hidden" name="reason" value={selectedReason} />
                    <ErrorMessage
                      name="reason"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                    <div className={(styles.formRow, "mt-4")}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name *</label>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name *</label>
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service Interest</label>
                      <Field
                        as="select"
                        id="service"
                        name="service"
                        className={styles.serviceSelect}
                      >
                        <option className={styles.defaultSelect} value="">
                          Select a service
                        </option>
                        {serviceOptions.map((service) => (
                          <option key={service.path} value={service.path}>
                            {service.title}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage
                        name="service"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message *</label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project or question..."
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    {/* Checkboxes row */}
                    <div className={styles.checkboxRow}>
                      <label
                        className={classNames(
                          styles.checkboxLabel,
                          "flex items-center gap-2"
                        )}
                      >
                        <Field
                          type="checkbox"
                          name="wantsNDA"
                          checked={values.wantsNDA}
                          onChange={() =>
                            setFieldValue("wantsNDA", !values.wantsNDA)
                          }
                        />
                        I&apos;d like to sign an NDA
                        <a
                          href="/NDA.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            marginLeft: 6,
                            fontWeight: 400,
                            fontSize: "0.95em",
                            textDecoration: "underline",
                            color: "#18417E",
                            cursor: "pointer",
                          }}
                        >
                          View NDA
                        </a>
                      </label>
                      <label
                        className={classNames(
                          styles.checkboxLabel,
                          "flex items-center gap-2"
                        )}
                      >
                        <Field
                          type="checkbox"
                          name="callASAP"
                          checked={values.callASAP}
                          onChange={() =>
                            setFieldValue("callASAP", !values.callASAP)
                          }
                        />
                        Call me ASAP
                      </label>
                    </div>
                    <div style={{ marginTop: 24 }}>
                      <CustomButton
                        title={isSubmitting ? "Sending..." : "Submit"}
                        disabled={isSubmitting}
                      />
                    </div>
                    {formStatus === "success" && (
                      <div style={{ color: "green", marginTop: 12 }}>
                        {formMessage}
                      </div>
                    )}
                    {formStatus === "error" && (
                      <div style={{ color: "red", marginTop: 12 }}>
                        {formMessage}
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mapSection} style={{ padding: 0 }}>
        <div style={{ width: "100%", maxWidth: "100%", margin: 0 }}>
          <ContactMap />
        </div>
      </section>
      {/* Modern Location Grid */}
      <section className={styles.contactMethodsSection}>
        <div className={styles.customContainer}>
          <div className={styles.contactMethodsGridModern}>
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className={styles.contactMethodCardModern}>
                <div className={styles.methodIconModern}>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="11.5"
                      cy="10.0833"
                      rx="2.75"
                      ry="2.75"
                      stroke="#18417E"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19.75 9.9814C19.75 14.4815 14.5937 20.1666 11.5 20.1666C8.40625 20.1666 3.25 14.4815 3.25 9.9814C3.25 5.4813 6.94365 1.83325 11.5 1.83325C16.0563 1.83325 19.75 5.4813 19.75 9.9814Z"
                      stroke="#b2aeae"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className={styles.locationName}>{loc.name}</div>
                <div className={styles.locationCity}>
                  {loc.address.split(",")[2]?.trim() || loc.address}
                </div>
                <div className={styles.locationDetails}>
                  <div className={styles.locationDetailRow}>
                    <Phone size={16} /> <span>{loc.phone}</span>
                  </div>
                  <div className={styles.locationDetailRow}>
                    <Mail size={16} /> <span>{loc.email}</span>
                  </div>
                  <div className={styles.locationDetailRow}>
                    <span>{loc.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
