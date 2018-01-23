import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import albumRoutes from "./albumRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Music");

const app = express();


app.use(bodyParser.json());
app.use(albumRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});


console.log("HELL YEAH!")