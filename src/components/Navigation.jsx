import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiMonitor, FiHardDrive, FiHeadphones, FiWatch, FiTablet, FiWifi } from 'react-icons/fi';
import { FaSnowflake, FaTshirt, FaGamepad, FaTag } from 'react-icons/fa';

const Navigation = () => {
  const categories = [
    { name: 'Mobiles', icon: <FiSmartphone /> },
    { name: 'Air Conditioners', icon: <FaSnowflake /> },
    { name: 'Air Coolers', icon: <FaSnowflake /> },
    { name: 'Refrigerators', icon: <FiHardDrive /> },
    { name: 'Televisions', icon: <FiMonitor /> },
    { name: 'Laptops', icon: <FiMonitor /> },
    { name: 'Small Appliances', icon: <FiWifi /> },
    { name: 'Earphones', icon: <FiHeadphones /> },
    { name: 'Smart Watches', icon: <FiWatch /> },
    { name: 'Tablets', icon: <FiTablet /> },
    // { name: 'Washing Machines', icon: <FaTshirt /> },
    { name: 'Best Deals', icon: <FaTag /> }
  ];

  return (
    <nav className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <ul className="flex whitespace-nowrap py-2 md:py-3 md:justify-between">
          {categories.map((category, index) => (
            <li key={index} className="flex-shrink-0 px-2 md:px-0">
              <Link 
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className="flex flex-col items-center text-gray-800 hover:text-red-600 text-xs md:text-sm"
              >
                <span className="text-lg md:text-xl mb-1">{category.icon}</span>
                <span className="text-center">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
