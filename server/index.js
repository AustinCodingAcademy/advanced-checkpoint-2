const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://tysweet:sweetty1@ds257640.mlab.com:57640/checkpoint2");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const VehicleRoutes = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);


const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
