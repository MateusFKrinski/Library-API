import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAllAuthors);
routes.get("/authors/:id", AuthorController.getAuthor);
routes.post("/authors", AuthorController.newAuthor);
routes.put("/authors/:id", AuthorController.updateAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;
