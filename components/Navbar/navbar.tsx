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
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/CV">CV</Link>
      </li>
      <li>
        <Link href="/Contacts">Contacts</Link>
      </li>
      <li>
        <Link href="/Projects">Projects</Link>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;