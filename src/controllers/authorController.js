import { author } from "../models/Author.js";

class AuthorController {
  static async getAllAuthors(req, res) {
    try {
      const a = await author.find();
      res.status(200).json(a);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getAuthor(req, res) {
    try {
      const id = req.params.id;
      const a = await author.findById(id);
      res.status(200).json(a);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async newAuthor(req, res) {
    try {
      const a = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Data Registered Successfully", data: a });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      const a = await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Data Updated Successfully", data: a });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

export default AuthorController;
