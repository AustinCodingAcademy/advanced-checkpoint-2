import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nhbs:Nhbs7178@ds121331.mlab.com:21331/checkpoint2");


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
