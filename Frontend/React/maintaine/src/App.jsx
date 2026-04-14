import { useState } from "react";
import { Button } from "@mantine/core";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ padding: 24 }}>
      <h1>Maintine Button Example</h1>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </Button>
    </div>
  );
}

export default App;
