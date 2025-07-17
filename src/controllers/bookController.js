import { book } from "../models/index.js";
import { author } from "../models/index.js";
import mongoose from "mongoose";
import Error404 from "../errors/Error404.js";
import errorRequest from "../errors/ErrorRequest.js";

class BookController {
  static async getAllBooks(req, res, next) {
    try {
      const b = book.find();
      req.pagination = b;
      next();
    } catch (err) {
      next(err);
    }
  }

  static async getBookPerFilter(req, res, next) {
    try {
      const query = await processQuery(req.query);
      if (query) {
        const b = book.find(query);
        req.pagination = b;
        next();
      } else {
        res.status(200).json([]);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getBook(req, res, next) {
    try {
      const id = req.params.id;
      const b = await book.findById(id);
      b ? res.status(200).json(b) : next(new Error404("ID not found"));
    } catch (err) {
      next(err);
    }
  }

  static async newBook(req, res, next) {
    const bData = req.body;
    try {
      const a = await author.findById(bData.author);
      if (!a) next(new Error404("ID 'author' not found"));
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
        : next(new Error404("ID not found"));
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
        : next(new Error404("ID not found"));
    } catch (err) {
      next(err);
    }
  }
}

async function processQuery(req) {
  const { publisher, title, author_name } = req;
  const query = {};
  if (publisher) query.publisher = new RegExp(publisher, "i");
  if (title) query.title = new RegExp(title, "i");
  if (author_name) {
    const a = await author.findOne({ name: new RegExp(author_name, "i") });
    query.author = a ? a._id : null;
  }
  Object.keys(query).forEach((key) => {
    if (query[key] === null) {
      delete query[key];
    }
  });
  return Object.keys(query).length > 0 ? query : null;
}

export default BookController;
