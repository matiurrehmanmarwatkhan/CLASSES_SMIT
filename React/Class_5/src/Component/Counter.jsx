import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="text-3xl">Counter</h1>
      <p className="text-2xl text-blue-500">count :{count}</p>
      <button
        onClick={Increment}
        className="border-2 border-amber-100 p-1 rounded-2xl"
      >
        Click Me
      </button>
    </div>
  );
};
export default Counter;
