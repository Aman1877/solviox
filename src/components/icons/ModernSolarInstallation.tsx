import React from 'react';

interface ModernSolarInstallationProps {
  className?: string;
  width?: number;
  height?: number;
}

const ModernSolarInstallation: React.FC<ModernSolarInstallationProps> = ({ 
  className = "", 
  width = 600, 
  height = 400 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sky Gradient Background */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F6FF" />
        </linearGradient>
        <linearGradient id="solarPanelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="houseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>

      {/* Sky Background */}
      <rect width="600" height="300" fill="url(#skyGradient)" />
      
      {/* Ground */}
      <rect y="300" width="600" height="100" fill="#22c55e" />
      
      {/* Sun */}
      <circle cx="500" cy="80" r="40" fill="url(#sunGradient)" />
      
      {/* Sun Rays */}
      <g stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <path d="M 500 20 L 500 30" />
        <path d="M 540 80 L 530 80" />
        <path d="M 500 140 L 500 130" />
        <path d="M 460 80 L 470 80" />
        <path d="M 528 52 L 522 58" />
        <path d="M 528 108 L 522 102" />
        <path d="M 472 52 L 478 58" />
        <path d="M 472 108 L 478 102" />
      </g>

      {/* Modern House Structure */}
      <rect x="150" y="200" width="200" height="120" fill="url(#houseGradient)" stroke="#9ca3af" strokeWidth="1" />
      
      {/* House Roof */}
      <path d="M 130 200 L 250 120 L 370 200 Z" fill="#64748b" stroke="#475569" strokeWidth="1" />
      
      {/* Solar Panels on Roof - Modern Array */}
      <g fill="url(#solarPanelGradient)" stroke="#1e3a8a" strokeWidth="1">
        {/* Row 1 */}
        <rect x="160" y="140" width="35" height="25" rx="2" />
        <rect x="200" y="135" width="35" height="25" rx="2" />
        <rect x="240" y="140" width="35" height="25" rx="2" />
        <rect x="280" y="145" width="35" height="25" rx="2" />
        
        {/* Row 2 */}
        <rect x="160" y="170" width="35" height="25" rx="2" />
        <rect x="200" y="165" width="35" height="25" rx="2" />
        <rect x="240" y="170" width="35" height="25" rx="2" />
        <rect x="280" y="175" width="35" height="25" rx="2" />
      </g>

      {/* Solar Panel Grid Lines */}
      <g stroke="#60a5fa" strokeWidth="0.5" opacity="0.7">
        {/* Vertical lines */}
        <path d="M 172 140 L 172 165" />
        <path d="M 183 140 L 183 165" />
        <path d="M 212 135 L 212 160" />
        <path d="M 223 135 L 223 160" />
        <path d="M 252 140 L 252 165" />
        <path d="M 263 140 L 263 165" />
        <path d="M 292 145 L 292 170" />
        <path d="M 303 145 L 303 170" />
        
        {/* Horizontal lines */}
        <path d="M 160 152 L 195 152" />
        <path d="M 200 147 L 235 147" />
        <path d="M 240 152 L 275 152" />
        <path d="M 280 157 L 315 157" />
        
        <path d="M 160 182 L 195 182" />
        <path d="M 200 177 L 235 177" />
        <path d="M 240 182 L 275 182" />
        <path d="M 280 187 L 315 187" />
      </g>

      {/* House Details */}
      {/* Door */}
      <rect x="230" y="270" width="20" height="50" fill="#8b5cf6" rx="2" />
      <circle cx="245" cy="295" r="2" fill="#fbbf24" />
      
      {/* Windows */}
      <rect x="170" y="230" width="25" height="25" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" rx="2" />
      <rect x="305" y="230" width="25" height="25" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" rx="2" />
      
      {/* Window Frames */}
      <path d="M 182.5 230 L 182.5 255" stroke="#3b82f6" strokeWidth="1" />
      <path d="M 170 242.5 L 195 242.5" stroke="#3b82f6" strokeWidth="1" />
      <path d="M 317.5 230 L 317.5 255" stroke="#3b82f6" strokeWidth="1" />
      <path d="M 305 242.5 L 330 242.5" stroke="#3b82f6" strokeWidth="1" />

      {/* Energy Flow Visualization */}
      <g stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.8">
        <path d="M 250 180 Q 280 190 300 220" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 220 175 Q 240 185 250 210" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Energy Symbols */}
      <g fill="#22c55e" opacity="0.9">
        <circle cx="295" cy="215" r="3">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="245" cy="205" r="3">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Modern Solar Inverter */}
      <rect x="380" y="280" width="30" height="20" fill="#374151" rx="3" />
      <rect x="385" y="285" width="20" height="3" fill="#22c55e" rx="1" />
      <rect x="385" y="290" width="15" height="2" fill="#fbbf24" rx="1" />
      <circle cx="405" cy="287" r="2" fill="#ef4444" />

      {/* Power Lines */}
      <g stroke="#374151" strokeWidth="2" fill="none">
        <path d="M 410 290 L 450 290 L 450 250" />
        <circle cx="450" cy="250" r="3" fill="#374151" />
      </g>

      {/* Clouds */}
      <g fill="white" opacity="0.8">
        <ellipse cx="100" cy="100" rx="20" ry="12" />
        <ellipse cx="115" cy="95" rx="25" ry="15" />
        <ellipse cx="130" cy="100" rx="18" ry="10" />
        
        <ellipse cx="450" cy="120" rx="15" ry="8" />
        <ellipse cx="460" cy="115" rx="20" ry="12" />
        <ellipse cx="470" cy="120" rx="12" ry="7" />
      </g>

      {/* Trees for Environment */}
      <g fill="#16a34a">
        <ellipse cx="80" cy="280" rx="15" ry="25" />
        <rect x="77" y="290" width="6" height="20" fill="#92400e" />
        
        <ellipse cx="520" cy="285" rx="12" ry="20" />
        <rect x="518" y="295" width="4" height="15" fill="#92400e" />
      </g>

      {/* Efficiency Indicators */}
      <g fill="#22c55e" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">
        <text x="400" y="350" textAnchor="middle">Clean Energy</text>
        <text x="200" y="350" textAnchor="middle">Zero Emissions</text>
      </g>
    </svg>
  );
};

export default ModernSolarInstallation;
