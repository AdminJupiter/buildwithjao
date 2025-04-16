import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaBug,
  FaUsers,
} from "react-icons/fa";

const serviceData = [
  {
    icon: <FaCode size={30} className="text-primary mb-3" />,
    title: "Custom Web Development",
    description: "Tailored solutions built with clean, efficient, and scalable code.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-success mb-3" />,
    title: "Responsive Design",
    description: "Optimized for all devices — from desktops to smartphones.",
  },
  {
    icon: <FaPalette size={30} className="text-warning mb-3" />,
    title: "Landing Pages & Portfolios",
    description: "Visually appealing pages that showcase your brand or work.",
  },
  {
    icon: <FaBug size={30} className="text-danger mb-3" />,
    title: "Bug Fixing & Optimization",
    description: "Squash bugs and improve performance with efficient debugging.",
  },
  // DSDP-2B specific service box
  {
    icon: <FaUsers size={30} className="text-info mb-3" />,
    title: "DSDP-2B Collaboration",
    description: "Working together on projects and tasks for the DSDP-2B class. Let's ace it!",
  },
];

const Services = () => {
  return (
    <section id="services" style={styles.section}>
      <Container>
        <h2 className="text-center text-white mb-5">💼 Services Offered</h2>
        <Row className="g-4">
          {serviceData.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 text-center p-3 border-0 shadow-lg" style={styles.card}>
                {service.icon}
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "#fff",
    padding: "80px 0",
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: "16px",
    transition: "transform 0.3s ease",
  },
};

export default Services;
