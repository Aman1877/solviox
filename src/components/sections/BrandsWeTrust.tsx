import React from "react";
import { motion } from "framer-motion";

// Brand logos - using actual image URLs from dimansolar.com
const brands = [
  {
    id: 1,
    name: "Luminous",
    logo: "https://dimansolar.com/public/uploads/associate/associate-33520241209.jpg",
    description: "Leading power solutions brand",
  },
  {
    id: 2,
    name: "Waaree",
    logo: "https://dimansolar.com/public/uploads/associate/associate-52320240821.jpg",
    description: "One with the Sun",
  },
  {
    id: 3,
    name: "IMA",
    logo: "https://dimansolar.com/public/uploads/associate/associate-96020220253.jpg",
    description: "The way to Energy",
  },
  {
    id: 4,
    name: "RenewSys",
    logo: "https://dimansolar.com/public/uploads/associate/associate-61620221045.jpg",
    description: "Let there be light",
  },
  {
    id: 5,
    name: "SMA",
    logo: "https://dimansolar.com/public/uploads/associate/associate-17420220254.jpg",
    description: "Solar Inverter",
  },
  {
    id: 6,
    name: "LONGi Solar",
    logo: "https://dimansolar.com/public/uploads/associate/associate-84220221048.jpg",
    description: "Premium solar panels",
  },
  {
    id: 7,
    name: "Canadian Solar",
    logo: "https://dimansolar.com/public/uploads/associate/associate-47420221048.jpg",
    description: "Global solar solutions",
  },
  {
    id: 8,
    name: "Adani Solar",
    logo: "https://dimansolar.com/public/uploads/associate/associate-58320220252.jpg",
    description: "Trusted solar technology",
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
                />
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
