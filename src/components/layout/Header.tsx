import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SolvioxLogo from "../icons/SolvioxLogo";
import { navigateTo } from "../Router";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 10);
    };

    // Force initial state to false (transparent) - don't check on mount
    setIsScrolled(false);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    const doScroll = () => {
      const element = document.querySelector(href);
      if (!element) {
        if (window.location.pathname !== "/") navigateTo("/");
        return;
      }
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 65;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const tryScrollWithRetry = (attempt = 0) => {
      const element = document.querySelector(href);
      if (element) {
        doScroll();
        return;
      }
      if (attempt < 20) {
        requestAnimationFrame(() => tryScrollWithRetry(attempt + 1));
      }
    };

    // rAF ensures the DOM layout is settled before measuring
    if (window.location.pathname === "/") {
      requestAnimationFrame(doScroll);
    } else {
      navigateTo("/");
      requestAnimationFrame(() => tryScrollWithRetry(0));
    }
  };

  // Use the same header design for all pages
  return (
    <header
      className={isScrolled ? "header-scrolled" : "header-transparent"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        maxWidth: "100vw",
        zIndex: 50,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: isScrolled ? "whitesmoke" : "transparent",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* Main Navigation */}
      <nav
        ref={menuRef}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "65px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
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
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <div
              style={{
                filter: isScrolled ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.3s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SolvioxLogo variant="dark" width={150} height={38} />
            </div>
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

            {/* ThemeToggle temporarily commented out - forcing dark mode */}
            {/* <ThemeToggle size="md" variant="button" /> */}

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
          <div className="lg:hidden" style={{ alignItems: "center" }}>
            {/* ThemeToggle temporarily commented out - forcing dark mode */}
            {/* <ThemeToggle size="md" variant="button" /> */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors"
              style={{
                marginRight: "0.5rem",
                backgroundColor: isMenuOpen
                  ? isScrolled
                    ? "rgba(0, 0, 0, 0.1)"
                    : "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                border: isMenuOpen
                  ? isScrolled
                    ? "1px solid rgba(0, 0, 0, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.3)"
                  : "1px solid transparent",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: isScrolled
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.2)",
                borderColor: isScrolled
                  ? "rgba(0, 0, 0, 0.2)"
                  : "rgba(255, 255, 255, 0.3)",
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
                    <X
                      size={24}
                      style={{ color: isScrolled ? "#1a1a1a" : "#ffffff" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu
                      size={24}
                      style={{ color: isScrolled ? "#1a1a1a" : "#ffffff" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav - Moved outside nav for full screen coverage */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: "fixed",
                top: "65px",
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 40,
              }}
            />

            {/* Slide-down Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: "65px",
                left: 0,
                right: 0,
                width: "100%",
                backgroundColor: "whitesmoke",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                zIndex: 49,
                boxSizing: "border-box",
              }}
            >
              <div style={{ padding: "0.75rem 1.25rem 1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "0.875rem 1rem",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: "#1a1a1a",
                        textDecoration: "none",
                        borderRadius: "8px",
                        transition: "background 0.15s ease",
                      }}
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
                  <button
                    className="btn btn-primary"
                    onClick={() => handleNavClick("#contact")}
                    style={{
                      width: "100%",
                      marginTop: "0.75rem",
                      padding: "0.875rem",
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
