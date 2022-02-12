const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");

const User = require("../models/userModals");

const secure = asynchandler(async (req, res, next) => {
  let isToken;
  const { headers } = req;
  const { authorization } = headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      isToken = authorization.split(" ")[1];
      const verifyToken = jwt.verify(isToken, process.env.JWT_SECRET_KEY);
      const { user } = verifyToken;
      const { id } = user;
      req.user = await User.findById(id);
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Unauthorized");
    }
  }

  if (!isToken) {
    res.status(401);
    throw new Error("Unauthorized, JWT token is missing");
  }
});

module.exports = { secure };
