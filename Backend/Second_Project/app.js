const express = require("express");

console.log("Hello World");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
