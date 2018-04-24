import express from "express";
import mongoose from "mongoose";
import { existsSync } from "fs";
var bodyParser = require("body-parser")
const app = express();
if (existsSync('.env')) require("dotenv").config();
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
app.use(require('./routes/QuestionRoutes'))
 
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
