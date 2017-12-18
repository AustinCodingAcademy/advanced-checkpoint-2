import express from "express";

import computerRoutes from "./routes/ComputerRoutes";
import bodyParser from "body-parser";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(computerRoutes);

