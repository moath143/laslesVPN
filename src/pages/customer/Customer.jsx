import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// @import "node_modules/bootstrap-avatar/scss/avatar";
import customer1 from "../../assets/Ellipse175.png";
import customer2 from "../../assets/Ellipse174.png";
import customer3 from "../../assets/Ellipse173.png";
import "./customer.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Customer = () => {
  return (
    <section className="customer">
      <Container>
        <Row>
          <h1>Customer</h1>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
          >
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer1}
                    alt="customer1"
                  />
                  <h4>
                    Viezh Robert <span>Warsaw, Poland</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer2}
                    alt="customer2"
                  />
                  <h4>
                    Yessica Christy <span>Shanxi, China</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer3}
                    alt="customer3"
                  />
                  <h4>
                    Kim Young Jou <span>Seoul, South Korea</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer1}
                    alt="customer1"
                  />
                  <h4>
                    Viezh Robert <span>Warsaw, Poland</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer2}
                    alt="customer2"
                  />
                  <h4>
                    Yessica Christy <span>Shanxi, China</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="header-card">
                <div className="name">
                  <img
                    class="avatar avatar-128 bg-light rounded-circle text-white p-2"
                    src={customer3}
                    alt="customer3"
                  />
                  <h4>
                    Kim Young Jou <span>Seoul, South Korea</span>
                  </h4>
                </div>
                <div className="rating">
                  <span>4.5</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="body-card">
                <p>
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </p>
              </div>
            </div>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Customer;
