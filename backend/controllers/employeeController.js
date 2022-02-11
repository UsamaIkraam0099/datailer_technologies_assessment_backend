const asynchandler = require("express-async-handler");

// Get Employee
const getEmployee = asynchandler(async (req, res) => {
  res.status(200).json({ message: "Get Employees" });
});

// Add Employee
const addEmployee = asynchandler(async (req, res) => {
  const { text } = req.body;
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: `${text}` });
});

// Update Employee
const updateEmployee = asynchandler(async (req, res) => {
  res.status(200).json({ message: `Update Employee ${req.params.id}` });
});

// Delete Employee
const deleteEmployee = asynchandler(async (req, res) => {
  res.status(200).json({ message: `Delete Employee ${req.params.id}` });
});

module.exports = {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
