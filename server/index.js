import express from "express";
import bodyParser from "body-parser";

import robotRoutes from "./routes/RobotRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://robotApp:ilikerobots@ds253879.mlab.com:53879/robots");

// mongo ds253879.mlab.com:53879/robots -u robotApp -p ilikerobots


const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  console.log(`Listening on port:${port}`);
  if (err) {
    return console.log("Error", err);
  }
});

app.use(robotRoutes);