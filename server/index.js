import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import slug from "slug";
// import mongoose from "mongoose";

import recipesRoute from "./views/recipes";
import uploadsRoute from "./views/uploads";

const app = express();

/* Server uses a locally hosted DB instead of Mongo DB */

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://admin:207914cd@ds137291.mlab.com:37291/checkpoint-2");

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(fileUpload());

app.use(recipesRoute);
app.use(uploadsRoute);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});