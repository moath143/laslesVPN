import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Rectangle274 from '../../assets/MaskGroup.svg';
import Rectangle275 from '../../assets/MaskGroup-1.svg';
import Rectangle276 from '../../assets/MaskGroup-2.svg';
import Rectangle277 from '../../assets/MaskGroup-3.svg';
import Rectangle278 from '../../assets/MaskGroup-4.svg';

import './companies.css'

const Companies = () => {
    return (
      <section className="companies">
        <Container>
          <Row>
            <Col className='images' md={12}>
              <div>
                <img src={Rectangle274} alt="company" />
              </div>
              <div>
                <img src={Rectangle275} alt="company" />
              </div>
              <div>
                <img src={Rectangle276} alt="company" />
              </div>
              <div>
                <img src={Rectangle277} alt="company" />
              </div>
              <div>
                <img src={Rectangle278} alt="company" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default Companies;
