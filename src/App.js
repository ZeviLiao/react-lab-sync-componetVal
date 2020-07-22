import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Hello from "./components/hello";

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const updateVal1 = () => {
    setVal1(2);
    setVal2(2);
  };
  return (
    <div className="App">
      <button onClick={updateVal1}>update</button>
      <Hello val1={val1}></Hello>
      <Hello val1={val2}></Hello>
    </div>
  );
}

export default App;
