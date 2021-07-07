import express from "express";
import mongoose from "mongoose";
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds163850.mlab.com:63850/checkpoint2");

const UsersRoutes = require("./routes/UsersRoutes");
app.use(UsersRoutes);



const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

