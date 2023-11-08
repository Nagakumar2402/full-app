const Express = require("express");
const connectDB = require("./config/db.js");
const app = Express();
const Cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Cors());

//server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
