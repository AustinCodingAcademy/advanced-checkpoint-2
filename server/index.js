import express from "express";
import mongoose from "mongoose";
const app = express();

// mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");
mongoose.connect("mongodb://aaronaustintx:airhead88@ds129394.mlab.com:29394/austin-prod");

// mongodb://<dbuser>:<dbpassword>@ds129394.mlab.com:29394/austin-prod
 
const port = process.env.PORT || 3001;
app.use(require('./routes/QuestionRoutes'))
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
