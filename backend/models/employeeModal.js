const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name field is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name field is required"],
    },
    age: {
      type: Number,
      required: [true, "Age field is required"],
    },
    address: {
      type: String,
      required: false,
    },
    ph_number: {
      type: Number,
      required: [true, "Phone Number field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
