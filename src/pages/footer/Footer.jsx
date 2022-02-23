import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/Logo.svg'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
          <Row>
              <Col md={3}>
                <div className="logo">
                        <img src={logo} />
                    </div>  
                    <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                    <ul className="social-media">
                        <li>
                        <FontAwesomeIcon icon={faFacebookF} />
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faInstagram} />
                        </li>
                    </ul>
                    <p>©2020LaslesVPN</p>
                </Col>
              <Col md={3} className='centered'>
                <div>
                  <h5>Product</h5>
                  <ul>
                    <li>Download </li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </Col>
              <Col md={3} className='centered'>
              <div>
                <h5>Engage</h5>
                  <ul>
                    <li>LaslesVPN ?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                  </ul>
              </div>
              </Col>
              <Col md={3} className='centered'> 
                <div>
                  <h5>Earn Money</h5>
                  <ul>
                    <li>Affiliate </li>
                    <li>Become Partner</li>
                  </ul>
                </div>
              </Col>
          </Row>
      </Container>
    </footer>
  );
};

export default Footer;
