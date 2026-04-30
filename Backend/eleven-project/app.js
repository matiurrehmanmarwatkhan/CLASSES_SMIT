import express from "express";
import { config } from "dotenv";
import connectDB from "./config/dbConnection.js";
import { User } from "./models/users.js";
import BlogRoutes from "./routes/routes.js";

config();
const app = express();
app.use(express.json());
connectDB();

// app.get("api/users", async (req, res) => {
//   try {
//     const users = await User.find({ $gt: 20 });
//     res.status(200).json({
//       message: "Users fetched successfully",
//       users,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

app.use("/api", BlogRoutes);

app.get("/users", async (req, res) => {
  try {
    // const user = await User.find().limit(2);
    // const user = await User.find().limit(2).skip(2);
    const user = await User.countDocuments({ age: { $eq: 20 } });
    res.status(200).json({
      massage: "Your Data",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// app.get("/:id", async (req, res) => {
//   try {
//     const userData = await User.findById(req.params.id);
//     res.status(200).json({
//       message: "your data:",
//       success: true,
//       data: userData,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
// za;
