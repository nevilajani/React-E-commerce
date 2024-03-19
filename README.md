# REACT E-Commerce Website with Spring Boot Backend

This project is an e-commerce website built using the REACT for the frontend and Spring Boot for the backend.

## Overview

This project aims to provide a full-fledged e-commerce platform where users can sign up, browse products, add items to their cart, and make purchases securely.

The frontend is developed using React.js, utilizing various libraries for UI components and state management.

The backend is developed using Spring Boot, providing RESTful APIs to handle user authentication, product management, cart operations, and order processing.

## Features

- User authentication (sign up, login)
- Product browsing and searching
- Adding/removing items to/from the cart
- Secure checkout process
- User profile management
- Admin panel for product management
- Responsive design for mobile and desktop users

## Prerequisites

Before running the project, ensure you have the following installed:

- MY SQL
- Java Development Kit (JDK)
- Maven

## Installation

1. *Clone the repository:*

    bash
    git clone <repository_url>
    

2. *Install dependencies:*

    bash
    # Go to the frontend directory
    cd frontend
    npm install

    # Go to the backend directory
    cd ../backend
    mvn install
    

3. *Set up environment variables:*

    Create a .env file in the frontend directory with the following content:

    plaintext
    REACT_APP_API_URL=http://localhost:8080/api
    
4. *Start the servers:*

    bash
    # Start the frontend server
    cd frontend
    npm start

    # Start the backend server
    cd ../backend
    mvn spring-boot:run
    

## Usage

- Access the frontend application at http://localhost:3000 in your browser.
- Access the backend API documentation at http://localhost:8080/swagger-ui.html after starting the backend server.

