// bootstrap and css import
import { Container, Col, Row } from "react-bootstrap";
import "./information.css";
import InformationItem from "../../components/informationItem/InformationItem";

import {
  faServer,
  faUser,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";


const Information = () => {
  return (
    <section>
      <Container className='shadow'>
        <Row>
          <Col md={4}>
            <InformationItem user={faUser} number={`90+`} name={`Users`} />
          </Col>
          <Col md={4}>
            <InformationItem
              user={faMapMarkerAlt}
              number={`30+`}
              name={`Locations`}
            />
          </Col>
          <Col md={4}>
            <InformationItem
              user={faServer}
              number={`50+`}
              name={`Servers`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Information;
