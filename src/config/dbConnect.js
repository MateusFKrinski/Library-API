import mongoose from "mongoose";
import "dotenv/config.js";

const DATABASE_URL = process.env.DATABASE_URL;

export default async function connectDatabase() {
  await mongoose.connect(DATABASE_URL);

  return mongoose.connection;
};
