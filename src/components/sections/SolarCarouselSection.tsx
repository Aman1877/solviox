import React from 'react';
import SolarCarousel from '../ui/SolarCarousel';

const SolarCarouselSection: React.FC = () => {
  return (
    <section className="w-full relative block">
      <div className="w-full">
        <SolarCarousel />
      </div>
    </section>
  );
};

export default SolarCarouselSection;
