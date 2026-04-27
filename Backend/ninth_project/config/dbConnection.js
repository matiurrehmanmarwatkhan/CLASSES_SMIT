import mongoose from "mongoose";

export const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB", conn.connection.host);
  } catch (error) {
    console.log("error in mongo db", error.massage);
  }
};
