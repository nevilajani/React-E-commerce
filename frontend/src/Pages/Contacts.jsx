import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const ContactUsPage = () => {
  return (
      <>
        <Header/>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mt-5 mt-md-0">
          <h3>Our Contact Information</h3>
          <p>If you prefer to reach out to us via phone or email, here are our contact details:</p>
          <ul>
            <li>Phone: 9999999999</li>
            <li>Email: ecommercewebsite@gmail.com</li>
            <li>Address: Rajkot,Gujarat,India</li>
          </ul>
          <p>We look forward to hearing from you!</p>
        </Col>
      </Row>
    </Container>
        <Footer/>
        </>
  );
};

export default ContactUsPage;
