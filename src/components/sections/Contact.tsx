import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import {
  submitContactForm,
  type ContactFormData,
} from "../../utils/formSubmission";
import FormModal, { type ModalStatus } from "../ui/FormModal";

const Contact: React.FC = () => {
  const [modal, setModal] = useState<{ open: boolean; status: ModalStatus }>({
    open: false,
    status: "success",
  });

  const closeModal = useCallback(
    () => setModal((m) => ({ ...m, open: false })),
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      await submitContactForm(data);
      reset();
      setModal({ open: true, status: "success" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setModal({ open: true, status: "error" });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: ["+91 94281 10764", "+91 63536 98862"],
      color: "primary",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["solvioxenergy@gmail.com", ""],
      color: "secondary",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Ahmedabad-380001", "Gujarat, India"],
      color: "accent",
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
      color: "primary",
    },
  ];

  const services = [
    "Solar Rooftop",
    "Solar LED & AC Street Light",
    "Solar & AC EPC Projects",
    "Solar & AC High Mast",
    "Consultation",
    "Other",
  ];

  return (
    <>
      <section
        id="contact"
        className="section-padding transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Get in <span className="text-primary-600">Touch</span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Ready to start your solar journey? Contact us today for a free
              consultation and personalized quote for your solar energy needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form-container"
            >
              <div className="contact-form-header">
                <MessageSquare className="contact-form-icon" size={32} />
                <div>
                  <h3 className="contact-form-title">
                    Get Your Free Solar Quote
                  </h3>
                  <p className="contact-form-subtitle">
                    Ready to switch to clean energy? Let's discuss your solar
                    needs.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-section">
                  <h4 className="form-section-title">Personal Information</h4>
                  <div className="form-row">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="form-group"
                    >
                      <label className="form-label">
                        <User size={18} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("name", {
                          required: "Full name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                        className={`form-input-modern ${errors.name ? "error" : ""}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <span className="form-error">
                          {errors.name.message}
                        </span>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="form-group"
                    >
                      <label className="form-label">
                        <Phone size={18} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[+]?[\d\s\-()]+$/,
                            message: "Please enter a valid phone number",
                          },
                        })}
                        className={`form-input-modern ${errors.phone ? "error" : ""}`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <span className="form-error">
                          {errors.phone.message}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="form-section">
                  <h4 className="form-section-title">Contact Information</h4>
                  <div className="form-row">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="form-group"
                    >
                      <label className="form-label">
                        <Mail size={18} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email address is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className={`form-input-modern ${errors.email ? "error" : ""}`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <span className="form-error">
                          {errors.email.message}
                        </span>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="form-group"
                    >
                      <label className="form-label">
                        <Clock size={18} />
                        Service Interested In
                      </label>
                      <select
                        {...register("service")}
                        className={`form-input-modern ${errors.service ? "error" : ""}`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <span className="form-error">
                          {errors.service.message}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="form-section">
                  <h4 className="form-section-title">Project Details</h4>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="form-group full-width"
                  >
                    <label className="form-label">
                      <MessageSquare size={18} />
                      Tell us about your project *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      rows={5}
                      className={`form-input-modern textarea ${errors.message ? "error" : ""}`}
                      placeholder="Describe your solar energy needs, property size, current electricity usage, or any specific requirements..."
                    />
                    {errors.message && (
                      <span className="form-error">
                        {errors.message.message}
                      </span>
                    )}
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`form-submit-btn ${isSubmitting ? "loading" : ""}`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Send size={20} />
                  <span>
                    {isSubmitting
                      ? "Sending Your Message..."
                      : "Get Free Solar Quote"}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Contact Information
                </h3>
                <p
                  className="mb-8 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  We're here to help you make the switch to clean, renewable
                  energy. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl p-6 card-shadow transition-colors duration-300"
                    style={{ backgroundColor: "var(--surface-primary)" }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="p-3 rounded-lg w-fit h-fit flex items-center justify-center"
                        style={{
                          backgroundColor: `var(--${info.color}-100)`,
                          color: `var(--${info.color}-600)`,
                        }}
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h4
                          className="text-lg font-semibold mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => {
                          if (!detail) return null;
                          // Make phone numbers clickable
                          if (info.title === "Phone Numbers") {
                            const phoneNumber = detail.trim();
                            const telLink = phoneNumber.replace(/\s+/g, "");
                            return (
                              <a
                                key={detailIndex}
                                href={`tel:${telLink}`}
                                style={{ color: "var(--text-secondary)" }}
                                className="block hover:text-primary-600 transition-colors duration-300"
                              >
                                {detail}
                              </a>
                            );
                          }
                          // Make email clickable
                          if (
                            info.title === "Email Address" &&
                            detail.includes("@")
                          ) {
                            return (
                              <a
                                key={detailIndex}
                                href={`mailto:${detail}`}
                                style={{ color: "var(--text-secondary)" }}
                                className="block hover:text-primary-600 transition-colors duration-300"
                              >
                                {detail}
                              </a>
                            );
                          }
                          // Regular text for other details
                          return (
                            <p
                              key={detailIndex}
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {detail}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 text-white text-center"
                style={{ backgroundColor: "var(--primary-600)" }}
              >
                <h4 className="text-xl font-bold mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="mb-4 opacity-90">
                  Call us directly for urgent inquiries or immediate support.
                </p>
                <motion.a
                  href="tel:+919428110764"
                  className="inline-flex items-center space-x-2 font-semibold py-3 px-6 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "var(--surface-primary)",
                    color: "var(--primary-600)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--bg-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--surface-primary)";
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  <span>+91 94281 10764</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success / Error modal – full-screen overlay */}
      <FormModal
        isOpen={modal.open}
        status={modal.status}
        onClose={closeModal}
      />
    </>
  );
};

export default Contact;
