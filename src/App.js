import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "@/routes/Routes";
import ModalRedux from "./component/modalRedux/ModalRedux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ModalRedux />
    </div>
  );
}

export default App;
