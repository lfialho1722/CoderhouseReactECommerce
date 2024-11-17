
import { useState } from 'react';
import { useCart } from './CartContext';
import { collection, addDoc } from 'firebase/firestore';
import db from './../db/db'; 
import './css/Checkout.css';

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart(); // Clear the cart after successful order
    } catch (error) {
      console.error('Error saving order: ', error);
    }
  };

  if (orderId) {
    return (
      <div className="order-confirmation">
        <h2>Thank you for your purchase!</h2>
        <p>Your order ID is: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Todavía no compraste ninguno de nuestros excelentes productos!.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <p className='cart-item'>{item.name} x {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalPrice}</h3>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <button className='order_button' type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
