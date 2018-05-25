export function addRecipe(recipe) {
  return function(dispatch) {
    delete recipe._isBlocking;
    
    let postRecipe = fetch("/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    });
    let postThumbnail;

    if (recipe.thumbnail.set) {
      let data = new FormData();
      data.append('thumbnail', recipe.thumbnail.file);
      data.append('slug', recipe.thumbnail.slug);

      postThumbnail = fetch("/uploads", {
        method: "POST",
        body: data
      });

      delete recipe.thumbnail.file;
    }

    Promise.all([postRecipe, postThumbnail]).then( () => {
      dispatch(loadRecipes('/recipe'));
    });
  }
}

export function editRecipe(recipe, deleteRecipe = false) {
  return function(dispatch) {
    let id = recipe.id;
    
    let postRecipe = fetch(`/recipe/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    });
    let postThumbnail;

    if (recipe.thumbnail.set && !deleteRecipe) {
      let data = new FormData();
      data.append('thumbnail', recipe.thumbnail.file);
      data.append('slug', recipe.thumbnail.slug);

      postThumbnail = fetch("/uploads", {
        method: "POST",
        body: data
      });

      delete recipe.thumbnail.file;
    }

    Promise.all([postRecipe, postThumbnail]).then( () => {
      if (deleteRecipe)
        dispatch(loadRecipes())
      else
        dispatch(loadRecipes('/recipe'))
    });
  }
}

export function deleteRecipe(id) {
  return function(dispatch) {
    fetch(`/recipe/${id}`)
    .then( (response) => {
      return response.json();
    }).then( (recipe) => {
      recipe._deleted = true;
      dispatch(editRecipe(recipe, true));
    });
  }
}

export function loadRecipes(redirectTo) {  
  return function(dispatch) {
    fetch("/recipes")
    .then( (response) => {
      return response.json();
    }).then( (recipes) => {
      dispatch(recipesLoaded(recipes));

      if (recipes.filter(recipe => recipe._deleted === false).length === 0 && redirectTo !== '/recipe')
        dispatch(redirect('/add'));

      if (redirectTo === '/recipe') {
        dispatch(redirect('/recipe'));
        dispatch(redirect('/add', true));
      }
    });
  }
}

export function redirect(to, reset = false) {
  return {
    type: 'REDIRECT',
    reset,
    to
  }
}

export function recipesLoaded(recipes) {
  return {
    type: 'RECIPES_LOADED',
    value: recipes
  }
}
