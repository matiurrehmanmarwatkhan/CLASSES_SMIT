import express from "express";
import { users } from "./user.js";

const app = express();

app.use(express.json());

// Create User
// app.post("/create-user", (req, res) => {
//   const body = req.body;
//   if (body) {
//     res.json({
//       user: body,
//       massage: "User Created Succesfully",
//       success: true,
//     });
//   } else {
//     res.json({ user: null, massage: "Something Wnet Wrong!", success: false });
//   }
// });

// Delete
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json({
      user: deletedUser[0],
      massage: "User Deleted Successfully",
      success: true,
    });
  } else {
    res.json({
      user: null,
      massage: "User not found",
      success: false,
    });
  }
});

// Put method - Update User
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    Object.assign(user, body);
    res.json({
      user: user,
      massage: "User Updated Successfully",
      success: true,
    });
  } else {
    res.json({
      user: null,
      massage: "User not found",
      success: false,
    });
  }
});

// All User
app.get("/users", (req, res) => {
  res.json({
    users: users,
    massage: "User render Sduccesfully",
    success: true,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
