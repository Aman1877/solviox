import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export type ModalStatus = "success" | "error";

interface FormModalProps {
  isOpen: boolean;
  status: ModalStatus;
  onClose: () => void;
}

const CONFIG = {
  success: {
    icon: <CheckCircle size={52} strokeWidth={1.5} />,
    iconColor: "#22c55e",
    iconBg: "rgba(34,197,94,0.12)",
    accentColor: "#22c55e",
    title: "Message Sent!",
    message:
      "Thank you for reaching out. We've received your inquiry and sent you a confirmation email. Our team will get back to you within 24 hours.",
    closeBtnLabel: "Great, Close",
    closeBtnClass: "form-modal-btn-success",
  },
  error: {
    icon: <XCircle size={52} strokeWidth={1.5} />,
    iconColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.12)",
    accentColor: "#ef4444",
    title: "Oops! Something went wrong",
    message:
      "We couldn't send your message right now. Please check your connection and try again, or reach us directly at solvioxenergy@gmail.com.",
    closeBtnLabel: "Try Again",
    closeBtnClass: "form-modal-btn-error",
  },
} as const;

const FormModal: React.FC<FormModalProps> = ({ isOpen, status, onClose }) => {
  const cfg = CONFIG[status];

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="form-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <div className="form-modal-wrapper" role="dialog" aria-modal="true">
            <motion.div
              className="form-modal-card"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            >
              {/* Coloured top accent bar */}
              <div
                className="form-modal-accent"
                style={{ backgroundColor: cfg.accentColor }}
              />

              {/* Close button */}
              <button
                className="form-modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <motion.div
                className="form-modal-icon-wrap"
                style={{
                  backgroundColor: cfg.iconBg,
                  color: cfg.iconColor,
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.12,
                  type: "spring",
                  stiffness: 340,
                  damping: 22,
                }}
              >
                {cfg.icon}
              </motion.div>

              {/* Text */}
              <motion.div
                className="form-modal-body"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.3 }}
              >
                <h3 className="form-modal-title">{cfg.title}</h3>
                <p className="form-modal-message">{cfg.message}</p>
              </motion.div>

              {/* Action button */}
              <motion.button
                className={`form-modal-btn ${cfg.closeBtnClass}`}
                onClick={onClose}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                {cfg.closeBtnLabel}
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FormModal;
