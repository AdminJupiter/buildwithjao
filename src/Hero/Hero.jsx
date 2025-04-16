import React from "react";
import { Container, Button } from "react-bootstrap";
import bgImage from "../assets/bg.png"; // Update path if needed

const Hero = () => {
  const heroStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "80% 30%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, rgba(30, 60, 114, 0.7), rgba(42, 82, 152, 0.7))",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    textAlign: "center",
    color: "white",
    zIndex: 2,
   
    padding: "30px",
    borderRadius: "12px",
   
    maxWidth: "700px",
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>

      <Container style={contentStyle}>
        <h1 className="display-3 fw-bold" style={{ textShadow: "2px 2px 4px #000" }}>
          Hi, I'm a Freelance Developer
        </h1>
        <p className="lead" style={{ textShadow: "1px 1px 2px #000" }}>
          Turning your ideas into fast, modern websites.
        </p>
        <Button variant="primary" size="lg" href="#contact">
          Hire Me
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
