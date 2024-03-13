import React, { useState } from 'react';
import '../styles/Footer.css';
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    const cart = {
      toEmail:email,
      text: message
    };

    axios.post('http://localhost:8080/api/send-email', cart)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
        });
  };

  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo-text">Your E-Commerce Store</h2>
            <p>Stay connected for updates on promotions, new arrivals, and exclusive offers.</p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> 123-456-789</span>
              <span><i className="fas fa-envelope"></i> info@example.com</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-input contact-input"
                  placeholder="Your email address"
                  required
              />
              <textarea
                  rows="4"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-input contact-input"
                  placeholder="Your message"
                  required
              ></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
        </div>
      </footer>
  );
}

export default Footer;
