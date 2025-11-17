import { motion } from "framer-motion";
import {
  Award,
  Building,
  CheckCircle,
  Mail,
  Phone,
  Target,
  Users,
} from "lucide-react";
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const EPCProjectsPage: React.FC = () => {
  const features = [
    "Complete project lifecycle management from design to commissioning",
    "Expert engineering team with 10+ years experience",
    "High-quality procurement from certified suppliers",
    "Professional construction with safety compliance",
    "Comprehensive testing and quality assurance",
    "Post-installation support and maintenance",
    "Government approvals and documentation assistance",
    "Performance monitoring and optimization services",
  ];

  const services = [
    {
      icon: <Building size={32} />,
      title: "Engineering Design",
      description:
        "Comprehensive system design, load analysis, and technical specifications tailored to your requirements.",
    },
    {
      icon: <Users size={32} />,
      title: "Procurement",
      description:
        "Sourcing high-quality components from certified manufacturers with competitive pricing and warranties.",
    },
    {
      icon: <Award size={32} />,
      title: "Construction",
      description:
        "Professional installation with certified technicians following international safety and quality standards.",
    },
    {
      icon: <Target size={32} />,
      title: "Commissioning",
      description:
        "Complete system testing, performance verification, and handover with comprehensive documentation.",
    },
  ];

  const projectTypes = [
    "Commercial Solar Installations (100kW - 10MW)",
    "Industrial Solar Power Plants",
    "Utility-Scale Solar Projects",
    "Government and Municipal Projects",
    "Educational Institution Solar Systems",
    "Healthcare Facility Solar Solutions",
    "Agricultural Solar Pumping Systems",
    "Solar Microgrids and Hybrid Systems",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      description: "Detailed site survey and feasibility analysis",
    },
    {
      step: "02",
      title: "System Design",
      description: "Custom engineering design and technical specifications",
    },
    {
      step: "03",
      title: "Approvals",
      description: "Government permits and regulatory compliance",
    },
    {
      step: "04",
      title: "Procurement",
      description: "Component sourcing and quality verification",
    },
    {
      step: "05",
      title: "Installation",
      description: "Professional construction and system integration",
    },
    {
      step: "06",
      title: "Commissioning",
      description: "Testing, verification, and project handover",
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--primary-600)" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="container-custom section-padding relative z-10 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium mb-6"
              >
                🏗️ Complete Project Solutions
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Solar & AC{" "}
                <span className="text-secondary-300">EPC Projects</span>
              </h1>

              <p className="text-xl mb-8 text-white opacity-90 leading-relaxed max-w-lg">
                End-to-end Engineering, Procurement, and Construction services
                for large-scale solar installations. From concept to
                commissioning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>Get Project Quote</span>
                  <motion.div
                    className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </motion.div>
                </motion.button>
                <motion.a
                  href="tel:+919428110764"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Discuss Project</span>
                  <motion.div
                    className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:bg-primary-600 transition-colors"></div>
                  </motion.div>
                </motion.a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10MW+</div>
                  <div className="text-sm text-white opacity-70">
                    Installed Capacity
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-white opacity-70">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25</div>
                  <div className="text-sm text-white opacity-70">
                    Years Warranty
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Feature Card */}
              <div
                className="rounded-3xl p-8 border-2 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(15px)",
                }}
              >
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-primary-300 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-3 h-3 bg-secondary-300 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "white" }}
                >
                  Complete EPC Services
                </h3>
                <div className="space-y-4">
                  {features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} style={{ color: "white" }} />
                      </div>
                      <span
                        style={{ color: "white" }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="section-padding transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-primary)" }}
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Our EPC Services
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Comprehensive Engineering, Procurement, and Construction services
              for your solar projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow text-center group"
                style={{ backgroundColor: "var(--surface-primary)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <div style={{ color: "var(--primary-600)" }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Our EPC Process
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A systematic approach to deliver successful solar projects on time
              and within budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: "var(--surface-primary)" }}
                >
                  <div
                    className="text-3xl font-bold mb-4"
                    style={{ color: "var(--primary-600)" }}
                  >
                    {process.step}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {process.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {process.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section
        className="section-padding transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-primary)" }}
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Project Types We Handle
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              From small commercial installations to large utility-scale
              projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow group"
                style={{ backgroundColor: "var(--surface-primary)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-500)" }}
                  ></div>
                  <span
                    className="font-medium group-hover:text-primary-600 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="section-padding"
        style={{ backgroundColor: "var(--primary-600)" }}
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Solar EPC Project?
            </h2>
            <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive project proposal and quote for your solar EPC
              requirements. Our experts will handle everything from design to
              commissioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919428110764"
                className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Call +91 94281 10764</span>
              </motion.a>
              <motion.a
                href="mailto:solvioxenergy@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} />
                <span>Email Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EPCProjectsPage;
