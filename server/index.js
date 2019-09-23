import express from "express";
import mongoose from "mongoose";
import entryRoute from "./routes/entryRoute";
import bodyParser from "body-parser";

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cnoteATX:St4rryplough@ds261678.mlab.com:61678/conor-aca");

app.use(bodyParser.json());

app.use(entryRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
