import React, {useEffect, useState} from 'react';
import { Data } from './data';
import '../styles/ShopandCart.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from 'axios';
const ShopPage = ({ addToCart }) => {
    const [products, setProducts] = useState(Data);
    const [user, setUser] = useState(null);


        const fetchdata = ()=>{
            console.log("abcde");
            const email = localStorage.getItem("email");
            console.log(email);
            if (email) {
                axios.get(`http://localhost:8080/api/users?email=${email}`)
                    .then(response => {
                        console.log(response);
                        setUser(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching user:', error);
                    });
            }
        }

    useEffect(() => {
       fetchdata();
    }, []);
    const handleAddToCart = (product) => {
        const cart = {
            user:user,
            items: [product.id]
        };

        // Make a POST request to the backend to add the item to the cart
        axios.post('http://localhost:8080/api/add-to-cart', cart)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
            });
    };

  return (
      <>
          <Header/>
    <div className="container mt-5">
      <h1 className="text-center mb-5">Shop Page</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
          <Footer/>
          </>
  );
};

export default ShopPage;
