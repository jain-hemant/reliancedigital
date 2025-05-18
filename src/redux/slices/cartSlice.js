import { createSlice } from '@reduxjs/toolkit';

// Get cart from localStorage if available
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  items: cartItems,
  totalQuantity: cartItems.reduce((total, item) => total + item.quantity, 0),
  totalAmount: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
        
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      
      // Update localStorage
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
