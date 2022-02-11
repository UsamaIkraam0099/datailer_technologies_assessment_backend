const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/database");
const port = process.env.PORT || 7000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", require("./routes/employeeRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
