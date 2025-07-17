import mongoose from "mongoose";
import ErrorMessage from "../errors/ErrorMessage.js";
import ErrorRequest from "../errors/ErrorRequest.js";
import ErrorValidation from "../errors/ErrorValidation.js";
import Error404 from "../errors/Error404.js";

function errorMiddleware(err, req, res, next) {
  console.log(err);

  if (err instanceof mongoose.Error.CastError) {
    new ErrorRequest("One or more incorrect data provided", 400).toResponse(
      res,
    );
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(err).toResponse(res);
  } else if (err instanceof ErrorMessage) {
    err.toResponse(res);
  } else {
    new ErrorMessage().toResponse(res);
  }
}

export default errorMiddleware;
