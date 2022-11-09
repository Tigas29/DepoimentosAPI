import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost/depoiment");
}

export default connectDatabase;
