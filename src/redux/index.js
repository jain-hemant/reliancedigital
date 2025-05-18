import { store } from './store';
import { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  registerStart, 
  registerSuccess, 
  registerFailure, 
  logout 
} from './slices/authSlice';
import { 
  fetchProducts, 
  setCategory, 
  selectAllProducts, 
  selectProductsByCategory 
} from './slices/productSlice';
import { 
  addToCart, 
  removeFromCart, 
  decreaseQuantity, 
  clearCart 
} from './slices/cartSlice';

export {
  store,
  // Auth actions
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  // Product actions and selectors
  fetchProducts,
  setCategory,
  selectAllProducts,
  selectProductsByCategory,
  // Cart actions
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart
};
