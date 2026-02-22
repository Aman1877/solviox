import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import SolvioxLogo from '../icons/SolvioxLogo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Solar Rooftop Installation',
    'Solar LED Street Lights',
    'AC Street Lighting',
    'EPC Projects',
    'High Mast Solutions',
    'Maintenance Services'
  ];

  return (
    <footer style={{ backgroundColor: 'var(--dark-800)' }} className="text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SolvioxLogo className="h-16 w-auto" variant="dark" />
            <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Leading provider of solar energy solutions in Gujarat. We help you 
              reduce electricity bills and contribute to a sustainable future with 
              our premium solar installations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    onClick={e => {
                      e.preventDefault();
                      const header = document.querySelector('header');
                      const headerHeight = header ? header.getBoundingClientRect().height : 0;
                      const target = document.querySelector(link.href);
                      if (target) {
                        const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: elementTop - headerHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <a 
                    href="tel:+919428110764"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    className="hover:text-primary-400 transition-colors duration-300 block"
                  >
                    +91 94281 10764
                  </a>
                  <a 
                    href="tel:+916353698862"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    className="hover:text-primary-400 transition-colors duration-300 block"
                  >
                    +91 63536 98862
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>solvioxenergy@gmail.com</p>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Ahmedabad-380001</p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Gujarat, India</p>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-6 p-6 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              <div className="relative z-10">
                <p className="text-lg font-bold mb-1">Ready to Go Solar?</p>
                <p className="text-sm opacity-90 mb-4">Start saving on electricity bills today!</p>
                <motion.a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.getBoundingClientRect().height : 0;
                    const target = document.querySelector('#contact');
                    if (target) {
                      const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementTop - headerHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Free Quote</span>
                  <motion.div
                    className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 rounded-full transform group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-primary)' }}></div>
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              © 2024 SOLVIOX Energy & Lighting. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="hover:text-primary-400 text-sm transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-primary-400 text-sm transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white hover:bg-gray-100 text-primary-700 rounded-full shadow-xl border-2 border-primary-600 transition-all duration-300 flex items-center justify-center z-50 outline-none focus:outline-none"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Scroll to top"
        style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}
      >
        <ArrowUp size={28} strokeWidth={2.5} color="#1e293b" />
      </motion.button>
    </footer>
  );
};

export default Footer;
