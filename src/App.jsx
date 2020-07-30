import React, { Fragment } from "react";
import Header from "./components/Header";
import TodoCardList from "./components/TodoCardList";
import "./CSSglobal.css";
import Overview from "./components/Overview";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
