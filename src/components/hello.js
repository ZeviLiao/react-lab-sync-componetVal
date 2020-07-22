import React, { useState, useEffect } from "react";

const Hello = ({ val1 }) => {
  const [value, setValue] = useState(val1);
  useEffect(() => {
    setValue(val1);
  }, [val1]);

  return (
    <div>
      {value}
    </div>
  );
};

export default Hello;
