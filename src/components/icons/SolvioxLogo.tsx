import React from 'react';
import LogoImg from './LogoImg';

interface SolvioxLogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'dark' | 'light';
}

const SolvioxLogo: React.FC<SolvioxLogoProps> = ({ className = '', width = 200, height = 80, variant = 'dark' }) => (
  <LogoImg className={className} width={width} height={height} variant={variant} />
);

export default SolvioxLogo;
