import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Counter : {countValue.value}</h2>
      <button
        className="rounded p-2 bg-sky-300 hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700 text-black dark:text-white"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
