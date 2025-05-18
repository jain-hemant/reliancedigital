import React from 'react';

const OfferBanners = ({ title, banners }) => {
  // Default banners if none provided
  const defaultBanners = [
    {
      id: 1,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1744971397841.jpeg",
      href: "/collection/gdoe-trending-smartphones-250422/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=smartphones",
      alt: "Trending Smartphones"
    },
    {
      id: 2,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746180081119.jpeg",
      href: "/collection/ac-gdoe-2-5/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=ac-gdoe",
      alt: "Air Conditioners"
    },
    {
      id: 3,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746166455673.jpeg",
      href: "/collection/gdoe-10-percent-instant-discount-sda/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=sda",
      alt: "10% Instant Discount"
    },
    {
      id: 4,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1744971465466.jpeg",
      href: "/collection/gdoe-10-percent-instant-discount-washing-machines/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=washing_machine",
      alt: "Washing Machines"
    },
    {
      id: 5,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746786381360.jpeg",
      href: "/collection/tv-digital-saving-days/?internal_source=HP&internal_medium=GDOE&internal_campaign=redmi-tv&is_available=true",
      alt: "TV Digital Saving Days"
    },
    {
      id: 6,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746016517015.jpeg",
      href: "/sections/digital-savings-day-audio/?internal_source=HP&internal_medium=GDOE&internal_campaign=cinematic-audio",
      alt: "Digital Savings Day Audio"
    },
    {
      id: 7,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1745410817591.jpeg",
      href: "/collection/gaming-laptops-gdoe-23-04/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=rtx-2050",
      alt: "Gaming Laptops"
    },
    {
      id: 8,
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1745410894109.jpeg",
      href: "/collection/smartwatch-gdoe-23-04/?is_available=true&internal_source=HP&internal_medium=GDOE&internal_campaign=smartwatch",
      alt: "Smartwatches"
    }
  ];

  const displayBanners = banners || defaultBanners;

  return (
    <div className="offer-container wrapper rounded-md shadow-sm mb-6" style={{ backgroundColor: 'rgb(195, 227, 240)' }}>
      <div className="head p-4 border-b border-gray-200">
        <div className="title-container">
          <div className="title text-lg font-bold">{title || "Great Deals On Electronics"}</div>
        </div>
      </div>
      
      <div className="content-wrapper p-4">
        <div className="collection-grid-wrapper">
          <div className="collection-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayBanners.map(banner => (
              <a 
                key={banner.id} 
                href={banner.href} 
                className="collection-wrapper block rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Go to ${banner.alt}`}
              >
                <img 
                  src={banner.image} 
                  alt={banner.alt} 
                  className="card-image w-full h-auto"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanners;
