import { book } from "../models/Book.js";
import { author } from "../models/Author.js";
import mongoose from "mongoose";
import Error404 from "../errors/Error404.js";

class BookController {
  static async getAllBooks(req, res, next) {
    try {
      const b = await book.find();
      res.status(200).json(b);
    } catch (err) {
      next(err);
    }
  }

  static async getBook(req, res, next) {
    try {
      const id = req.params.id;
      const b = await book.findById(id);
      b ? res.status(200).json(b) : new Error404("ID not finded");
    } catch (err) {
      next(err);
    }
  }

  static async newBook(req, res, next) {
    const bData = req.body;
    try {
      const a = await author.findById(bData.author);
      const b = await book.create({ ...bData, author: { ...a._doc } });
      res
        .status(201)
        .json({ message: "Data registered successfully", data: b });
    } catch (err) {
      next(err);
    }
  }

  static async updateBook(req, res, next) {
    try {
      const id = req.params.id;
      const b = await book.findByIdAndUpdate(id, req.body);
      b
        ? res
            .status(200)
            .json({ message: "Data updated successfully", data: b })
        : new Error404("ID not finded");
    } catch (err) {
      next(err);
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const id = req.params.id;
      const b = await book.findByIdAndDelete(id);
      b
        ? res.status(200).json({ message: "Deleted" })
        : new Error404("ID not finded");
    } catch (err) {
      next(err);
    }
  }

  static async getBookPublisher(req, res) {
    const publisher = req.query.publisher;
    try {
      const p = await book.find({ publisher });
      p ? res.status(200).json(p) : new Error404("ID not finded");
    } catch (err) {
      next(err);
    }
  }
}
export default BookController;
