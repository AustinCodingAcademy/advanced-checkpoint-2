import express from 'express';
import userRoutes from './routes/UserRoutes';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/checkpoint2');

const app = express();
app.use(bodyParser.json());
app.use(usertRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
