import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "../../components/pricingCard/PricingCard";

import "./plan.css";

const Plan = () => {
  return (
    <section className="plan-section">
      <Container>
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
        <Row>
          <Col md={4}>
            <PricingCard
              title={`Free`}
              price={`Free`}
              feature={[
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices",
              ]}
            />
          </Col>
          <Col md={4}>
            <PricingCard
              title={`Standard Plan`}
              price={`$9 / mo`}
              feature={[
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "Yes Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
              ]}
            />
          </Col>
          <Col md={4}>
            <PricingCard
              title={`Premium Plan`}
              price={`$12 / mo`}
              feature={[
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
                "Get New Features",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Plan;
