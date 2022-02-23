import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import './subscribe.css'

const Subscribe = () => {
  return (
    <section className="subscribe">
      <Container>
          <Row>
              <Col md={6}>
                  <div className="info">
                      <h1>Subscribe Now for Get Special Features!</h1>
                      <p>Let's subscribe with us and find the fun.</p>
                      </div>
                  </Col>
              <Col md={6}>
                  <div className='btn'>
                      <Button>Subscribe Now</Button>
                      </div>
                  </Col>
          </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
