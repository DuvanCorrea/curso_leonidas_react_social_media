import React, { Fragment } from "react";
import "./Switch.css"

const Switch = () => {
  return (
    <Fragment>
      <div className="dark-mode">
        <p className="dark-mode-title">Dark mode</p>
        <input type="checkbox" className="checkbox" id="checbox"></input>
        <label className="switch" htmlFor="checbox"></label>
      </div>
    </Fragment>
  );
};

export default Switch;
