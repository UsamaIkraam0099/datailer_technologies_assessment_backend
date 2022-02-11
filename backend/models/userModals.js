const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    ph_number: {
      type: Number,
      required: [true, "Phone Number field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
