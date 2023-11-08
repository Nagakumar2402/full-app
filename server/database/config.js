const mongoose = require("mongoose");

const open = async (uri = process.env.MONGODB_URL) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const close = () => mongoose.disconnect();

module.exports = { open, close };
