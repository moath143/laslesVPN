import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './informationItem.css';

const InformationItem = (props) => {
  return (
    <div className="information-box">
      <div className="information-box-icon">
        <FontAwesomeIcon icon={props.user} />
      </div>
      <div className="information-box-text">
              <h3>{ props.number }</h3>
        <p>{props.name} </p>
      </div>
    </div>
  );
};

export default InformationItem;
