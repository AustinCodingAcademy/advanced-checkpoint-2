import express from "express";
import bodyParser from "body-parser";
import PostRoutes from "./Routes/PostRoutes";

import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://geohalbert:4ghhuFff@ds153978.mlab.com:53978/tonyromo");

const app = express();
app.use(bodyParser.json());
app.use(PostRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
