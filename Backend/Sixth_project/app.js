import express from "express";
import authroutes from "./routes/auth.js";
const app = express();

app.use(express.json);

app.use("/auth", authrountes);

// app.get("/test", (res, req) => {
//   res.status(200).json({
//     massage: "Work Successfully",
//     success: true,
//   });
// });

app.listen(7000, () => {
  console.log("http://localhost:7000");
});
