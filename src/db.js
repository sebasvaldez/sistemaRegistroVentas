import mongoose from "mongoose";

export const connectDD = async () => {
  try {
    await mongoose.connect("mongodb://localhost/sistemaventas");
    console.log("db connected")
  } catch (error) {
    console.log(error);
  }
};
