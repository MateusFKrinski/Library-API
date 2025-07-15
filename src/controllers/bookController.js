import { book } from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {
  static async getAllBooks(req, res) {
    try {
      const b = await book.find();
      res.status(200).json(b);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getBook(req, res) {
    try {
      const id = req.params.id;
      const b = await book.findById(id);
      res.status(200).json(b);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async newBook(req, res) {
    const bData = req.body;
    try {
      const a = await author.findById(bData.author);
      const b = await book.create({ ...bData, author: { ...a._doc } });
      res
        .status(201)
        .json({ message: "Data Registered Successfully", data: b });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      const b = await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Data Updated Successfully", data: b });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      const b = await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getBookPublisher(req, res) {
    const publisher = req.query.publisher;
    try {
      const p = await book.find({ publisher });
      res.status(200).json(p);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
export default BookController;
