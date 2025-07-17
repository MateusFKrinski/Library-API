import { author } from "../models/index.js";
import Error404 from "../errors/Error404.js";

class AuthorController {
  static async getAllAuthors(req, res, next) {
    try {
      const a = author.find();
      req.pagination = a;
      next();
    } catch (err) {
      next(err);
    }
  }

  static async getAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const a = await author.findById(id);
      a ? res.status(200).json(a) : next(new Error404("ID not found"));
    } catch (err) {
      next(err);
    }
  }

  static async newAuthor(req, res, next) {
    try {
      const a = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Data registered successfully", data: a });
    } catch (err) {
      next(err);
    }
  }

  static async updateAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const a = await author.findByIdAndUpdate(id, req.body);
      a
        ? res
            .status(200)
            .json({ message: "Data updated successfully", data: a })
        : next(new Error404("ID not found"));
    } catch (err) {
      next(err);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const a = await author.findByIdAndDelete(id);
      a
        ? res.status(200).json({ message: "Deleted" })
        : next(new Error404("ID not found"));
    } catch (err) {
      next(err);
    }
  }
}

export default AuthorController;
