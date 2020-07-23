import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Hello from "./components/hello";

function App() {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(2);
  const onClearVal = () => {
    // setVal1(0);
    setVal2(0);
  };
  return (
    <div className="App">
      <Hello onClearVal={onClearVal} val2={val2}>
        <div>value1: {val1}</div>
      </Hello>
    </div>
  );
}

export default App;
