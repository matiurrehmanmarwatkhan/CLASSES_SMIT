import express from "express";
import { config } from "dotenv";
import { connection } from "./connection/conn.js";
import router from "./routes/auth.js";
const app = express();

app.use(express.json());
config();
connection();

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("working correctly");
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
