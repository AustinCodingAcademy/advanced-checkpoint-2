import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import slug from "slug";
import fs from "fs";
// import mongoose from "mongoose";

const app = express();

/* Server uses a locally hosted DB instead of Mongo DB */

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://admin:207914cd@ds137291.mlab.com:37291/checkpoint-2");

const port = process.env.PORT || 3001;
const recipes = require(__dirname + '/db.json');

app.use(bodyParser.json());

app.use(fileUpload());

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get('/recipes', function(req, res){
  res.json(recipes);
});

app.post('/recipes', function(req, res){
  const recipe = req.body;

  recipes.push(recipe);

  fs.writeFile(__dirname + '/db.json', JSON.stringify(recipes), (err) => {
    if (err)
      return res.status(500).send(err);
  });

  res.json(recipes); 
});

app.post('/uploads', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  let file = req.files.thumbnail;

  file.mv(`${__dirname}/uploads/${req.body.slug}`, function(err) {
    if (err)
      return res.status(500).send(err);
  
    res.send(`'${file.name}' uplaoded to: localhost:3001/uploads/${req.body.slug}`);
  });
});

app.get('/uploads/:image', function(req, res){
  const image = req.params.image;

  res.sendFile(`${__dirname}/uploads/${image}`);
});

app.get('/recipe/:id', function(req, res){
  const id = parseInt(req.params.id, 10);

  res.json(recipes.find(recipe => recipe.id === id));
});


app.put('/recipe/:id', function(req, res){
  const recipe = req.body;
  const id = req.params.id;

  const oldRecipe = recipes.find((recipe) => recipe.id == id);
  const index = recipes.indexOf(oldRecipe);
  recipes[index] = recipe;

  fs.writeFile(__dirname + '/db.json', JSON.stringify(recipes), (err) => {
    if (err)
      return res.status(500).send(err);
  });

  res.json(recipes);
});
