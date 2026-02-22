import React from 'react';

interface LogoImgProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  variant?: 'dark' | 'light';
}

import solvioxLogo from '../../assets/SOLVIOXNEW.svg';

const LogoImg: React.FC<LogoImgProps> = ({ className = '', style = {}, width = 200, height = 80 }) => {
  const src = solvioxLogo;
  return (
    <img
      src={src}
      alt="Solviox Energy & Lighting Logo"
      className={className}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width, 
        height: typeof height === 'number' ? `${height}px` : height, 
        objectFit: 'contain', 
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
        ...style 
      }}
      draggable={false}
    />
  );
};

export default LogoImg;
