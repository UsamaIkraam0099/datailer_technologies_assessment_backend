const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Database connected ${connection.connection.host}`);
  } catch (err) {
    console.log(`err ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
