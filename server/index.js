import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";

const app = express();
app.use(json());
app.use(require("./routes").default);

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
const mlabUri = process.env.SECRET || "";
if (!mlabUri) {
  console.log("*************************************************************************");
  console.error("WARNING! Set the SECRET environment variable in .env to your MLAB URI.");
  console.log("*************************************************************************");
}
mongoose.connect(mlabUri, { useMongoClient: true });


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
