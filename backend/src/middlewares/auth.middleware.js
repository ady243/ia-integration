import jsonwebtoken from "jsonwebtoken"
import config from "../config/config.js"
import AppError from "../utils/appError.js"

const auth = (req, res, next) => {
  const authHeader = req.headers.authentication ;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError(403, "fail", "You need to sign in");
  }

  const jwt = authHeader.split(' ')[1];

  try {
    const { payload } = jsonwebtoken.verify(jwt, config.security.session.secret);

    req.session = payload;
    next();
  } catch (err) {
    if (err instanceof jsonwebtoken.TokenExpiredError) {
      throw new AppError(403, "fail", "Token expired");
    }

    if (err instanceof jsonwebtoken.JsonWebTokenError) {
      throw new AppError(403, "fail", "You need to sign in");
    }

    throw new AppError(500, "fail", "Internal server error");
  }
}

export default auth;