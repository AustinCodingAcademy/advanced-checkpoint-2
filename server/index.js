//const express = require("express");
//import mongoose from "mongoose";
const express = require("express");
const bodyParser = require("../node_modules/body-parser");
const coursesRoutes = require("./routes/CourseRoutes");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

const app = express();

app.use(bodyParser.json());
app.use(coursesRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
