import { useState } from "react";
import "./App.css";
import { Button, Text, Loader } from "@mantine/core";

function App() {
  return (
    <div className="loader">
      {/* <Text size="xl">Hello Mantine</Text>
      <Button>Click Me</Button> */}
      <Loader color="lime" size="xl" type="dots" />
    </div>
  );
}

export default App;
