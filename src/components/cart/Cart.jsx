import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from '../../redux/slices/cartSlice';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  const handleCheckout = () => {
    // In a real app, you would process payment here
    // For now, we'll just navigate to the order confirmation page
    navigate('/order-confirm');
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-gray-500 mb-4 text-5xl">🛒</div>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/products"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Cart Items ({totalQuantity})</h2>
              <button
                onClick={handleClearCart}
                className="text-sm text-red-600 hover:text-red-800 flex items-center"
              >
                <FiTrash2 className="mr-1" />
                Clear Cart
              </button>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-center">
                  <div className="sm:w-20 sm:h-20 mb-4 sm:mb-0 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="sm:ml-4 flex-grow">
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 capitalize mb-2">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="font-bold">₹{Math.round(item.price * 80)}</div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <FiMinus size={14} />
                        </button>
                        
                        <span className="w-8 text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <FiPlus size={14} />
                        </button>
                        
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-1 ml-2 text-red-600 hover:text-red-800"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({totalQuantity} items)</span>
                <span>₹{Math.round(totalAmount * 80)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (5%)</span>
                <span>₹{Math.round(totalAmount * 80 * 0.05)}</span>
              </div>
              
              <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{Math.round(totalAmount * 80 * 1.05)}</span>
              </div>
            </div>
            
            {isAuthenticated ? (
              <button 
                onClick={handleCheckout}
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="block w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors text-center mb-3"
                >
                  Login to Checkout
                </Link>
                <p className="text-xs text-gray-500 text-center">
                  Please login to complete your purchase
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
