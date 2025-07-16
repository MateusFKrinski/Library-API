import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: mongoose.Schema.Types.String,
      required: [true, "'title' parameter is mandatory"],
    },
    publisher: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.String },
    author: {
      authorSchema,
    },
  },
  { versionKey: false },
);

export const book = mongoose.model("books", bookSchema);
