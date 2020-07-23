import React, { useState, useEffect } from "react";

const Hello = ({ children, onClearVal, val2 }) => {
  const onClear = () => {
    onClearVal && onClearVal();
  };

  return (
    <div>
      <button onClick={onClear}>clear value</button>
      {children}
      <h3>value2:{val2}</h3>
    </div>
  );
};

export default Hello;
