import React from "react";
import { motion } from "framer-motion";

const SubsidyScheme: React.FC = () => {
  const subsidyTiers = [
    {
      id: 1,
      topText: "to",
      amount: "₹ 60,000",
      capacity: "1-2 kW",
    },
    {
      id: 2,
      topText: "to",
      amount: "₹ 78,000",
      capacity: "2-3 kW",
    },
    {
      id: 3,
      topText: "₹ 78,000",
      amount: "",
      capacity: "above 3 kW",
    },
  ];

  return (
    <section
      id="subsidy"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          {/* Decorative brackets */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div
              className="w-8 sm:w-12 h-0.5"
              style={{
                backgroundColor: "var(--secondary-500)",
                transform: "rotate(45deg)",
                transformOrigin: "left",
              }}
            ></div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mx-2 sm:mx-4"
              style={{ color: "var(--text-primary)" }}
            >
              SUBSIDY SCHEME
            </h2>
            <div
              className="w-8 sm:w-12 h-0.5"
              style={{
                backgroundColor: "var(--secondary-500)",
                transform: "rotate(-45deg)",
                transformOrigin: "right",
              }}
            ></div>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Looking for a way to reduce your electricity bills and contribute to
            a greener environment? Consider the PM Surya Ghar Muft Bijli Yojana
            (Solar Subsidy Scheme) in India! This innovative program provides
            subsidies to individuals and residential communities who install
            solar panels on their rooftops. If you're searching for a trusted
            Solar Rooftop System Provider in Ahmedabad, now is the perfect time
            to take advantage of this opportunity and make the switch to clean
            energy.
          </p>
        </motion.div>

        {/* Subsidy Tiers - Modern Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          {subsidyTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              <div
                className="rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)`,
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
                }}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12"></div>
                </div>

                <div className="relative z-10">
                  {tier.topText && tier.topText !== tier.amount && (
                    <div className="text-base sm:text-lg md:text-xl text-white/90 mb-1.5 sm:mb-2 font-medium">
                      {tier.topText}
                    </div>
                  )}

                  {tier.amount && (
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                      {tier.amount}
                    </div>
                  )}

                  {!tier.amount && tier.topText && (
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                      {tier.topText}
                    </div>
                  )}

                  <div className="inline-block text-white/95 font-semibold text-xs sm:text-sm md:text-base">
                    {tier.capacity}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            By participating in the PM Surya Ghar Muft Bijli Yojana, you not
            only save money on your electricity bills but also contribute to a
            cleaner and more sustainable environment.
          </p>

          <motion.button
            className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const header = document.querySelector("header");
              const headerHeight = header
                ? header.getBoundingClientRect().height
                : 0;
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const elementTop =
                  contactSection.getBoundingClientRect().top +
                  window.pageYOffset;
                window.scrollTo({
                  top: elementTop - headerHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Apply for Subsidy Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidyScheme;
