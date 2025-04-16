import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const CustomNavbar = () => {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif" }}>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">🚀 Hire Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    

    </div>
  );
};

export default CustomNavbar;
