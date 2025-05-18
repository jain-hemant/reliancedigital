import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Categories */}
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-800">Product Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/smartphones" className="text-sm text-gray-600 hover:text-blue-600">Smartphones</a></li>
              <li><a href="/category/laptops" className="text-sm text-gray-600 hover:text-blue-600">Laptops</a></li>
              <li><a href="/category/dslr-cameras" className="text-sm text-gray-600 hover:text-blue-600">DSLR Cameras</a></li>
              <li><a href="/category/televisions" className="text-sm text-gray-600 hover:text-blue-600">Televisions</a></li>
              <li><a href="/category/air-conditioners" className="text-sm text-gray-600 hover:text-blue-600">Air Conditioners</a></li>
              <li><a href="/category/refrigerators" className="text-sm text-gray-600 hover:text-blue-600">Refrigerators</a></li>
              <li><a href="/category/kitchen-appliances" className="text-sm text-gray-600 hover:text-blue-600">Kitchen Appliances</a></li>
              <li><a href="/category/accessories" className="text-sm text-gray-600 hover:text-blue-600">Accessories</a></li>
              <li><a href="/category/personal-care" className="text-sm text-gray-600 hover:text-blue-600">Personal Care & Grooming</a></li>
            </ul>
          </div>

          {/* Site Info */}
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-800">Site Info</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-blue-600">About Reliance Digital</a></li>
              <li><a href="/resq-services" className="text-sm text-gray-600 hover:text-blue-600">ResQ Services</a></li>
              <li><a href="/site-map" className="text-sm text-gray-600 hover:text-blue-600">Site Map</a></li>
              <li><a href="/gift-cards" className="text-sm text-gray-600 hover:text-blue-600">Gift Cards</a></li>
              <li><a href="/corporate-enquiries" className="text-sm text-gray-600 hover:text-blue-600">Corporate Enquiries</a></li>
              <li><a href="/contact-us" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Resource Center */}
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-800">Resource Center</h3>
            <ul className="space-y-2">
              <li><a href="/buying-guides" className="text-sm text-gray-600 hover:text-blue-600">Buying Guides</a></li>
              <li><a href="/manuals" className="text-sm text-gray-600 hover:text-blue-600">Manuals</a></li>
              <li><a href="/how-tos" className="text-sm text-gray-600 hover:text-blue-600">How To's</a></li>
              <li><a href="/compare-products" className="text-sm text-gray-600 hover:text-blue-600">Compare Products</a></li>
              <li><a href="/nearest-store" className="text-sm text-gray-600 hover:text-blue-600">Nearest Store</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-800">Policies</h3>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="text-sm text-gray-600 hover:text-blue-600">Terms of Use</a></li>
              <li><a href="/faqs" className="text-sm text-gray-600 hover:text-blue-600">FAQs</a></li>
              <li><a href="/cancellation-returns" className="text-sm text-gray-600 hover:text-blue-600">Cancellation and Returns Policy</a></li>
              <li><a href="/pricing-payments" className="text-sm text-gray-600 hover:text-blue-600">Pricing & Payments Policy</a></li>
              <li><a href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="/e-waste-policy" className="text-sm text-gray-600 hover:text-blue-600">E-waste Recycling Policy</a></li>
              <li><a href="/emi-cashback" className="text-sm text-gray-600 hover:text-blue-600">EMI and Additional Cashback T&C</a></li>
              <li><a href="/reliance-one" className="text-sm text-gray-600 hover:text-blue-600">RelianceOne Loyalty Program T&C</a></li>
              <li><a href="/caution-notice" className="text-sm text-gray-600 hover:text-blue-600">Caution Notice</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-red-600 flex items-center justify-center rounded mr-4">
              <span className="text-white text-xs font-bold">Reliance Digital</span>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Experience Reliance digital app on mobile:</p>
              <div className="flex space-x-2">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" className="h-8" />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" className="h-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium mb-2">Follow us:</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h4 className="text-sm font-bold mb-2">Disclaimer</h4>
          <p className="text-xs text-gray-600">
            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            Copyright © {new Date().getFullYear()} Reliance Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
