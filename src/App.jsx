import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.css'

// Components
import Header from './components/Header'
import { Footer, FooterWelcome } from './components/footer'
import Dashboard from './components/dashboard'

// Auth Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

// Product & Cart Components
import Products from './components/products/Products'
import CategoryProducts from './components/products/CategoryProducts'
import Cart from './components/cart/Cart'
import OrderConfirm from './components/checkout/OrderConfirm'

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('user')) !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/category/:category" element={<CategoryProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/order-confirm" 
                element={
                  <ProtectedRoute>
                    <OrderConfirm />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <FooterWelcome />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
