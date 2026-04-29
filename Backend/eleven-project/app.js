import express from "express";
import { config } from "dotenv";
import connectDB from "./config/dbConnection.js";
import { User } from "./models/users.js";

config();
const app = express();
app.use(express.json());
connectDB();

app.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id);
    res.status(200).json({
      message: "your data:",
      success: true,
      data: userData,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
