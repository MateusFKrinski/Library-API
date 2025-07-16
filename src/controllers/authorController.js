import { author } from "../models/Author.js";
import Error404 from "../errors/Error404.js";

class AuthorController {
  static async getAllAuthors(req, res, next) {
    try {
      const a = await author.find();
      res.status(200).json(a);
    } catch (err) {
      next(err);
    }
  }

  static async getAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const a = await author.findById(id);
      a ? res.status(200).json(a) : new Error404("ID not finded");
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
        : new Error404("ID not finded");
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
        : new Error404("ID not finded");
    } catch (err) {
      next(err);
    }
  }
}

export default AuthorController;
