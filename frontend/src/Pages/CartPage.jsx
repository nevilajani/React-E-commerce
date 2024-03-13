import React, { useEffect, useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Data } from "./data";

const CartPage = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const fetchdata = () => {
        const email = localStorage.getItem("email");
        if (email) {
            axios.get(`http://localhost:8080/api/users?email=${email}`)
                .then(response => {
                    setUser(response.data);
                    axios.post('http://localhost:8080/api/fetchItems', response.data)
                        .then(response => {
                            setItems(response.data);
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.error('Error while fetching the items:', error);
                        });
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);


    const handleRemoveFromCart = (product) => {
        console.log(product.id);
        const updatedItems = items.filter(item => item!== product.id); // Filter out the removed item
        console.log(updatedItems);
        setItems(updatedItems); // Update the items state to reflect the change immediately on the screen

        const cart = {
            user: user,
            items: [product.id]
        };

        axios.post('http://localhost:8080/api/remove-from-cart', cart)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error while removing item from cart:', error);
            });
    };




    return (
        <>
            <Header/>
            <div>
                {Data.filter(product => items.includes(product.id)).map(product => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button onClick={() => handleRemoveFromCart(product)} className="btn btn-primary">Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                ))}



            </div>
            <Footer/>
        </>
    );
};

export default CartPage;
