import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, Home, Zap, Leaf, TrendingUp } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const SolarRooftopPage: React.FC = () => {
  const features = [
    'High-efficiency monocrystalline solar panels',
    'Smart inverters with monitoring capabilities',
    'Weather-resistant mounting systems',
    'Net metering support and grid connectivity',
    'Professional installation by certified technicians',
    'Comprehensive 25+ year warranty coverage',
    'Regular maintenance and performance monitoring',
    'Government subsidy assistance and documentation'
  ];

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Reduce Electricity Bills',
      description: 'Save up to 90% on your monthly electricity costs with our efficient solar rooftop systems.'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Eco-Friendly Energy',
      description: 'Generate clean, renewable energy and reduce your carbon footprint significantly.'
    },
    {
      icon: <Home size={32} />,
      title: 'Increase Property Value',
      description: 'Solar installations can increase your property value by 15-20% on average.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Government Incentives',
      description: 'Take advantage of government subsidies and tax benefits for solar installations.'
    }
  ];

  const specifications = [
    { label: 'Panel Efficiency', value: '20-22%' },
    { label: 'System Capacity', value: '1kW to 100kW+' },
    { label: 'Warranty Period', value: '25 Years' },
    { label: 'Installation Time', value: '1-3 Days' },
    { label: 'Payback Period', value: '4-6 Years' },
    { label: 'Lifespan', value: '25+ Years' }
  ];

  const applications = [
    'Residential Rooftop Systems',
    'Commercial Building Installations',
    'Industrial Facility Solar Arrays',
    'Educational Institution Projects',
    'Healthcare Facility Installations',
    'Government Building Solar Systems'
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Header
        pageType="service"
        pageTitle="Solar Rooftop Solutions"
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
                ⚡ Premium Solar Solutions
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Solar Rooftop
                <span className="block text-secondary-300">Solutions</span>
              </h1>

              <p className="text-xl mb-8 text-white opacity-90 leading-relaxed max-w-lg">
                Transform your rooftop into a clean energy powerhouse. Reduce electricity bills by up to 90% while contributing to a sustainable future.
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
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm"
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
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-sm text-white opacity-70">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">90%</div>
                  <div className="text-sm text-white opacity-70">Bill Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1-3</div>
                  <div className="text-sm text-white opacity-70">Days Install</div>
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
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-secondary-300 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                <h3 className="text-2xl font-bold mb-6" style={{ color: 'white' }}>
                  Why Choose Our Solar Rooftop?
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

      {/* Features Section */}
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
              Complete Solar Rooftop Features
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our solar rooftop systems come with everything you need for a complete 
              renewable energy solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
                style={{ backgroundColor: 'var(--surface-primary)' }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{feature}</span>
                </div>
              </motion.div>
            ))}
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
              Benefits of Solar Rooftop
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover the advantages of switching to solar energy for your home or business.
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

      {/* Specifications Section */}
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
              Technical Specifications
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Detailed specifications of our solar rooftop systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6 card-shadow text-center hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: 'var(--surface-primary)' }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{spec.label}</h3>
                  <p className="text-2xl font-bold" style={{ color: 'var(--primary-600)' }}>{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Applications & Use Cases
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our solar rooftop solutions are perfect for various applications and building types.
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
              Ready to Install Solar Rooftop?
            </h2>
            <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation and customized quote for your solar rooftop installation.
              Our experts will help you choose the perfect system for your needs.
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

export default SolarRooftopPage;
