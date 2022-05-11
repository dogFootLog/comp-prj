import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main">
        MAIN CONTENT
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "CLOSE" : "OPEN"} SHEET
        </button>
      </div>
      <div className="footer">YOUR MAIN FOOTER</div>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        header={<div className="sheetHeader">SHEET HEADER</div>}
        snapPoints={({ maxHeight }) => 0.7 * maxHeight}
        sibling={<div className="sheetFooter">YOUR MAIN FOOTER</div>}
      >
        <div className="sheetBody">SHEET BODY</div>
      </BottomSheet>
    </>
  );
}

export default App;
