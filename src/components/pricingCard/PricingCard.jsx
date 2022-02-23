import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Free from "../../assets/Free.svg";
import './pricingCard.css'

const PricingCard = (props) => {

    const listFeatures = props.feature.map((feature, index) => {
        return (
          <li key={index}>
            <FontAwesomeIcon icon={faCheck} />
            <span>{feature}</span>
          </li>
        );

        
     });
  return (
    <div className="pricing-card">
      <div className="img-card">
        <img src={Free} alt="Free" />
      </div>
      <h2>{props.title}</h2>
      <ul>{listFeatures}</ul>
      <div>
        <h2>{props.price}</h2>
        <button>Select</button>
      </div>
    </div>
  );
};

export default PricingCard;
