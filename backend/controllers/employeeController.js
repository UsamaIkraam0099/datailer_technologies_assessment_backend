const asynchandler = require("express-async-handler");

const Employee = require("../models/employeeModal");

// Get Employee
const getEmployee = asynchandler(async (req, res) => {
  const employees = await Employee.find();

  res.status(200).json({ data: employees });
});

// Add Employee
const addEmployee = asynchandler(async (req, res) => {
  const { age, address, firstName, lastName, phNumber } = req.body;

  //   if (!req.body.text) {
  //     res.status(400);
  //     throw new Error("Please add a text field");
  //   }

  const employee = await Employee.create({
    first_name: firstName,
    last_name: lastName,
    age: age,
    address: address,
    ph_number: phNumber,
  });

  res.status(200).json({
    employee: employee,
    message: `${firstName} ${lastName} added successfully!`,
  });
});

// Update Employee
const updateEmployee = asynchandler(async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const employee = await Employee.findById(id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not exist with a specific Id");
  }

  const updatedEmployee = await Employee.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.status(200).json({
    employee: updatedEmployee,
    message: `Employee updated successfully!`,
  });
});

// Delete Employee
const deleteEmployee = asynchandler(async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not exist with a specific Id");
  }

  const { first_name, last_name } = employee;
  employee.remove();

  res.status(200).json({
    id: id,
    message: `${first_name} ${last_name} deleted successfully!`,
  });
});

module.exports = {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
