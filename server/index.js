const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.createConnection("mongodb://nhbs:Nhbs7178@ds121331.mlab.com:21331/checkpoint2");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nhbs:Nhbs7178@ds121331.mlab.com:21331/checkpoint2");

const UserRoutes = require("./routes/UserRoutes.js");

app.use(UserRoutes);




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
