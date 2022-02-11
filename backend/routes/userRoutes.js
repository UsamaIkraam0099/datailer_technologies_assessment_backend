const express = require("express");
const router = express.Router();

const { login, signUp, getUser } = require("../controllers/userController");

const { secure } = require("../middleware/authMiddleware");

router.post("/login", login);
router.post("/signUp", signUp);
router.get("/allUsers", secure, getUser);

module.exports = router;
