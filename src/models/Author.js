import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
      type: String,
      required: [true, "'name' parameter is mandatory"],
      trim: true,
      minlength: [2, "'name' must have at least 2 characters"],
      maxlength: [100, "'name' must have at most 100 characters"],
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    nationality: {
      type: String,
      trim: true,
      default: "",
    },
    birthDate: {
      type: Date,
    },
    deathDate: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const author = mongoose.model("authors", authorSchema);

export default author;
