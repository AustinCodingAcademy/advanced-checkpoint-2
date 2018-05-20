let recipes = require('../models/db.json');

export function list(req, res) {
  res.json(recipes);
}

export function post(req, res){
  const recipe = req.body;

  recipes.push(recipe);

  fs.writeFile(__dirname + '/db.json', JSON.stringify(recipes), (err) => {
    if (err)
      return res.status(500).send(err);
  });

  res.json(recipes); 
}

export function show(req, res){
  const id = parseInt(req.params.id, 10);

  res.json(recipes.find(recipe => recipe.id === id));
}

export function edit(req, res){
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
}