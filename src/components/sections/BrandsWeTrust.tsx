import React from "react";
import { motion } from "framer-motion";

// Brand logos - using actual image URLs from dimansolar.com
const brands = [
  {
    id: 2,
    name: "Waaree",
    logo: "https://dimansolar.com/public/uploads/associate/associate-52320240821.jpg",
    description: "One with the Sun",
  },
  {
    id: 8,
    name: "Adani Solar",
    logo: "https://dimansolar.com/public/uploads/associate/associate-58320220252.jpg",
    description: "Trusted solar technology",
  },
  {
    id: 9,
    name: "Tata Power Solar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Tata_Power_logo.svg",
    description: "India's leading solar brand",
  },
];
const BrandsWeTrust: React.FC = () => {
  return (
    <section
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "#1e293b" }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Brands We Trust
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white opacity-90">
            We partner with industry-leading brands to provide you with the
            highest quality solar solutions
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "#334155",
                border: "1px solid #475569",
              }}
            >
              <div className="w-full h-20 md:h-24 flex items-center justify-center mb-3 md:mb-4 bg-white rounded-lg p-2 shadow-sm overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <span
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#0ea5e9",
                    textAlign: "center",
                  }}
                >
                  {brand.name}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-center text-white mb-1">
                {brand.name}
              </h3>
              {brand.description && (
                <p className="text-xs text-center mt-1 text-white opacity-75">
                  {brand.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeTrust;
