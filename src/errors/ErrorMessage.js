class ErrorMessage extends Error {
  constructor(message = "Internal server error", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  toResponse(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status,
    });
  }
}

export default ErrorMessage;
