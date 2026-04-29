import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log("conneciton to db");
  } catch (error) {
    console.log("not connected to db");
    console.log(error.message);
  }
};

export default connectDB;
