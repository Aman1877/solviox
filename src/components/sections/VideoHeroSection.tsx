import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface VideoHeroSectionProps {
  videoSrc?: string;
  videoPoster?: string;
  overlay?: boolean;
  onGetQuote?: () => void;
}

const TAGLINES = [
  "Powering a Greener Tomorrow",
  "Solar Energy for Every Home",
  "Reliable AC & Solar Infrastructure",
  "Your Trusted Energy Partner",
];

const VideoHeroSection: React.FC<VideoHeroSectionProps> = ({
  videoSrc = "/videos/hero-video.mp4",
  videoPoster,
  overlay = true,
  onGetQuote,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  // Cycle taglines every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll with header offset — rAF ensures layout is settled on fresh load
  const scrollToSection = (id: string) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 65;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote();
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <section className="video-hero-section relative w-full overflow-hidden">
      {/* ── Video ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          className="video-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // @ts-ignore — fetchPriority is valid on video elements, TS types lag behind
          fetchPriority="high"
          poster={videoPoster}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ── Dark gradient overlay ── */}
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.50) 100%)",
          }}
        />
      )}

      {/* ── Hero content ── */}
      <div
        className="video-hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
            borderRadius: "999px",
            padding: "0.35rem 1.1rem",
            marginBottom: "1.25rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              boxShadow: "0 0 6px #4ade80",
            }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Solviox Energy &amp; Lighting
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            color: "#ffffff",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "1rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            maxWidth: "820px",
          }}
        >
          Clean Energy Solutions
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #38bdf8, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built to Last
          </span>
        </motion.h1>

        {/* Primary brand tagline (always visible) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{
            color: "#ffffff",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 800,
            letterSpacing: "0.02em",
            marginBottom: "0.95rem",
            textShadow: "0 2px 18px rgba(2, 6, 23, 0.6)",
            background:
              "linear-gradient(90deg, rgba(14,165,233,0.28), rgba(37,99,235,0.33))",
            border: "1px solid rgba(147,197,253,0.75)",
            borderRadius: "999px",
            padding: "0.42rem 1.15rem",
            backdropFilter: "blur(4px)",
          }}
        >
          ☀️ Save with Solar. Shine with Solviox
        </motion.p>

        {/* Animated rotating tagline */}
        <div
          style={{
            height: "2rem",
            overflow: "hidden",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45 }}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)",
                fontWeight: 400,
                position: "absolute",
                width: "100%",
                textAlign: "center",
              }}
            >
              {TAGLINES[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Primary CTA */}
          <motion.button
            onClick={handleGetQuote}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(56,189,248,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
              color: "#fff",
              border: "none",
              borderRadius: "0.625rem",
              padding: "0.875rem 2rem",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(14,165,233,0.4)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            Get Free Quote
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.45)",
              borderRadius: "0.625rem",
              padding: "0.875rem 2rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "background 0.25s ease",
            }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHeroSection;
