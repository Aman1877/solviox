import React from 'react';

interface LogoImgProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  variant?: 'dark' | 'light';
}

import darkLogo from '../../assets/solviox-logo-dark.png.svg';

const LogoImg: React.FC<LogoImgProps> = ({ className = '', style = {}, width = 200, height = 80 }) => {
  const src = darkLogo;
  return (
    <img
      src={src}
      alt="Solviox Energy & Lighting Logo"
      className={className}
      style={{ width, height, ...style }}
      width={width}
      height={height}
      draggable={false}
    />
  );
};

export default LogoImg;
