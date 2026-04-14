import React, { useReducer } from "react";

const initialState = {
  count: 0,
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
      }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full transform transition hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Counter App
        </h2>

        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 mb-8 text-center">
          <p className="text-gray-600 text-lg mb-2">Current Count:</p>
          <p className="text-7xl font-bold text-gray-800 animate-pulse">
            {state.count}
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform transition hover:-translate-y-1 flex items-center gap-2"
            onClick={() => dispatch({ type: "increment", payload: 10 })}
          >
            <span className="text-xl">+</span>
            Increment (10)
          </button>

          <button
            className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform transition hover:-translate-y-1 flex items-center gap-2"
            onClick={() => dispatch({ type: "decrement", payload: 5 })}
          >
            <span className="text-xl">-</span>
            Decrement (5)
          </button>

          <button
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform transition hover:-translate-y-1 flex items-center gap-2"
            onClick={() => dispatch({ type: "reset" })}
          >
            <span className="text-xl">⟳</span>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
