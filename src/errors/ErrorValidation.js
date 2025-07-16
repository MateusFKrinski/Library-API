import ErrorRequest from "./ErrorRequest.js";

class ErrorValidation extends ErrorRequest {
  constructor(err) {
    const errorMessage = Object.values(err.errors || {})
      .map((error) => error.message)
      .join("; ");
    super(errorMessage, 400);
  }
}

export default ErrorValidation;
