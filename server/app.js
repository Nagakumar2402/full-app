const Express = require("express");
require("dotenv").config();

const app = Express();
const Cors = require("cors");
// middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(Cors());

//server
const port = process.env.PORT || 5000;
const connectDB = require("./database/config.js");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB.open();
