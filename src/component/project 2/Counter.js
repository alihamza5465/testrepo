import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const fun = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="counter">
        <button onClick={() => fun()}>INC</button>
        <button onClick={() => setCount(count - 1)}>DIC</button>
        <span>{count}</span>
      </div>
      <div>helloo workd</div>
      <div>changes form ali branch</div>
      <>new in afraz</>
    </>
  );
};

export default Counter;
