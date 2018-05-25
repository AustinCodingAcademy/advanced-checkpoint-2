import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faCalendar } from '@fortawesome/fontawesome-free-regular';
import { faListAlt, faLemon } from '@fortawesome/fontawesome-free-solid';
import timeAgo from 'timeago.js';
import ErrorPage from "./ErrorPage";

let recipe = {
  id: 0,
  title: '',
  slug: '',
  thumbnail: { url: '', file: {}, name: '', set: false },
  ingredients: [],
  servings: 0,
  time: { prep: 0, cook: 0, total: 0, formatted: {
    prep: '0 min', cook: '0 min', total: '0 min'
  } },
  steps: [],
  date: { created: 0, edited: 0 }
}

function DisplayRecipe(props) {
  if (props.recipe.slug === props.match.params.slug) 
    recipe = props.recipe;

  let thumbnail;

  if (recipe.thumbnail.set)
    thumbnail = <img src={recipe.thumbnail.url} className="thumbnail" alt={recipe.thumbnail.name} />

  const timeagoInstance = timeAgo();
  const edit = recipe.date.edited === 0 ? null : <span>Edited: {timeagoInstance.format(recipe.date.edited)}</span>

  if (recipe.id !== 0 && recipe._deleted === false) {
    return (
      <article>
        <header>
          {thumbnail}
          <h2 className="title">
            {recipe.title}
            <Link to={`/edit/${recipe.id}/${recipe.slug}`} className="edit small"><FontAwesomeIcon icon={faEdit} /> Edit</Link>
          </h2>
        </header>
  
        <section className="content">
          <div className="info">
            <span className="serves"><h3 className="small">Yields:</h3>{recipe.servings} Servings</span>
            <span className="time"><h3 className="small">Prep:</h3>{recipe.time.formatted.prep}</span>
            <span className="time"><h3 className="small">Cook:</h3>{recipe.time.formatted.cook}</span>
            <span className="time"><h3 className="small">Total:</h3>{recipe.time.formatted.total}</span>
          </div>

          <div className="ingredients">
            <h3 className="list-title"><FontAwesomeIcon icon={faLemon} />Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
            </ul>
          </div>
    
          <div className="steps">
            <h3 className="list-title"><FontAwesomeIcon icon={faListAlt} />Steps:</h3>
            <ol>
              {recipe.steps.map((step, i) => <li key={i}><span>#{i + 1}</span>{step}</li>)}
            </ol>
          </div>
  
          <div className="date small">
            <FontAwesomeIcon icon={faCalendar} />
            <span>Posted: {timeagoInstance.format(recipe.date.created)}</span>
            {edit}
          </div>
        </section>
      </article>
    );
  } else {
    return <ErrorPage />
  }
}

DisplayRecipe.defaultProps = { recipe }

export default DisplayRecipe;
