import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import IpadRoutes from "./routes/IpadRoutes";

const app = express();
app.use(bodyParser.json());

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Checkpoint2");

app.use(IpadRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
