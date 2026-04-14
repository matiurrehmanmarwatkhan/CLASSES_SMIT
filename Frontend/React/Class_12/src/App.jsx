import React, { useState } from "react";
import DropZone from "./Component/DropZone";

// const Child = React.memo(({ name }) => {
//   console.log("Child render hua");
//   return <h1 className="text-amber-600">{name}</h1>;
// });

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Child name="Mati" />
      <button onClick={() => setCount(count + 1)}>Count {count}</button> */}

      <DropZone />
    </div>
  );
}
export default App;
