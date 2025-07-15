import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectDatabase();

connect.on("error", (error) => {
  console.error("Erro de conexão", error);
});

connect.once("open", () => {
  console.log("Conexão realizada");
});

const app = express();

routes(app);

export default app;
