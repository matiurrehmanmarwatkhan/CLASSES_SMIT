import express from "express";
import { middleware } from "./auth.js";

const app = express();
app.use(express.json());

app.get("/profile", middleware, (req, res) => {
  res.send("Test @ 123");
});

app.delete("/products/:id", middleware, (req, res) => {
  res.send("Product Succesfully Deleted");
});

app.listen(4000, (req, res) => {
  console.log("http://localhost:4000");
});
