import movieIdeas from "./movieIdeas";
import express from "express";
import bodyParser from "body-parser";
import MovieIdeasRoutes from "./routes/MovieIdeasRoutes"
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://psc478:psc478@ds131329.mlab.com:31329/advanced-checkpoint-2");

const app = express();
app.use(bodyParser.json());
app.use(MovieIdeasRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});
