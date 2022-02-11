const express = require("express");
const router = express.Router();

const {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.route("/").get(getEmployee).post(addEmployee);

router.route("/:id").delete(updateEmployee).put(deleteEmployee);

module.exports = router;
