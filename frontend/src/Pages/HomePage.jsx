// HomePage.jsx

import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import slider1 from "../Assets/slider1.webp";
import slider2 from "../Assets/slider2.webp";
import slider3 from "../Assets/slider3.webp";
import slider4 from "../Assets/slider4.webp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const HomePage = () => {
  // State to manage the index of the current offer
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  // Dummy offer data
  const offers = [
    { id: 1, image: slider1, description: 'Get up to 50% off on selected items' },
    { id: 2, image: slider2, description: 'Buy one, get one free on all shoes' },
    { id: 3, image: slider3, description: 'Buy one, get one free on all shoes' },
    { id: 4, image: slider4, description: 'Buy one, get one free on all shoes' },
    
    // Add more offers as needed
  ];

  // Function to handle sliding to the next offer
  const nextOffer = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  // Function to handle sliding to the previous offer
  const prevOffer = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextOffer();
    }, 1000);
    return () => clearInterval(interval);
  }, [currentOfferIndex]); // Include currentOfferIndex as dependency to reset interval on index change

  return (

    <div className="homepage">
      <Header/>
      <header className="header">
      </header>
      <main className="main-content">
        <section className="offers">
          <h2>Big Offers</h2>
          <div className="offer-slider">
            {/* Map through offers and display only the current offer */}
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className={`offer-item ${index === currentOfferIndex ? 'active' : ''}`}
              >
                <img src={offer.image} alt={`Offer ${offer.id}`} />
                <p>{offer.description}</p>
              </div>
            ))}
          </div>
          {/* Buttons for navigation */}
        </section>
        <section className="hero">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Discover the latest trends and shop your favorites</p>
          <a href="/ShopPage" className="btn">Shop Now</a>
        </section>
        <section className="coupons">
          <h2>Coupons</h2>
          {/* Coupon items go here */}
        </section>
        {/* Additional sections for featured products, new arrivals, etc. */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </footer>
      <Footer/>
    </div>
  );
}

export default HomePage;
