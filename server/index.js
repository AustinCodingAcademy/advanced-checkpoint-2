import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import countryRoutes from "./Routes/CountryRoutes";

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(countryRoutes);