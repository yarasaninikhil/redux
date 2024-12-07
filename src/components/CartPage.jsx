import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { removeItemFromCart } from './CartSlice'; // Adjust the path as necessary
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className='cart'>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p> {item.mb}</p>

                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(item.id)} >Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        {/* <Link to="/home">Back to Home</Link> */}
      </div>
    </div>
  );
};

export default CartPage;
