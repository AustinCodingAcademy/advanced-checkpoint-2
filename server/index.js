import express from "express";
import mongoose from "mongoose";
var bodyParser = require('body-parser')
const app = express();
require("dotenv").config();
app.use(bodyParser.json())
app.use(express.static("public"));

// mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");
mongoose.connect(process.env.MONGODB_URI);

// mongodb://<dbuser>:<dbpassword>@ds129394.mlab.com:29394/austin-prod

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});
 
const port = process.env.PORT || 3001;
app.use(require('./routes/QuestionRoutes'))
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
