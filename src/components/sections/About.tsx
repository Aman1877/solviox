import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Shield, Clock, Wrench } from "lucide-react";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return count;
  };

  const stats = [
    {
      icon: <Users size={32} />,
      value: useCounter(500),
      suffix: "+",
      label: "Happy Customers",
      color: "primary",
    },
    {
      icon: <Zap size={32} />,
      value: useCounter(78000),
      suffix: "",
      label: "Upto Subsidy",
      color: "secondary",
    },
    {
      icon: <Award size={32} />,
      value: useCounter(5),
      suffix: "+",
      label: "Years Experience",
      color: "accent",
    },
    {
      icon: <Shield size={32} />,
      value: useCounter(100),
      suffix: "%",
      label: "Quality Guarantee",
      color: "primary",
    },
  ];

  const features = [
    {
      icon: <Clock size={24} />,
      title: "Quick Installation",
      description:
        "Fast and efficient installation process with minimal disruption to your daily routine.",
      color: "primary",
    },
    {
      icon: <Shield size={24} />,
      title: "25+ Years Warranty",
      description:
        "Comprehensive warranty coverage on all solar panels and installation work.",
      color: "secondary",
    },
    {
      icon: <Wrench size={24} />,
      title: "Professional Service",
      description:
        "Expert team with years of experience in solar energy solutions and maintenance.",
      color: "accent",
    },
    {
      icon: <Award size={24} />,
      title: "Certified Quality",
      description:
        "All our products meet international quality standards and certifications.",
      color: "primary",
    },
  ];

  return (
    <section
      id="about"
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
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose <span className="text-primary-600">SOLVIOX</span>?
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            With over 5 years of experience in the energy sector, we provide
            reliable, efficient, and cost-effective solar solutions for homes
            and businesses.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="inline-flex p-4 rounded-full mb-4"
                style={{
                  backgroundColor: `var(--${stat.color}-100)`,
                  color: `var(--${stat.color}-600)`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: `var(--${stat.color}-600)` }}
              >
                {stat.value}
                {stat.suffix}
              </div>
              <div
                className="font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Leading Solar Energy Solutions in Gujarat
            </h3>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              SOLVIOX Energy & Lighting has been at the forefront of renewable
              energy solutions, helping thousands of customers reduce their
              electricity bills and carbon footprint. Our commitment to quality
              and customer satisfaction has made us a trusted name in the solar
              industry.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Government subsidies and net metering support
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Complete project management from design to installation
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                <span style={{ color: "var(--text-secondary)" }}>
                  24/7 monitoring and maintenance services
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      backgroundColor: `var(--${feature.color}-100)`,
                      color: `var(--${feature.color}-600)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
