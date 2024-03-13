import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const AboutPage = () => {
  return (
      <>
          <Header/>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>About Us</h1>
          <p>Welcome to our eCommerce website! We are dedicated to providing you with the best shopping experience possible. Here's a little bit about who we are and what we do:</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Our Mission</h2>
          <p>At our company, we believe in offering high-quality products at competitive prices. We strive to make shopping convenient and enjoyable for our customers.</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Our History</h2>
          <p>Our company was founded with the goal of revolutionizing the online shopping experience. Since then, we have grown into a trusted brand known for our reliability and exceptional customer service.</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Our Team</h2>
          <p>We have a dedicated team of professionals who are passionate about providing you with the best possible service. From our customer support representatives to our product developers, everyone at our company is committed to your satisfaction.</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Contact Us</h2>
          <p>If you have any questions, concerns, or feedback, please don't hesitate to contact us. You can reach us by phone, email, or through our website's contact form.</p>
          <p>Phone: 9999999999</p>
          <p>Email: ecommercewebsite@gmail.com</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Visit Us</h2>
          <p>If you'd like to see our products in person, feel free to visit our physical store. Here's our address:</p>
          <p>Shyam R Limbasiya</p>
          <p>Rajkot, Gujarat, India</p>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Thank you for choosing us for your shopping needs. We look forward to serving you!</p>
        </Col>
      </Row>
    </Container>
          <Footer/>
          </>
  );
};

export default AboutPage;
