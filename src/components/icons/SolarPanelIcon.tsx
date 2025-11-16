import React from 'react';

interface SolarPanelIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const SolarPanelIcon: React.FC<SolarPanelIconProps> = ({ 
  className = "", 
  width = 64, 
  height = 64 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Solar panel frame */}
      <rect x="8" y="16" width="48" height="32" rx="2" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
      
      {/* Solar cells grid */}
      <g fill="#3b82f6">
        <rect x="12" y="20" width="8" height="6" rx="0.5"/>
        <rect x="22" y="20" width="8" height="6" rx="0.5"/>
        <rect x="32" y="20" width="8" height="6" rx="0.5"/>
        <rect x="42" y="20" width="8" height="6" rx="0.5"/>
        
        <rect x="12" y="28" width="8" height="6" rx="0.5"/>
        <rect x="22" y="28" width="8" height="6" rx="0.5"/>
        <rect x="32" y="28" width="8" height="6" rx="0.5"/>
        <rect x="42" y="28" width="8" height="6" rx="0.5"/>
        
        <rect x="12" y="36" width="8" height="6" rx="0.5"/>
        <rect x="22" y="36" width="8" height="6" rx="0.5"/>
        <rect x="32" y="36" width="8" height="6" rx="0.5"/>
        <rect x="42" y="36" width="8" height="6" rx="0.5"/>
      </g>
      
      {/* Mounting structure */}
      <path d="M 16 48 L 32 52 L 48 48" stroke="#64748b" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="48" r="2" fill="#64748b"/>
      <circle cx="32" cy="52" r="2" fill="#64748b"/>
      <circle cx="48" cy="48" r="2" fill="#64748b"/>
      
      {/* Sun rays */}
      <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
        <path d="M 32 4 L 32 8"/>
        <path d="M 46 10 L 44 12"/>
        <path d="M 54 24 L 50 24"/>
        <path d="M 18 10 L 20 12"/>
        <path d="M 10 24 L 14 24"/>
      </g>
    </svg>
  );
};

export default SolarPanelIcon;
