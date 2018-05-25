import React from "react";
import Masonry from "react-masonry-component";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

function ListRecipes(props) {
  let deleteRecipe = (e) => {
    let id = e.currentTarget.dataset.id;

    if (window.confirm('Are you sure you want to delete this recipe?')) {
      document.getElementsByClassName('list-recipes')[0].classList.remove('deleting');
      props.deleteRecipe(id);
    }
  }

  let listClass = 'list-recipes';
  if (props.location.pathname === '/delete') listClass = 'list-recipes deleting';

  if (props.redirect) return <Redirect to='add' />;

  return (
    <Masonry className={listClass} elementType={'ul'} options={{gutter: 40}}>
      {props.recipes.map((recipe, i) => {
        let thumbnail;
        let link = (inner) => <Link to={`/recipe/${recipe.id}/${recipe.slug}`}>{inner}</Link>;

        if (recipe.thumbnail.set)
          thumbnail = link(<img src={recipe.thumbnail.url} className="thumbnail" alt={recipe.thumbnail.name} />);

        return ( <li key={i} className="recipe">
          <button data-id={recipe.id} className="delete" onClick={deleteRecipe}><FontAwesomeIcon icon={faTimes} /></button>
          {thumbnail}
          <h2 className="title">{link(recipe.title)}</h2>
          <footer>
            <span className="serves"><h3 className="small">Yields:</h3>{recipe.servings} Servings</span>
            <span className="icon"><FontAwesomeIcon icon={faClock} /></span>
            <span className="time"><h3 className="small">Prep:</h3>{recipe.time.formatted.prep}</span>
            <span className="time"><h3 className="small">Cook:</h3>{recipe.time.formatted.cook}</span>
            <span className="time"><h3 className="small">Total:</h3>{recipe.time.formatted.total}</span>
          </footer>
        </li> );
      })}
    </Masonry>
  );
}

export default ListRecipes;