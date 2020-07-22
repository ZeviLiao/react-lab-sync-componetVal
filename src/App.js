import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Hello from "./components/hello";

function App() {
  const [val, setVal] = useState(0);
  const [name, setName] = useState("zevi");

  const sayHello = () => {
    setVal(!val);
    setName("ZZ");
  };

  let myProps = {
    val,
    name,
    sayHello,
  };
  return (
    <div className="App">
      <Hello {...myProps}></Hello>
    </div>
  );
}

export default App;
