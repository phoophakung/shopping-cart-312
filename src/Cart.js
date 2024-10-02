import React, { useState } from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, coupon, applyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');

  const applyDiscount = (price) => {
    if (coupon && coupon.type === 'discount') {
      return price - (price * (coupon.value / 100));
    }
    return price;
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + applyDiscount(item.price) * item.quantity;
  }, 0);

  const shippingCost = coupon && coupon.type === 'freeshipping' ? 0 : 100;

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT20') {
      applyCoupon({ type: 'discount', value: 20 });
    } else if (couponCode === 'FREESHIP') {
      applyCoupon({ type: 'freeshipping' });
    } else {
      alert('Invalid coupon code');
    }
    setCouponCode('');
  };

  const handlePurchase = () => {
    // Implement the logic for purchase completion
    alert(`Thank you for your purchase! Total amount: ${(totalPrice + shippingCost).toFixed(2)} บาท`);
    
    // Optionally, clear the cart or reset the state
    // clearCart(); // Call a function to clear the cart if you have one
  };

  return (
    <div className="mt-5">
      <h3>ตะกร้าสินค้า</h3>
      <ul className="list-group">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - {applyDiscount(item.price).toFixed(2)} บาท x {item.quantity}
            <div>
              <button className="btn btn-danger btn-sm mx-2" onClick={() => removeFromCart(item.id)}>Remove</button>
              <button className="btn btn-info btn-sm mx-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button className="btn btn-info btn-sm mx-2" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Coupon Section */}
      <div className="mt-3">
        <input 
          type="text" 
          className="form-control" 
          value={couponCode} 
          onChange={(e) => setCouponCode(e.target.value)} 
          placeholder="Enter coupon code"
        />
        <button className="btn btn-success mt-2" onClick={handleApplyCoupon}>ยืนยันที่จะใช้คูปอง</button>
      </div>

      {/* Display total and shipping cost */}
      <h4 className="mt-4">ราคาสินค้ารวม: {totalPrice.toFixed(2)} บาท</h4>
      <h5>ค่าจัดส่งสินค้า: {shippingCost} บาท</h5>
      <h3>ราคาสินค้ารวมค่าจัดส่ง: {(totalPrice + shippingCost).toFixed(2)} บาท</h3>
      
      {/* Purchase Button */}
      <button className="btn btn-primary mt-3" onClick={handlePurchase}>ยืนยันคำสั่งซื้อสินค้า</button>
    </div>
  );
};

export default Cart;
