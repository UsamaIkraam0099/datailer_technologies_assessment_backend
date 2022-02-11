const express = require("express");
const router = express.Router();

const {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const { secure } = require("../middleware/authMiddleware");

router.route("/").get(secure, getEmployee).post(secure, addEmployee);

router.route("/:id").delete(secure, deleteEmployee).put(secure, updateEmployee);

module.exports = router;
