import React from "react";

const hello = ({ val, name, sayHello }) => {
  const sayMyHello = () => {
    // alert("my hello");
    sayHello && sayHello();
  };
  return (
    <div>
      {!!val && (<h1>hello, {name}</h1>)}<br/>
      {!val && (<h1>hello, {name}</h1>)}
      <button onClick={sayMyHello}>say hello</button>
    </div>
  );
};

export default hello;
