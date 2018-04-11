import express from "express";
import mongoose from "mongoose";
import MovieRoutes from "./routes/MovieRoutes";
import bodyParser from "body-parser";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost");

app.use(MovieRoutes);
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
