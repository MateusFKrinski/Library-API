import errorRequest from "../errors/ErrorRequest.js";

async function paginationMiddleware(req, res, next) {
  try {
    let { limit = 5, page = 1, field = "_id", order = -1 } = req.query;

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    if (limit > 0 && page > 0) {
      const result = await req.pagination
        .sort({ [field]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).json(result);
    } else {
      next(new errorRequest());
    }
  } catch (e) {
    next(e);
  }
}

export default paginationMiddleware;
