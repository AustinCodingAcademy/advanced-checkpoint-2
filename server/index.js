import express from "express";
import bodyParser from "body-parser";
import gameRoutes from "./routes/GameRoutes";

import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

const app = express();
app.use(bodyParser.json());
app.use(gameRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
