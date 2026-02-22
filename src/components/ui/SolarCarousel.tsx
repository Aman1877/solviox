import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Award, ChevronLeft, ChevronRight, Leaf, TrendingUp, Zap } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';

type ImageData = {
  id: number;
  url: string;
  alt: string;
  title: string;
  subtitle: string;
  highlight: string;
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  iconColor: string;
  badgeColor: string;
};

// High-quality solar images ONLY - all solar-related
const solarImages: ImageData[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop',
    alt: 'Solar panels on rooftop installation',
    title: 'Switch to Solar Energy',
    subtitle: 'Power Your Future with Clean, Renewable Energy',
    highlight: 'Save up to 90% on Electricity Bills',
    icon: Zap,
    iconColor: 'text-yellow-400',
    badgeColor: 'bg-gradient-to-r from-yellow-400/80 to-orange-400/80'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop',
    alt: 'Commercial solar panel array',
    title: 'Commercial Solar Solutions',
    subtitle: 'Empower Your Business with Sustainable Energy',
    highlight: 'Government Subsidies Available',
    icon: TrendingUp,
    iconColor: 'text-green-400',
    badgeColor: 'bg-gradient-to-r from-green-500/80 to-emerald-500/80'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop',
    alt: 'Solar farm installation',
    title: 'Expert Solar Installation',
    subtitle: 'Professional Installation by Certified Technicians',
    highlight: '25+ Years Warranty',
    icon: Award,
    iconColor: 'text-blue-400',
    badgeColor: 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1920&h=1080&fit=crop',
    alt: 'Solar energy system',
    title: 'Sustainable Energy Future',
    subtitle: 'Join the Green Energy Revolution',
    highlight: 'Zero Carbon Footprint',
    icon: Leaf,
    iconColor: 'text-green-300',
    badgeColor: 'bg-gradient-to-r from-green-400/80 to-teal-400/80'
  }
];

const SolarCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      duration: 25
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const renderTextContent = (image: ImageData) => {
    const IconComponent = image.icon;
    return (
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" style={{ paddingTop: '25%' }}>
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight"
            style={{ 
              textShadow: '3px 3px 12px rgba(0, 0, 0, 0.9), 0 0 24px rgba(0, 0, 0, 0.7)'
            }}
          >
            {image.title}
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-white/95 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed font-medium"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            {image.subtitle}
          </p>
          <div className={`inline-flex items-center gap-2 sm:gap-3 ${image.badgeColor} backdrop-blur-sm border-2 border-white/40 rounded-full px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 shadow-2xl`}>
            <IconComponent className={`${image.iconColor} flex-shrink-0`} size={18} style={{ width: '18px', height: '18px' }} />
            <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
              {image.highlight}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {solarImages.map((image) => (
            <div key={image.id} className="embla__slide">
              <div className="relative w-full h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="eager"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
                
                {/* Text Content Overlay - Centered and consistent style */}
                <div className="absolute inset-0 flex justify-center">
                  {renderTextContent(image)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Next image"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </button>

      {/* Dots Indicator */}
      {scrollSnaps.length > 0 && (
        <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5">
          {scrollSnaps.map((snap, index) => (
            <button
              key={`dot-${snap}-${index}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 sm:h-3 md:h-3.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-white w-8 sm:w-10 md:w-12 shadow-lg'
                  : 'bg-white/60 hover:bg-white/80 w-2.5 sm:w-3 md:h-3.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SolarCarousel;
