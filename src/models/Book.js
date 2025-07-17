import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: String,
      required: [true, "'title' parameter is mandatory"],
      trim: true,
    },
    publisher: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: [0, "'price' must be a positive number"],
    },
    pages: {
      type: Number,
      min: [1, "'pages' must be at least 1"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "'author' ID is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const book = mongoose.model("books", bookSchema);

export default book;
