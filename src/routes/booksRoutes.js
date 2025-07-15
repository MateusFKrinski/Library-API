import express from "express";
import bookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", bookController.getAllBooks);
routes.get("/books/search", bookController.getBookPublisher);
routes.get("/books/:id", bookController.getBook);
routes.post("/books", bookController.newBook);
routes.put("/books/:id", bookController.updateBook);
routes.delete("/books/:id", bookController.deleteBook);

export default routes;
