import { Container, Col, Row } from 'react-bootstrap'
import person2 from "../../assets/Illustration2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './features.css'

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={7}>
            <img src={person2} alt="person" />
          </Col>
          <Col md={5} className='d-flex justify-content-center flex-column'>
            <h2>We Provide Many Features You Can Use</h2>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul class="list-group border-0">
              <li class="list-group-item border-0">
                <FontAwesomeIcon icon={faCheckCircle} />
                Powerfull online protection.
              </li>
              <li class="list-group-item border-0">
                <FontAwesomeIcon icon={faCheckCircle} />
                Internet without borders.
              </li>
              <li class="list-group-item border-0">
                <FontAwesomeIcon icon={faCheckCircle} />
                Supercharged VPN
              </li>
              <li class="list-group-item border-0">
                <FontAwesomeIcon icon={faCheckCircle} />
                No specific time limits.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
