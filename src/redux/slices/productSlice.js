import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Using fakestoreapi as a dummy product API
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  selectedCategory: 'all',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCategory } = productSlice.actions;

// Selectors
export const selectAllProducts = (state) => state.products.items;
export const selectProductsByCategory = (state) => {
  const { items, selectedCategory } = state.products;
  if (selectedCategory === 'all') return items;
  return items.filter(product => product.category === selectedCategory);
};

export default productSlice.reducer;
