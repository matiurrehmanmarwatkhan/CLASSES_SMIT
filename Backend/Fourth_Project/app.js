import express from "express";
import { log } from "node:console";

const app = express();

app.use(express.json());

// Use Query
// app.get("/products", (req, res) => {
//   const query = req.query;
//   console.log(query);
//   res.send("Pagination");
// });

// test
// app.get("/test", (req, res, next) => {
//   res.send("Test");
//   next();
// });

app.get("/test", (req, res, next) => {
  next({ massage: "Something Went Wrong" });
});

app.use((error, req, res, next) => {
  res.json(error);
  console.log("Irfan Story");
});

// normal middleware
// app.use((req, res, next) => {
//   console.log("Hello World");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Full output");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
