import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";



const About = () => {
  return (
    <section id="about" style={styles.section}>
      <Container>
        <h2 className="text-center text-white mb-5">
          <FaLaptopCode className="me-2" /> About Me
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-lg border-0" style={styles.card}>
              <Card.Body>
                <Card.Text className="fs-5 text-center text-muted">
                  👋 Hey there! I'm a <strong>freelance web developer</strong> who crafts scalable, responsive, and elegant web experiences. I specialize in{" "}
                  <span className="text-primary">React</span>,{" "}
                  <span className="text-success">Bootstrap</span>, and{" "}
                  <span className="text-warning">Node.js</span>.
                  <br /><br />
                  Whether it's building a portfolio, fixing bugs, or optimizing performance — I turn your ideas into polished, production-ready solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    padding: "80px 0",
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: "15px",
  },
};

export default About;
