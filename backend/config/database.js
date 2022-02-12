const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://usama:usama12345@datailercluster.jqm50.mongodb.net/datailerapp?retryWrites=true&w=majority",
      connectionParams
    );
    console.log(`Mongo Database connected ${connection.connection.host}`);
  } catch (err) {
    console.log(`err ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
