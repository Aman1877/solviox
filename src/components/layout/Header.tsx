import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SolvioxLogo from "../icons/SolvioxLogo";
import ThemeToggle from "../ui/ThemeToggle";
import { navigateTo } from "../Router";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    // { name: 'Contact', href: '#contact' },
  ];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Escape key closes menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const scrollWithOffset = (el: Element) => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const elementTop =
        el.getBoundingClientRect().top + globalThis.pageYOffset;
      globalThis.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
    };

    const element = document.querySelector(href);
    if (element) {
      scrollWithOffset(element);
    } else if (globalThis.location.pathname !== "/") {
      navigateTo("/");
    }
    // Let home page handle scroll if anchor exists after navigation
  };

  // Use the same header design for all pages
  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 shadow-lg"
      style={{ backgroundColor: "var(--surface-primary)" }}
    >
      {/* Main Navigation */}
      <nav className="container-custom px-4 py-1" ref={menuRef}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <SolvioxLogo
              className="h-8 sm:h-10 w-auto hover:scale-105 transition-transform duration-200"
              variant="dark"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </motion.a>
            ))}

            <ThemeToggle size="md" variant="button" />

            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#contact")}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle size="md" variant="button" />
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors"
              style={{
                backgroundColor: isMenuOpen
                  ? "var(--bg-secondary)"
                  : "transparent",
                border: isMenuOpen
                  ? "1px solid var(--border-primary)"
                  : "1px solid transparent",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-primary)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} style={{ color: "var(--text-primary)" }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} style={{ color: "var(--text-primary)" }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Slide-down Menu */}
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 z-50 shadow-xl border-t lg:hidden"
                style={{
                  backgroundColor: "var(--surface-primary)",
                  borderColor: "var(--border-primary)",
                  width: "100%",
                  maxWidth: "100vw",
                }}
              >
                <div className="w-full px-6 py-6">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link py-3 px-4 rounded-lg text-lg font-medium"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                      >
                        {item.name}
                      </motion.a>
                    ))}

                    {/* CTA Button */}
                    <motion.button
                      className="btn btn-primary w-full py-4 mt-4 text-lg font-semibold"
                      onClick={() => handleNavClick("#contact")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
