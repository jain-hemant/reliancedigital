import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API endpoints for different categories
const API_ENDPOINTS = {
  mobiles: 'https://dummyjson.com/products/category/smartphones',
  laptops: 'https://dummyjson.com/products/category/laptops',
  televisions: 'https://fakestoreapi.com/products/category/electronics',
  refrigerators: 'https://api.escuelajs.co/api/v1/categories/3/products',
  'air-conditioners': 'https://dummyjson.com/products/category/home-decoration',
  'air-coolers': 'https://dummyjson.com/products/category/home-decoration',
  'small-appliances': 'https://api.escuelajs.co/api/v1/categories/4/products',
  earphones: 'https://dummyjson.com/products/category/smartphones',
  'smart-watches': 'https://fakestoreapi.com/products/category/electronics',
  tablets: 'https://dummyjson.com/products/category/smartphones',
  'washing-machines': 'https://api.escuelajs.co/api/v1/categories/3/products',
  'best-deals': 'https://fakestoreapi.com/products'
};

// Async thunk for fetching category products
export const fetchCategoryProducts = createAsyncThunk(
  'category/fetchCategoryProducts',
  async (category, { rejectWithValue }) => {
    try {
      const endpoint = API_ENDPOINTS[category] || 'https://fakestoreapi.com/products';
      const response = await axios.get(endpoint);
      
      // Normalize the response based on API structure
      let products = [];
      
      if (endpoint.includes('dummyjson')) {
        products = response.data.products || [];
      } else if (endpoint.includes('escuelajs')) {
        products = response.data || [];
      } else {
        products = response.data || [];
      }
      
      // Transform products to a consistent format
      return products.map(product => ({
        id: product.id,
        title: product.title || product.name || 'Product',
        price: product.price || 99,
        description: product.description || '',
        category: product.category || category,
        image: product.image || product.images?.[0] || product.thumbnail || 'https://via.placeholder.com/150',
        rating: {
          rate: product.rating?.rate || product.rating || 4.5,
          count: product.rating?.count || 100
        }
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentCategory: '',
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
