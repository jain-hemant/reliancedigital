import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/slices/cartSlice';
import { FiCheck, FiHome, FiPackage } from 'react-icons/fi';

const OrderConfirm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  
  // Generate a random order ID
  const orderId = `RD${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Generate a random delivery date (5-7 days from now)
  const deliveryDays = Math.floor(5 + Math.random() * 3);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
  
  // Format the date as DD MMM YYYY
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // If no items in cart or not authenticated, redirect to home
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (items.length === 0) {
      navigate('/');
    }
  }, [items.length, isAuthenticated, navigate]);

  // Handle going back to home and clearing cart
  const handleBackToHome = () => {
    dispatch(clearCart());
    navigate('/');
  };

  // Calculate order summary
  const subtotal = Math.round(totalAmount * 80);
  const shipping = 0; // Free shipping
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Order Success Header */}
        <div className="text-center mb-8">
          <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
            <FiCheck className="text-green-600 text-4xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">
            Thank you for shopping with Reliance Digital.
          </p>
        </div>
        
        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-red-600 text-white p-4">
            <h2 className="font-semibold text-lg">Order Details</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">ORDER NUMBER</h3>
                <p className="font-semibold">{orderId}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">ORDER DATE</h3>
                <p className="font-semibold">{new Date().toLocaleDateString('en-IN')}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">ESTIMATED DELIVERY</h3>
                <p className="font-semibold">{formattedDeliveryDate}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">PAYMENT METHOD</h3>
                <p className="font-semibold">Cash on Delivery</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium mb-4">Shipping Address</h3>
              <p className="text-gray-700">
                {user.name}<br />
                123 Main Street<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
            </div>
          </div>
        </div>
        
        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold">Order Items ({items.length})</h2>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="p-4 flex items-center">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                </div>
                
                <div className="font-bold text-right">
                  ₹{Math.round(item.price * 80 * item.quantity)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold">Order Summary</h2>
          </div>
          
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (5%)</span>
                <span>₹{tax}</span>
              </div>
              
              <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleBackToHome}
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            <FiHome />
            Back to Home
          </button>
          
          <Link
            to="/profile"
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            <FiPackage />
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
