const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/database");
const port = process.env.PORT || 3000;

const cors = require("cors");

connectDb();

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

app.use(errorHandler);

// For Deploy on Heroku
// app.listen(port, () => console.log(`Server started on port ${port}`));

// For Local Use
app.listen(port, "192.168.2.9", () =>
  console.log(`Server started on port ${port}`)
);
