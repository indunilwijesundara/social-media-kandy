import { Link } from "react-router-dom";
import "./taxiItem.css";

const TaxiItem = ({ item }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="searchItem">
      <img src={PF+"taxi/"+item.photo} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.makeAndModel}</h1>
        <span className="siDistance">{item.type}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.phoneNo}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxiItem;
