// Bootstrap and css imports
import { Row, Col, Container, Button } from "react-bootstrap";
import "./hero.css";

// images imports
import person from "../../assets/Illustration.svg";

const Hero = () => {
  return (
    <section>
      <Container>
        <Row className='padding-row'>
          <Col md={6}>
            <h1>Want anything to be easy with LaslesVPN.</h1>
            <p className='mb-5'>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <Button>Get Started</Button>
          </Col>
          <Col md={6}>
            <div className="image">
              <img src={person} alt="person" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
