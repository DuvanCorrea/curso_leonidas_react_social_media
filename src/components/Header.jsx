import React from "react";
import "./Header.css";
import Switch from "./Switch";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social media Dashboard</h1>
            <p className="header-total">Total follower : 23,004</p>
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
};

export default Header;
