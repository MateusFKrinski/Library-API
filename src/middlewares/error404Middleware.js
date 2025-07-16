import Error404 from "../errors/Error404.js";

function error404Middleware(req, res, next) {
  next(new Error404());
}

export default error404Middleware;
