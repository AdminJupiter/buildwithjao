import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q61c9s9', 'template_u5mp2ac', form.current, {
        publicKey: 'L6P_mh9s2cdlwo8w_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="py-5 contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.h2
              className="text-center mb-4 text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              📬 Contact Me
            </motion.h2>

            {success && (
              <Alert variant="success" className="text-center">
                Message sent successfully! I’ll get back to you soon. 😊
              </Alert>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Form ref={form} onSubmit={sendEmail} className="shadow p-4 rounded bg-white glass-card">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message..." required />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="social-icons mt-4 d-flex justify-content-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
