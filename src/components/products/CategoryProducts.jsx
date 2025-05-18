import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategoryProducts, setCurrentCategory } from '../../redux/slices/categorySlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const CategoryProducts = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.category);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    if (category) {
      dispatch(setCurrentCategory(category));
      dispatch(fetchCategoryProducts(category));
    }
  }, [category, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const formatCategoryName = (category) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getSortedProducts = () => {
    if (!items || items.length === 0) return [];
    
    const productsCopy = [...items];
    
    switch (sortOption) {
      case 'price-low-high':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'rating':
        return productsCopy.sort((a, b) => {
          const ratingA = a.rating?.rate || 0;
          const ratingB = b.rating?.rate || 0;
          return ratingB - ratingA;
        });
      default:
        return productsCopy;
    }
  };

  const sortedProducts = getSortedProducts();

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center p-4 text-red-600">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">{formatCategoryName(category)}</h1>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="default">Recommended</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      
      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative p-4">
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                  <FiHeart className="text-gray-500 hover:text-red-500" />
                </button>
                
                <div className="h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
              </div>
              
              <div className="p-4 border-t">
                <div className="mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-medium text-gray-900 line-clamp-2 h-12 mb-1">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <div className="bg-green-600 text-white text-xs px-1 py-0.5 rounded flex items-center">
                      {product.rating?.rate || 4.5} ★
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating?.count || 120})
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">
                    ₹{Math.round(product.price * 80)} {/* Converting to INR */}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors"
                  >
                    <FiShoppingCart />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
