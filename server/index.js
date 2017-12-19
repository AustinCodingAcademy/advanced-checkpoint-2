import express from "express";
import bodyParser from "body-parser";

import applicationRoutes from "./routes/ApplicationRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");


const WebServer = express();
WebServer.use(bodyParser.json());



WebServer.use(applicationRoutes);


WebServer.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});

const port = process.env.PORT || 3001;
WebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});