import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, Lightbulb, Clock, Shield, Zap } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const SolarStreetLightPage: React.FC = () => {
  const features = [
    'High-efficiency LED technology with 150+ lumens per watt',
    'Automatic dusk-to-dawn operation with smart sensors',
    'Weather-resistant IP65 rated housing',
    'Integrated lithium battery with 5+ year lifespan',
    'Remote monitoring and control capabilities',
    'Motion sensor activation for energy optimization',
    'Easy installation with minimal maintenance',
    'Government approved specifications and certifications'
  ];

  const benefits = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Energy Efficient',
      description: 'Advanced LED technology provides superior illumination while consuming minimal energy from solar panels.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Auto Operation',
      description: 'Intelligent sensors automatically turn lights on at dusk and off at dawn, ensuring optimal energy usage.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Weather Resistant',
      description: 'IP65 rated protection against dust, rain, and extreme weather conditions for reliable year-round operation.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Smart Controls',
      description: 'Remote monitoring and control features allow for easy management and performance optimization.'
    }
  ];

  const specifications = [
    { label: 'LED Power', value: '30W - 150W' },
    { label: 'Solar Panel', value: '80W - 300W' },
    { label: 'Battery Capacity', value: '40Ah - 200Ah' },
    { label: 'Lighting Hours', value: '10-12 Hours' },
    { label: 'Charging Time', value: '6-8 Hours' },
    { label: 'Lifespan', value: '10+ Years' },
    { label: 'Warranty', value: '3-5 Years' },
    { label: 'Installation', value: '1 Day' }
  ];

  const applications = [
    'Street and Road Lighting',
    'Parking Lot Illumination',
    'Garden and Pathway Lighting',
    'Security and Perimeter Lighting',
    'Commercial Area Lighting',
    'Residential Community Lighting'
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Header
        pageType="service"
        pageTitle="Solar Street Lighting"
        showBackButton={true}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--primary-600)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white rounded-full"></div>
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
                💡 Smart LED Technology
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Solar LED
                <span className="block text-secondary-300">Street Lights</span>
              </h1>
              
              <p className="text-xl mb-8 text-white opacity-90 leading-relaxed max-w-lg">
                Illuminate streets, pathways, and public spaces with our energy-efficient solar LED street lighting solutions. Zero electricity costs with maximum brightness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                  style={{
                    backgroundColor: 'var(--surface-primary)',
                    color: 'var(--primary-600)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--surface-primary)';
                  }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Get Free Quote</span>
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
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = 'var(--primary-600)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Call Now</span>
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
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-white opacity-70">Years Lifespan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12H</div>
                  <div className="text-sm text-white opacity-70">Lighting Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">IP65</div>
                  <div className="text-sm text-white opacity-70">Weather Rating</div>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(15px)'
                }}
              >
                {/* Floating Light Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-yellow-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-3 h-3 bg-yellow-200 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'white' }}>
                  Advanced LED Features
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
                        <CheckCircle size={16} style={{ color: 'white' }} />
                      </div>
                      <span style={{ color: 'white' }} className="group-hover:translate-x-1 transition-transform">
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

      {/* Benefits Section */}
      <section className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Why Choose Solar LED Street Lights?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover the advantages of our intelligent solar LED street lighting solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow text-center group"
                style={{ backgroundColor: 'var(--surface-primary)' }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <div style={{ color: 'var(--primary-600)' }}>
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Perfect for Various Applications
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our solar LED street lights are ideal for multiple lighting scenarios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow group"
                style={{ backgroundColor: 'var(--surface-primary)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary-500)' }}
                  ></div>
                  <span className="font-medium group-hover:text-primary-600 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {application}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Technical Specifications
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Detailed specifications of our solar LED street lighting systems.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{spec.label}</h3>
                  <p className="text-2xl font-bold" style={{ color: 'var(--primary-600)' }}>{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--primary-600)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Install Solar LED Street Lights?
            </h2>
            <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation and customized quote for your solar LED street lighting project. 
              Our experts will design the perfect lighting solution for your needs.
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

export default SolarStreetLightPage;
