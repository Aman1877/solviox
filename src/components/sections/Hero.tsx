import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sun, Leaf } from "lucide-react";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id: string) => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 65;
    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="gradient-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: isMobile
          ? "5.5rem 1rem 3rem" /* mobile: top clears fixed header */
          : "8rem 1rem 4rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* 2-column grid on desktop, single column on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2.5rem" : "3rem",
            alignItems: "center",
          }}
        >
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: isMobile ? "2rem" : "3.75rem",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Switch to <span className="text-primary-600">Solar Energy</span>{" "}
              Today
            </motion.h2>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                alignSelf: "flex-start",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #0ea5e9, #0369a1)",
                  color: "#ffffff",
                  padding: isMobile ? "0.3rem 0.9rem" : "0.4rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  boxShadow: "0 2px 10px rgba(14,165,233,0.35)",
                }}
              >
                ☀️ Save with Solar. Shine with Solviox
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              Transform your home and business with clean, renewable solar
              energy. Save money, reduce your carbon footprint, and enjoy energy
              independence with SOLVIOX's premium solar solutions.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {[
                { Icon: Zap, label: "High Efficiency", cls: "text-accent-500" },
                {
                  Icon: Sun,
                  label: "25+ Years Warranty",
                  cls: "text-accent-500",
                },
                {
                  Icon: Leaf,
                  label: "Eco-Friendly",
                  cls: "text-secondary-500",
                },
              ].map(({ Icon, label, cls }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  className="text-gray-700"
                >
                  <Icon className={cls} size={20} />
                  <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "1rem",
              }}
            >
              <motion.button
                className="btn btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  width: isMobile ? "100%" : "auto",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="btn btn-outline"
                style={{ width: isMobile ? "100%" : "auto" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("services")}
              >
                View Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-primary)",
              }}
            >
              {[
                { value: "2000+", label: "Happy Customers" },
                { value: "₹78,000", label: "Subsidy" },
                { value: "5+", label: "Years Experience" },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    className="text-primary-600"
                    style={{
                      fontSize: isMobile ? "1.2rem" : "1.875rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.7rem" : "0.875rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Content — Solar Image ── */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-graphic-container"
              style={{ position: "relative" }}
            >
              <div style={{ position: "relative", zIndex: 10 }}>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hero-main-graphic"
                >
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                    alt="Solar panel installation"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "1rem",
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                    }}
                  />
                </motion.div>
              </div>

              {/* Floating Sun */}
              <motion.div
                className="absolute top-10 right-10 bg-accent-100 rounded-full p-4"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Sun className="text-accent-500" size={24} />
              </motion.div>

              {/* Floating Leaf */}
              <motion.div
                className="absolute bottom-20 left-10 bg-secondary-100 rounded-full p-3"
                animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Leaf className="text-secondary-500" size={20} />
              </motion.div>

              {/* Floating Zap */}
              <motion.div
                className="absolute left-0 bg-primary-100 rounded-full p-3"
                style={{ top: "50%" }}
                animate={{ x: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Zap style={{ color: "var(--primary-500)" }} size={20} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
