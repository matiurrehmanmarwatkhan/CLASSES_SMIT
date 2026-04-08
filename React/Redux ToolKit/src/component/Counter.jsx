import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter : {countValue.value}</h2>
      <button
        className=" rounded p-2 bg-sky-300"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
