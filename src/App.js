import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  // State to keep track of cart items and coupon
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(null);

  // Add a product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Apply coupon
  const applyCoupon = (newCoupon) => {
    setCoupon(newCoupon);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">สินค้า</h1>
      <ProductList addToCart={addToCart} />
      <Cart 
        cartItems={cartItems} 
        updateQuantity={updateQuantity} 
        removeFromCart={removeFromCart} 
        coupon={coupon} 
        applyCoupon={applyCoupon}
      />
    </div>
  );
};

export default App;
