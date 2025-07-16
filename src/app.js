import express from "express";
import mongoose from "mongoose";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import error404Middleware from "./middlewares/error404Middleware.js";

const connect = await connectDatabase();

connect.on("error", (error) => {
  console.error("Conection error", error);
});

connect.once("open", () => {
  console.log("Connected");
});

const app = express();

routes(app);

app.use(error404Middleware);
app.use(errorMiddleware);

export default app;
