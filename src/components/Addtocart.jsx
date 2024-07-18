import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Addtocart.css';
import ordernowIcon from '../images/ordernow.png';

const Addtocart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const redirectToContactPage = () => {
    const cartItems = JSON.stringify(cart);
    window.location.href = `email.html?cart=${encodeURIComponent(cartItems)}`;
  };

  const getTotalAmount = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price), 0);
  };

  return (
    
    <div className="shopping-cart">
       {/* Navbar */}
       {/* <nav className="navbar navbar-expand-md" id="navbar">
        <a className="navbar-brand" href="#" id="logo">
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        </div>
      </nav> */}
      
      <h1>Shopping Cart</h1>
      <form id="cart-form" onSubmit={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
              {/* <th>Order Now</th> */}
            </tr>
          </thead>
          <tbody id="cart-items">
            {cart.map((product, index) => (
              <tr key={index} className="cart-item">
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><button className="remove-btn" onClick={() => removeItem(index)}>Remove</button></td>
                <td>
                  {/* <Link to="/contact" className="nav-item">
                    <img src={ordernowIcon} width="200px" alt="Order Now Icon" />
                  </Link> */}
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <p id="total">Total: ₹{getTotalAmount().toFixed(2)}</p>
        <Link to="/contact" className="nav-item">
          <button type="button" className="checkout-btn">Check Out</button>
        </Link>
      </form>
    </div>
  );
};

export default Addtocart;
