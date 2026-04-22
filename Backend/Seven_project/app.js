import express from "express";
import authroutes from "./routes/user.js";
const app = express();

app.use(express.json());

app.use("/user", authroutes);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
