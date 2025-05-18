import React from 'react';
import { FiSmartphone, FiMonitor, FiHardDrive, FiHeadphones, FiWatch, FiTablet, FiWifi } from 'react-icons/fi';
import { FaSnowflake, FaTshirt, FaGamepad, FaTag, FaChevronDown } from 'react-icons/fa';

const MenuCategories = () => {
  const categories = [
    { name: 'Mobiles', icon: <FiSmartphone />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/jJc56F0NF-menu_Mobiles.png' },
    { name: 'Air Conditioners', icon: <FaSnowflake />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/6kAylQ0cV-menu_Accessories.png' },
    { name: 'Air Coolers', icon: <FaSnowflake />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/jDnjGNKzM-Primary-Menu.jpeg' },
    { name: 'Refrigerators', icon: <FiHardDrive />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/mXaE3y_7l-menu_Kitchen-Appliances.png' },
    { name: 'Televisions', icon: <FiMonitor />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/ro7KmfkN_-menu_Television.png' },
    { name: 'Laptops', icon: <FiMonitor />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/MO-msO1GU-menu_Laptop.png' },
    { name: 'Small Appliances', icon: <FiWifi />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/GhVsBI1rO-Primary-Menu.png' },
    { name: 'Earphones', icon: <FiHeadphones />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/LXuLXjYf5-menu_Earphones.png' },
    { name: 'Smart Watches', icon: <FiWatch />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/TvMZUb1Xg-Primary-Menu.png' },
    { name: 'Tablets', icon: <FiTablet />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/2DoKFV_Ss-Primary-Menu.jpeg' },
    { name: 'Washing Machines', icon: <FaTshirt />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/HAT8U8-9N-Primary-Menu.jpeg' },
    { name: 'Best Deals', icon: <FaTag />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/TvinFGkVU-Primary-Menu.png' },
    { name: 'All Categories', icon: <FaTag />, image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/34MaVOg_1-menu_All-Categories.png', hasArrow: true }
  ];

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-3">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="menu-card bg-gray-100 rounded-full p-2 mb-2 w-14 h-14 flex items-center justify-center">
              <img 
                src={category.image} 
                alt={category.name} 
                className="menu-navigation-icon w-8 h-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.appendChild(
                    document.createTextNode(category.icon)
                  );
                }}
              />
            </div>
            <div className="menu-title-icon-container flex items-center">
              <div className="menu-card-title text-xs text-center">{category.name}</div>
              {category.hasArrow && (
                <div className="navigation__icon__arrow ml-1">
                  <FaChevronDown size={12} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;
