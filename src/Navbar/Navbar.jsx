import React from 'react';
import './Navbar.css';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { BiHeart, BiUser } from 'react-icons/bi';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src="//creative-ishi.myshopify.com/cdn/shop/files/Group_3_1_large.png?v=1680153387" alt="logo" />
        </div>
        <div className=' navbar-midSection'>
            <span>TerraCotta</span>
            <span>Gallery</span>
            <span>Included Pages</span>
            <span>About Us</span>
            <span>Blog</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#" className="navbar-link"><BsSearch size="20px" /></a></li>
          <li className="navbar-item"><a href="#" className="navbar-link"><BiUser size="25px" /></a></li>
          <li className="navbar-item"><a href="#" className="navbar-link"><BiHeart size="25px" /></a></li>
          <li className="navbar-item"><a href="#" className="navbar-link"><BsCart2 size="25px" /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
