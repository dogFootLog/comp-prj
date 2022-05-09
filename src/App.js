import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "@/routes/Routes";
import ModalRedux from "./component/modalRedux/ModalRedux";
import { Drawer } from "./component/drawer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ModalRedux />
      <Drawer />
    </div>
  );
}

export default App;
