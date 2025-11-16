import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'toggle' | 'button' | 'minimal';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'md',
  variant = 'toggle'
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeConfig = {
    sm: {
      toggle: 'w-12 h-7',
      button: 'p-3',
      minimal: 'p-2',
      icon: 16,
      thumb: 'w-5 h-5'
    },
    md: {
      toggle: 'w-16 h-8',
      button: 'p-4',
      minimal: 'p-3',
      icon: 20,
      thumb: 'w-6 h-6'
    },
    lg: {
      toggle: 'w-18 h-9',
      button: 'p-5',
      minimal: 'p-4',
      icon: 22,
      thumb: 'w-7 h-7'
    },
    xl: {
      toggle: 'w-20 h-10',
      button: 'p-6',
      minimal: 'p-5',
      icon: 24,
      thumb: 'w-8 h-8'
    }
  };

  // Toggle Switch Variant (Default)
  if (variant === 'toggle') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={`
          relative inline-flex items-center
          ${sizeConfig[size].toggle}
          rounded-full transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
          ${className}
        `}
        style={{
          backgroundColor: theme === 'dark' ? 'var(--primary-600)' : 'var(--gray-300)',
          boxShadow: theme === 'dark'
            ? '0 2px 8px rgba(14, 165, 233, 0.3)'
            : '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Toggle Track Background */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: theme === 'dark' ? '#0ea5e9' : '#d1d5db'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Toggle Thumb */}
        <motion.div
          className={`
            relative z-10 flex items-center justify-center
            ${sizeConfig[size].thumb}
            rounded-full shadow-lg
          `}
          style={{
            backgroundColor: 'white'
          }}
          animate={{
            x: theme === 'dark'
              ? size === 'sm' ? 20 : size === 'md' ? 28 : 32
              : size === 'sm' ? -20 : size === 'md' ? -28 : -32
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={sizeConfig[size].icon - 4} className="text-yellow-500" />
              </motion.div>
            ) : (
              <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              >
              <Moon size={sizeConfig[size].icon - 4} className="text-primary-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    );
  }

  // Button Variant
  if (variant === 'button') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={`
          relative inline-flex items-center justify-center
          ${sizeConfig[size].button}
          rounded-xl transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
          ${className}
        `}
        style={{
          backgroundColor: 'transparent',
          border: 'none'
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={sizeConfig[size].icon} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={sizeConfig[size].icon} className="text-black" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)'
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.button>
    );
  }

  // Minimal Variant
  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        ${sizeConfig[size].minimal}
        rounded-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
        ${className}
      `}
      style={{
        backgroundColor: 'transparent',
        color: 'var(--text-secondary)'
      }}
      whileHover={{
        scale: 1.15,
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
      }}
      // whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun  className="text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon  className="text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
