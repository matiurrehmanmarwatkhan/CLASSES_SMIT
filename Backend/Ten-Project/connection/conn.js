import mongoose from "mongoose";

export const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log("conneciton to db");
  } catch (error) {
    console.log(error.message);
    console.log("not connected to db");
  }
};
