import React from "react";
import "./style.scss";
import { FaCheck, FaTimes } from "react-icons/fa";
import Button from "../Button";

const PricingCard = ({ className, data, mainCard }) => {
  return (
    <div
      className={`pricing-card ${mainCard ? " main-card" : ""} ${className}`}
    >
      <div className="head">
        <h3 className="price">${data.price}</h3>
        <span>{data.per}</span>
      </div>
      <div className="info">
        <h2>{data.title}</h2>
        <p> {data.text}</p>
      </div>
      <ul className="features-list">
        {data.featutesList.map((item) => {
          return (
            <li>
              <span className="pe-3">
                {item.avilable ? (
                  <FaCheck style={{ color: "#198754" }} />
                ) : (
                  <FaTimes style={{ color: "grey" }} />
                )}
              </span>

              {item.text}
            </li>
          );
        })}
      </ul>
      <Button color={mainCard ? "secondary" : "dark"} rounded>
        {data.action}
      </Button>
    </div>
  );
};

export default PricingCard;
