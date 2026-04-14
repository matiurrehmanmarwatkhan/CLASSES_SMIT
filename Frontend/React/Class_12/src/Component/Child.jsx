import React from "react";

const Ap = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h1>{name}</h1>;
});

const Child = React.memo(({ handleClick }) => {
  const [count, setCount] = useState(0);

  console.log("child Component");

  return (
    <div>
      <Child name="Mati" />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
});

export default Child;
