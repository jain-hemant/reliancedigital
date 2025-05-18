import React from 'react';
import MenuCategories from './MenuCategories';
import ImageCarousel from './ImageCarousel';
import ProductSection from './ProductSection';
import OfferBanners from './OfferBanners';

const Dashboard = () => {
  // TV products data
  const tvProducts = [
    {
      id: 1,
      title: "Redmi 81.28 cm (32 inch) Smart Fire TV, Black, ELA5577IN, 2024",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/q5LhVL23fs-redmi-32-fire-tv-ela5577in-494410643-i-1-1200wx1200h.jpeg",
      discountPrice: 10990,
      originalPrice: 24999,
      discount: 56,
      badge: "Special Offer",
      badgeColor: "#007FAD",
      href: "/product/redmi-8128-cm-32-inch-smart-fire-tv-black-ela5577in-2024-lxd39v-7702490"
    },
    {
      id: 2,
      title: "Samsung wondertainment 80 cm (32 Inch) HD Ready LED Smart Tizen TV with Bezel-free Design (UA32T4380) - Latest Edition",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/TVY3jphU22-samsung-ua32t4380akxxl-televison-494267419-i-1-1200wx1200h.jpeg",
      discountPrice: 12990,
      originalPrice: 18990,
      discount: 32,
      badge: "Limited Time Offer",
      badgeColor: "#007FAD",
      href: "/product/samsung-wondertainment-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-bezel-free-design-ua32t4380-latest-edition-lvmqf5-7608528"
    },
    {
      id: 3,
      title: "NVY 109 cm (43 inch) QLED Smart TV, NVQ43SFR1, Black",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/ufoX1j-KLq-nvy-nvq43sfr1-tv-494496080-i-1-1200wx1200h.jpeg",
      discountPrice: 14999,
      originalPrice: 45999,
      discount: 67,
      badge: "Best Qled TV Deal",
      badgeColor: "#14B866",
      href: "/product/nvy-109-cm-43-inch-qled-smart-tv-nvq43sfr1-black-m5v1rp-8836642"
    },
    {
      id: 4,
      title: "Xiaomi A Series 81.28 cm (32 inches) HD Ready Smart Google TV, L32MA-AIN",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/6yk4qBud3d-xiaomi-32-hd-smart-ela5575in-494410614-i-1-1200wx1200h.jpeg",
      discountPrice: 12490,
      originalPrice: 24999,
      discount: 50,
      badge: "Supersaver Deal",
      badgeColor: "#14B866",
      href: "/product/xiaomi-a-series-8128-cm-32-inches-hd-ready-smart-tv-l32ma-ain-lws7rb-7680728"
    },
    {
      id: 5,
      title: "TCL 81.28 cm (32 inch) Full HD QLED Google TV, 32S5K",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/wKX9Z3LwBK-tcl-32s5k-qled-tv-494581039-i-1-1200wx1200h.jpeg",
      discountPrice: 15990,
      originalPrice: 23990,
      discount: 33,
      badge: "New Launch",
      badgeColor: "#14B866",
      href: "/product/tcl-8128-cm-32-inch-full-hd-qled-google-tv-32s5k-m99jvr-9054524"
    }
  ];

  // Refrigerator products data
  const refrigeratorProducts = [
    {
      id: 1,
      title: "LG 224 litres 5 Star Single Door Refrigerator, Scarlet Charm GL D241ASCU",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/ATAIkKB-Lh-lg-refrigerator-gl-d241ascu-493692066-i-1-1200wx1200h.jpeg",
      discountPrice: 22490,
      originalPrice: 29399,
      discount: 24,
      badge: "10% Instant Bank Discount",
      badgeColor: "#14B866",
      href: "/product/lg-224-litres-5-star-single-door-refrigerator-scarlet-charm-gl-d241ascu-lkwga1-7532891"
    },
    {
      id: 2,
      title: "Samsung 183 litres 3 Star Single Door Refrigerator, Elegant Inox RR20C1/2Y23S8",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/CqzeZEUtMC-samsung-rr20c1-2y23s8-refrigerator-493692053-i-1-1200wx1200h.jpeg",
      discountPrice: 16090,
      originalPrice: 19999,
      discount: 20,
      badge: "10% Instant Bank Discount",
      badgeColor: "#14B866",
      href: "/product/samsung-183-litres-3-star-single-door-refrigerator-elegant-inox-rr20c12y23s8-le4aew"
    },
    {
      id: 3,
      title: "Whirlpool 184 Litre 3 Star Direct Cool Single Door Refrigerator, Lumina Steel-Z",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/LVbIxsmBKp-whirlpool-3s-impc-refrigerator-493692323-i-1-1200wx1200h.jpeg",
      discountPrice: 14490,
      originalPrice: 18050,
      discount: 20,
      badge: "10% Instant Bank Discount",
      badgeColor: "#14B866",
      href: "/product/whirlpool-184-litre-3-star-direct-cool-single-door-refrigerator-lumina-steel-z-lfqte3"
    },
    {
      id: 4,
      title: "Haier 265 L 2 Star Double Door Refrigerator, Black Glass, HRB-3152PKG-P",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/uzA6WrSmWz-haier-bmr-blackglass-fridge-494226755-i-1-1200wx1200h.jpeg",
      discountPrice: 30990,
      originalPrice: 48890,
      discount: 37,
      badge: "Limited Time Deal",
      badgeColor: "#FA7D19",
      href: "/product/dummy-haier-bmr-265l-2s-hrb3152pkgp-blackglass-lwt8l2-7681833"
    },
    {
      id: 5,
      title: "Godrej 272 Litre 2 Star Frost Free Double Door Refrigerator, Onyx Black RT RTEONCRYSTAL310B",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/tS3I-45Q6u-godrej-rteoncrystal310b-refrigerator-493692411-i-1-1200wx1200h.jpeg",
      discountPrice: 29190,
      originalPrice: 42090,
      discount: 31,
      badge: "10% Instant Bank Discount",
      badgeColor: "#14B866",
      href: "/product/godrej-272-litre-2-star-frost-free-double-door-refrigerator-onyx-black-rt-rteoncrystal310b-lfqkqz"
    }
  ];

  // Best sellers products data
  const bestSellerProducts = [
    {
      id: 1,
      title: "Apple USB Type C EarPods with mic, Sweat and Water Resistant, High Quality Audio",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/JcEnQVxBlv-apple-usb-typec-earpods-494422743-i-1-1200wx1200h.jpeg",
      discountPrice: 1549,
      originalPrice: 2000,
      discount: 23,
      badge: "Best Seller",
      badgeColor: "#007FAD",
      href: "/product/apple-usb-type-c-earpods-lztugy-8384678",
      rating: 4,
      reviews: 38
    },
    {
      id: 2,
      title: "boAt Nirvana Ion ANC Truly Wireless in-Ear Earbuds with Up to 32 dB Active Noise Cancellation",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/IK3w4Hs00d-boat-nirvana-ion-earbud-494249958-i-1-1200wx1200h.jpeg",
      discountPrice: 2399,
      originalPrice: 9990,
      discount: 76,
      badge: "Selling Fast",
      badgeColor: "#14B866",
      href: "/product/boat-nirvana-ion-anc-true-wireless-earbuds-with-120-hours-total-playback-crystal-black-lsae2l-7536335",
      rating: 4.9,
      reviews: 131
    },
    {
      id: 3,
      title: "Realme Buds Air 5 In-ear Wirless Earphone, Upto 38 hrs of playtime, Fast charging",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/pvHyUpHquz-realme-tws-anc-buds-494249583-i-1-1200wx1200h.jpeg",
      discountPrice: 2299,
      originalPrice: 5999,
      discount: 62,
      href: "/product/realme-buds-air-5-in-ear-wirless-earphone-blue-lo2l31-7534613"
    },
    {
      id: 4,
      title: "boAt Stone 358 Bluetooth Speaker with 10 W RMS Stereo Sound, IPX7 Water Resistance",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/2VVd3KObra-boat-stone-358-black-speaker-493842115-i-1-1200wx1200h.jpeg",
      discountPrice: 1599,
      originalPrice: 3990,
      discount: 60,
      badge: "Limited Time Deal",
      badgeColor: "#FA7D19",
      href: "/product/boat-stone-358-with-10w-rms-stereo-sound-ipx7-water-resistance-tws-feature-up-to-12h-total-playtime-multi-compatibility-modes-and-type-c-charging-li2qn6",
      rating: 4.3,
      reviews: 98
    },
    {
      id: 5,
      title: "OnePlus Nord Buds 2r True Wireless Earbuds with 38hrs Battery Life",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/Wt7ySGbHYu-oneplus-nord-buds-2r-494249957-i-1-1200wx1200h.jpeg",
      discountPrice: 1799,
      originalPrice: 2299,
      discount: 22,
      badge: "Top Rated",
      badgeColor: "#14B866",
      href: "/product/oneplus-nord-buds-2r-true-wireless-earbuds-with-38hrs-battery-life-lsae2l-7536335",
      rating: 4.7,
      reviews: 215
    }
  ];

  // Main carousel banners
  const mainCarouselImages = [
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
    }
  ];

  // Bank offer banners
  const bankOfferImages = [
    {
      id: 1,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1744979815025.jpeg",
      alt: "Federal Bank Credit Card Offer",
      href: "https://www.reliancedigital.in/page/federal-bank-credit-card-offer-tc-apr-2025"
    },
    {
      id: 2,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746014714688.jpeg",
      alt: "ICICI Bank Offer",
      href: "https://www.reliancedigital.in/page/icici-bank-offer-tc-may-2025"
    },
    {
      id: 3,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746014876619.jpeg",
      alt: "IDFC First Bank Offer",
      href: "https://www.reliancedigital.in/page/idfc-first-bank-offer-tc-may-2025"
    },
    {
      id: 4,
      src: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746014986475.jpeg",
      alt: "Kotak Mahindra Bank Offer",
      href: "https://www.reliancedigital.in/page/kotak-mahindra-bank-offer-tc-may-2025"
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Menu Categories Section */}
      {/* <MenuCategories /> */}
      
      {/* Main Image Carousel */}
      <ImageCarousel images={mainCarouselImages} />
      
      {/* TV Products Section */}
      <ProductSection 
        title="Best in Televisions" 
        subtitle="Get Up To 12.5% Instant Bank Discount*"
        viewAllLink="/collection/best-in-televisions-250430"
        products={tvProducts}
      />
      
      {/* Refrigerator Products Section */}
      <ProductSection 
        title="Best Deals on Refrigerators" 
        subtitle="Starting From Rs.10,190"
        viewAllLink="/collection/best-deals-on-refrigerators-starting-from-rs-10190"
        products={refrigeratorProducts}
      />
      
      {/* Bank Offers Carousel */}
      <ImageCarousel images={bankOfferImages} autoSlideInterval={6000} />
      
      {/* Offer Banners Grid */}
      <OfferBanners title="Great Deals On Electronics" />
      
      {/* Best Sellers Products Section */}
      <ProductSection 
        title="Upto 80% off on Best Sellers" 
        subtitle=""
        viewAllLink="/collection/upto-80-off-on-best-sellers-11-03"
        products={bestSellerProducts}
      />
    </div>
  );
};

export default Dashboard;
