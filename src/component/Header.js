import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">PERFUME ALCHEMY</a>
      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#">Top Collections</a>
        <a href="#">Special Perfumes</a>
        <a href="#">Cart</a>
        <a href="#">Rating</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}

export default Header;

