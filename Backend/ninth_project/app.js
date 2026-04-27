import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { connection } from "./config/dbConnection.js";

config();
const app = express();

connection();
app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(process.env.PORT, () => {
  console.log("http://localhost:5000");
});
