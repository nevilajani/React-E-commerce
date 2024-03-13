import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import logo from '../Assets/logo.png'; // Import your logo image
import '../styles/HeaderCss.css'; // Import your header styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/ShopPage" className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
