import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import albumRoutes from "./albumRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://gswan:2119@ds117858.mlab.com:17858/checkpoint");
const app = express();
app.use(express.static("public"));


app.use(bodyParser.json());
app.use(albumRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});


