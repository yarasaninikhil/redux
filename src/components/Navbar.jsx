import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import './Navbar.css';
import img from '../components/pics/cal.png';
import { BsCartPlus } from 'react-icons/bs';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.count);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleCartClick = () => {
    navigate('/cart'); // Ensure this matches the path in App.js
  };

  return (
    <nav>
      <div className="logo">
        <img src={img} alt="Logo" />
        <h1>PLAY STORE</h1>
      </div>
      <div className={click ? 'links active' : 'links'}>
        <ul>
          <li><Link to="/home">Home <MdArrowDropDown /></Link></li>
          <li><Link to="/games">Games <MdArrowDropDown /></Link></li>
          <li><Link to="/movies">Movies <MdArrowDropDown /></Link></li>
          <li><Link to="/books">Books <MdArrowDropDown /></Link></li>
          <li><Link to="/kids">Kids <MdArrowDropDown /></Link></li>
        </ul>
      </div>
      <div className="btn">
        <p className='en'><IoSearch /> EN <MdArrowDropDown /></p>
        <button className="nav-button">SIGN IN</button>
      </div>
      <div className="icon" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
        <p className='icon'><BsCartPlus /></p>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
      <div className="hum">
        <div className="humBurger" onClick={handleClick}>
          {click ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
