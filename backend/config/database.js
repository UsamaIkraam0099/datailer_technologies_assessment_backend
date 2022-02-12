const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://usama:usama12345@datailercluster.jqm50.mongodb.net/datailerapp?retryWrites=true&w=majority"
    );
    console.log(`Mongo Database connected ${connection.connection.host}`);
  } catch (err) {
    console.log(`err ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
