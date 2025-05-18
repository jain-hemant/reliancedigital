import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ images, autoSlideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideIntervalRef = useRef(null);

  // Default images if none provided
  const defaultImages = [
    {
      id: 1,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747287137578.jpeg",
      alt: "Pixel Days Promotion",
      href: "https://www.reliancedigital.in/sections/pixel-days/?internal_source=HP&internal_medium=HPMC&internal_campaign=pixel-days"
    },
    {
      id: 2,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747140009562.jpeg",
      alt: "Apple Days 2025",
      href: "https://www.reliancedigital.in/sections/apple-days-2025/?internal_source=HP&internal_campaign=HPMC&internal_medium=apple-days"
    },
    {
      id: 3,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747288069436.jpeg",
      alt: "Samsung S25 Edge",
      href: "https://www.reliancedigital.in/collection/samsung-s25-edge/?internal_source=HP&internal_medium=HPMC&internal_camapign=samsung-s25-edge&is_available=true"
    },
    {
      id: 4,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741686479001.jpeg",
      alt: "Summer Ready Sale",
      href: "https://www.reliancedigital.in/sections/summer-ready-sale/?internal-source=HP&internal_medium=HPMC&internal_campaign=summer-ready-sale"
    },
    {
      id: 5,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1745496516466.jpeg",
      alt: "Entertainment Fest",
      href: "https://www.reliancedigital.in/sections/entertainment-fest-feb-2025/?internal_source=HP&internal_medium=HPMC&internal_campaign=entertainment-fest"
    },
    {
      id: 6,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747051045350.jpeg",
      alt: "OnePlus CE4 Lite",
      href: "https://www.reliancedigital.in/collection/oneplus-ce4-lite-30-4/?page_no=1&page_size=12&page_type=number"
    }
  ];

  const slidesData = images || defaultImages;

  useEffect(() => {
    // Start auto-sliding
    startSlideInterval();
    
    // Clean up interval on unmount
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [currentSlide]);

  const startSlideInterval = () => {
    // Clear any existing interval
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    
    // Set up new interval
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
  };

  const resetSlideInterval = () => {
    startSlideInterval();
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 400);
      resetSlideInterval();
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 400);
      resetSlideInterval();
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 400);
      resetSlideInterval();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-md shadow-sm mb-4">
      <div 
        className="flex transition-transform duration-400 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slidesData.length * 100}%`
        }}
      >
        {slidesData.map((slide, index) => (
          <div 
            key={slide.id || index} 
            className="relative w-full"
            style={{ width: `${100 / slidesData.length}%` }}
          >
            <a href={slide.href} target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="w-full h-auto object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      
      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-gray-800" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
