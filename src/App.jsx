import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CheckboxPage from "./pages/CheckboxPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pages/checkbox" element={<CheckboxPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
