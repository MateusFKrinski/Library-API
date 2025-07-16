import ErrorMessage from "./ErrorMessage.js";

class Error404 extends ErrorMessage {
  constructor(message = "Route not found") {
    super(message, 404);
  }
}

export default Error404;
