import React, { useState } from "react";

export default function UseStateFunctionUpdate() {
  const [number, setNumber] = useState(0);

  const AddNumber = () => {
    setNumber(number + 1);
  };

  const AddAsyncNumberMethod1 = () => {
    console.count("Async function called");
    setTimeout(() => {
      setNumber(number + 1);
    }, 3000);
  };

  // In below example 2 methods are used to calculate next value of Number.
  // Try to use function reference to get new value of number instead of just adding the number.
  const AddAsyncNumberMethod2 = () => {
    console.count("Async function called");
    setTimeout(() => {
      setNumber((prev) => {
        return prev + 1;
      });
    }, 3000);
  };

  return (
    <div className="App">
      Number : {number}
      <div>
        <button onClick={AddNumber}>Add</button>
        <button onClick={AddAsyncNumberMethod2}>AddAsync</button>
      </div>
    </div>
  );
}
