import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { FiSearch, FiMapPin, FiShoppingCart, FiUser, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const { totalQuantity } = useSelector(state => state.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };
  
  const handleLogout = () => {
    dispatch(logout());
    setShowUserDropdown(false);
    navigate('/');
  };

  return (
    <header className="w-full bg-red-600 text-white">
      {/* Top header with logo, search, and user actions */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Mobile menu button */}
          <div className="md:hidden self-start">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <a href="/dashboard" className="flex items-center">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl">Reliance</span>
                <span className="text-white font-bold text-xl ml-1">Digital</span>
              </div>
            </a>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-1/2 relative">
            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Products & Brands"
                className="w-full px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-gray-100 px-4 py-2 text-gray-600">
                <FiSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-6">
            <Link to="/location" className="flex items-center text-sm hover:text-gray-200">
              <FiMapPin className="mr-1" />
              <span className="hidden sm:inline">Pick your location</span>
            </Link>
            
            <Link to="/cart" className="flex items-center text-sm hover:text-gray-200 relative">
              <FiShoppingCart className="mr-1" />
              <span className="hidden sm:inline">Cart</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
            
            <Link to="/wishlist" className="flex items-center text-sm hover:text-gray-200">
              <FaHeart className="mr-1" />
              <span className="hidden sm:inline">Wishlist</span>
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleUserDropdown}
                  className="flex items-center text-sm hover:text-gray-200 focus:outline-none"
                >
                  <FiUser className="mr-1" />
                  <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
                </button>
                
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      My Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <FiLogOut className="mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-sm hover:text-gray-200">
                <FiUser className="mr-1" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation - desktop view */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <Navigation />
      </div>

      {/* Navigation - mobile view */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200`}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
