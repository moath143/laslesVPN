import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Map from "../../assets/HugeGlobal.svg";
import './network.css'

const Network = () => {
    return (
      <section className="network">
        <Container>
          <h1>Huge Global Network of Fast VPN</h1>
          <p>
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
                </p>
                <Row>
                    <Col md={12}>
                        <img src={Map} alt="map" />
                    </Col>
                </Row>
        </Container>
      </section>
    );
};

export default Network;
