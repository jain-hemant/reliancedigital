import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { items: cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-600 p-6">
          <h1 className="text-2xl font-bold text-white">My Account</h1>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 rounded-full p-3">
                  <span className="text-red-600 text-xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Account Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-600 text-sm">Cart Items</div>
                <div className="text-2xl font-bold">{cartItems.length}</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-600 text-sm">Wishlist</div>
                <div className="text-2xl font-bold">0</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-600 text-sm">Orders</div>
                <div className="text-2xl font-bold">0</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1 p-2 bg-gray-50 rounded-md">{user.name}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1 p-2 bg-gray-50 rounded-md">{user.email}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Member Since</label>
                <div className="mt-1 p-2 bg-gray-50 rounded-md">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
