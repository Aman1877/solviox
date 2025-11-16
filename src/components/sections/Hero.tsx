import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sun, Leaf } from 'lucide-react';
import ModernSolarInstallation from '../icons/ModernSolarInstallation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Gujarati Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-gujarati font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              શું તમે હજુ પણ વીજળીનું બિલ ભરી રહ્યા છો?
            </motion.h1>

            {/* English Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Switch to{' '}
              <span className="text-primary-600">Solar Energy</span>{' '}
              Today
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Transform your home and business with clean, renewable solar energy.
              Save money, reduce your carbon footprint, and enjoy energy independence
              with SOLVIOX's premium solar solutions.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <Zap className="text-accent-500" size={20} />
                <span className="font-medium">High Efficiency</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Sun className="text-accent-500" size={20} />
                <span className="font-medium">25+ Years Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Leaf className="text-secondary-500" size={20} />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn btn-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.getBoundingClientRect().height : 0;
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const elementTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementTop - headerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.getBoundingClientRect().height : 0;
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    const elementTop = servicesSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementTop - headerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                View Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">78000</div>
                <div className="text-sm text-gray-600">Units Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Solar Installation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hero-graphic-container"
          >
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hero-main-graphic"
              >
                <ModernSolarInstallation className="w-full h-auto" />
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 bg-accent-100 rounded-full p-4"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sun className="text-accent-500" size={24} />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 bg-secondary-100 rounded-full p-3"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Leaf className="text-secondary-500" size={20} />
            </motion.div>

            <motion.div
              className="absolute left-0 bg-primary-100 rounded-full p-3"
              style={{ top: '50%' }}
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Zap style={{ color: 'var(--primary-500)' }} size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
