import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Products from "./Pages/Products";
import Singleproduct from "./Pages/Singleproduct";
import Cart from "./Pages/CartPage";
import ShopPage from "./Pages/ShopPage";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import  { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactUsPage from "./Pages/Contacts";
const App = () => {
  const [cartItems] = useState([]);
    // Function to add item to cart
    // const addToCart = (item) => {
    //   setCart([...Cart, item]);
    // };
  
      return(
        <>
          <Router>
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/contact" element={<ContactUsPage/>}/>
              <Route path="singleproduct/:id" element={<Singleproduct/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/ShopPage" element={<ShopPage/>}/>
            </Routes>
          </Router>
        </> 
      );
};
export default App;