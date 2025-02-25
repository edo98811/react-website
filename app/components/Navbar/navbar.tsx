import React from 'react';
import Link from 'next/link'
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <Link href="/" className="logo">
      Edoardo Filippi
    </Link>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <Link href="/cv">cv</Link>
      </li>
      <li>
        <Link href="/about">My work</Link>
      </li>
      <li>
        <Link href="/affiliations">Affiliations</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
);
};

export default Navbar;