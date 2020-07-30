import React from "react";
import "./CardSmall.css"

const CardSmall = (props) => {
  return (
    <div className="card-small">
      <p className="card-small-views">Likes</p>
      <p className="card-small-icon">
        <img src={props.icon} alt="" />
      </p>
      <p className="card-small-number">{props.pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {props.growth}%
        </span>
      </p>
    </div>
  );
};

export default CardSmall;
