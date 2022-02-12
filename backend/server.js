const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/database");
const port = process.env.PORT || 7000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

app.use(errorHandler);

app.listen(port, "192.168.0.107", () =>
  console.log(`Server started on port ${port}`)
);
