import { User } from "../models/model.js";

export const sendUser = async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });

    const existEmail = await User.findOne({ email });

    if (!email) {
      res.status(404).json({
        message: "DATa is not exist",
        success: false,
      });
    }

    res.status(200).json({
      message: "successfully sent",
      success: true,
      data: User,
    });
    console.log(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
    console.log(error.message);
  }
};

// read

export const getUser = async (req, res) => {
  const { _id } = res.params;
};
