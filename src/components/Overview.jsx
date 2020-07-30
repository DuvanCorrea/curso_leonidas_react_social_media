import React from "react";
import "./Overview.css";
import CardSmall from "./CardSmall";

const cardSmallList = [
  {
    icon: "images/icon-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 1,
  },
  {
    icon: "images/icon-twitter.svg",
    pageViews: "52",
    growth: 2257,
    key: 2,
  },
  {
    icon: "images/icon-instagram.svg",
    pageViews: "5462",
    growth: 1375,
    key: 3,
  },
  {
    icon: "images/icon-youtube.svg",
    pageViews: "117",
    growth: 303,
    key: 4,
  },
];

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map((card) => {
            return (
              <CardSmall
                key={card.key}
                icon={card.icon}
                pageViews={card.pageViews}
                growth={card.growth}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
