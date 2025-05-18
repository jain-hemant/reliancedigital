import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="card-wrapper bg-white rounded-md shadow-sm overflow-hidden">
      <div className="card-wrapper__header p-2 flex justify-between items-center">
        {product.badge && (
          <div 
            className="offers-badge text-xs text-white px-2 py-1 rounded-sm" 
            style={{ backgroundColor: product.badgeColor || '#007FAD' }}
          >
            {product.badge}
          </div>
        )}
        <div className="wishlist-wrapper ml-auto">
          <FiHeart className="card-wrapper__wishlist text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>
      
      <a href={product.href} className="card-wrapper__body block p-2">
        <div className="card-image relative pb-[100%] mb-3">
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        
        <h5 className="card-title text-sm font-medium mb-2 line-clamp-2 h-10">{product.title}</h5>
        
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <div className="bg-green-600 text-white text-xs px-1 py-0.5 rounded flex items-center">
                {product.rating} ★
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        )}
        
        <div className="card-wrapper__price-details flex items-center mb-1">
          <span className="card-discount-price font-semibold">₹{product.discountPrice.toLocaleString()}</span>
          {product.discount && (
            <span className="card-offer text-xs text-green-600 ml-2">{product.discount}% OFF</span>
          )}
        </div>
        
        <p className="card-wrapper__amount text-xs text-gray-500">
          MRP <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
        </p>
      </a>
    </div>
  );
};

const ProductSection = ({ title, subtitle, viewAllLink, products, backgroundColor = 'rgb(195, 227, 240)' }) => {
  // Default products if none provided
  const defaultProducts = [
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

  const displayProducts = products || defaultProducts;

  return (
    <div className="wrapper rounded-md shadow-sm mb-6" style={{ backgroundColor }}>
      <div className="head p-4 flex justify-between items-center border-b border-gray-200">
        <div className="title-container">
          <div className="title text-lg font-bold">{title || "Best in Televisions"}</div>
          {subtitle && <div className="subtext text-sm text-gray-600">{subtitle}</div>}
        </div>
        
        {viewAllLink && (
          <a href={viewAllLink} className="view-all flex items-center text-blue-800 hover:underline">
            <div className="btn-text text-sm font-medium mr-1">View All</div>
            <div className="btn-svg">
              <FaChevronRight size={10} />
            </div>
          </a>
        )}
      </div>
      
      <div className="content-wrapper p-4">
        <div className="card-grid-wrapper">
          <div className="card-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
