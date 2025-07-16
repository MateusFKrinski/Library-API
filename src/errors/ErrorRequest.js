import ErrorMessage from "./ErrorMessage.js";

class ErrorRequest extends ErrorMessage {
  constructor(message = "One or more incorrect data provided", s) {
    super(message, 404);
  }
}

export default ErrorRequest;
