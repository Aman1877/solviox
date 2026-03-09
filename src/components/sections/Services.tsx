import { motion } from "framer-motion";
import { Building, Sun } from "lucide-react";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Sun size={40} />,
      title: "Solar Solutions",
      description:
        "Complete solar energy solutions including rooftop systems, street lighting, and high-mast installations for residential, commercial, and industrial applications.",
      features: [
        "Solar Rooftop Installation",
        "Solar Street Lights",
        "Solar High Mast Systems",
        "25+ Years Panel Warranty",
        "Net Metering Support",
        "Maintenance & Support",
      ],
      color: "primary",
    },
    {
      icon: <Building size={40} />,
      title: "AC Electrical Solutions",
      description:
        "Comprehensive AC electrical infrastructure services including EPC projects, street lighting, and high-mast systems for large-scale developments.",
      features: [
        "AC EPC Projects",
        "AC Street Lighting",
        "AC High Mast Systems",
        "Project Management",
        "Quality Assurance",
        "Post-Installation Support",
      ],
      color: "secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#111827" }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0ea5e9, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4b5563" }}>
            Comprehensive solar energy solutions tailored to meet your specific
            needs. From residential rooftops to large-scale commercial projects.
          </p>

          {/* Decorative Solar Panel */}
          <motion.div
            className="flex justify-center mt-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* <SolarPanelIcon className="opacity-20" width={80} height={80} /> */}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          style={{
            display: "grid",
            gridTemplateRows: "repeat(1, 1fr)",
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="rounded-xl p-6 md:p-8 group cursor-pointer transition-all duration-300"
              style={{
                background:
                  "linear-gradient(145deg, #dbeafe 0%, #93c5fd 52%, #60a5fa 100%)",
                border: "1px solid #60a5fa",
                borderTop: `4px solid ${index === 0 ? "#10b981" : "#f59e0b"}`,
                boxShadow: "0 12px 28px rgba(30, 64, 175, 0.2)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Content section  */}
              <div>
                {/* Icon */}
                <motion.div
                  className="inline-flex p-3 md:p-4 rounded-lg mb-4 md:mb-6 transition-colors"
                  style={{
                    color: index === 0 ? "#34d399" : "#f59e0b",
                    backgroundColor:
                      index === 0
                        ? "rgba(52,211,153,0.15)"
                        : "rgba(245,158,11,0.15)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3
                  className="text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors"
                  style={{ color: "#111827" }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
                  style={{ color: "#374151" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + featureIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm"
                      style={{ color: "#374151" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{
                          backgroundColor: index === 0 ? "#34d399" : "#f59e0b",
                        }}
                      ></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Button section - Learn More button removed */}
              {/* <div>
                <motion.button
                  className="btn btn-outline mt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Navigate to specific service detail pages
                    switch (service.title) {
                      case 'Solar Rooftop':
                        navigateTo('/solar-rooftop');
                        break;
                      case 'Solar LED & AC Street Light':
                        navigateTo('/solar-street-light');
                        break;
                      case 'Solar & AC EPC Projects':
                        navigateTo('/epc-projects');
                        break;
                      case 'Solar & AC High Mast':
                        navigateTo('/high-mast');
                        break;
                      default: {
                        // Fallback to contact form
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });

                          // Pre-select the service in the contact form
                          setTimeout(() => {
                            const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
                            if (serviceSelect) {
                              serviceSelect.value = service.title;
                              // Trigger change event to update form state
                              const event = new Event('change', { bubbles: true });
                              serviceSelect.dispatchEvent(event);
                            }
                          }, 500);
                        }
                        break;
                      }
                    }
                  }}
                >
                  Learn More
                </motion.button>
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div
            style={{
              background: "linear-gradient(135deg, #374151 0%, #1f2937 100%)",
            }}
            className="rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Solar?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and customized quote for your solar energy
              needs.
            </p>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
