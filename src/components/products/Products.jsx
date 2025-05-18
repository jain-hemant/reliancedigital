import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { showNotification } from '../../redux/slices/notificationSlice';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      // Extract unique categories
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
      
      // Filter products based on selected category
      if (selectedCategory === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === selectedCategory));
      }
    }
  }, [products, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(showNotification({
      message: `${product.title.substring(0, 20)}... added to cart`,
      type: 'success'
    }));
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center p-4 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      
      {/* Categories Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All Products
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
                  ₹{Math.round(product.price * 80)} {/* Converting USD to INR */}
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
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
