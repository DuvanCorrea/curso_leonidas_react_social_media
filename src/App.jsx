import React, { Fragment } from "react";
import Header from "./components/Header";
import TodoCardList from "./components/TodoCardList"
import "./CSSglobal.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoCardList/>
    </Fragment>
  );
}

export default App;
