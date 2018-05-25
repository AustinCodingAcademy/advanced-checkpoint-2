import React from "react";
import InputGroup from "./InputGroup";
import slug from "slug";
import { Prompt, Redirect } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import AddThumbnail from "./AddThumbnail";
import humanizeDuration from "humanize-duration";

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: '',
      slug: '',
      thumbnail: { url: '', file: {}, name: '', set: false },
      ingredients: [],
      servings: 0,
      time: { prep: 0, cook: 0, total: 0, formatted: {
        prep: '0 min', cook: '0 min', total: '0 min'
      } },
      steps: [],
      date: { created: 0, edited: 0 }, 
      _deleted: false,
      _isBlocking: false
    }

    this.edit = this.props.edit;
    if (this.edit) this.submitEdit = true;
    this.grabElByClass = (cssClass) => document.getElementsByClassName(cssClass)[0];
  }

  componentDidMount() {
    const grabElByClass = this.grabElByClass;

    this.formElements = {
      addTitle: grabElByClass('title'),
      ingredients: grabElByClass('ingredients'),
      addIngredient: grabElByClass('ingredients').getElementsByTagName('input')[0],
      addStep: grabElByClass('steps').getElementsByTagName('textarea')[0],
      servings: grabElByClass('serves').getElementsByTagName('input')[0],
      prepTime: grabElByClass('time').getElementsByTagName('input')[0],
      cookTime: grabElByClass('time').getElementsByTagName('input')[1],
    }

    document.getElementsByClassName('site-header')[0].classList.add('hide-menu');
    document.getElementsByTagName('main')[0].classList.add('add');
  }

  componentDidUpdate() {
    if (this.submitEdit) {
      const grabElByClass = this.grabElByClass;
      this.formElements.addStep = grabElByClass('steps').getElementsByTagName('textarea')[0];
    }
  }

  componentWillUnmount() {
    /* Release thumbnail object URL for memory optimization */
    if (this.state.thumbnail.file !== {}) window.URL.revokeObjectURL(this.state.thumbnail.file);

    this.props.resetRedirect();

    document.getElementsByClassName('site-header')[0].classList.remove('hide-menu');
    document.getElementsByTagName('main')[0].classList.remove('add');
  }

  /* Utilities */

  _formIsIncomplete = () => {
    alert('Recipe is incomplete! Please fill out missing values.');

    let state = this.state;
    let $ = this.formElements;

    if (state.title === '') $.addTitle.classList.add('incomplete');
    if (state.servings <= 0) $.servings.classList.add('incomplete');
    if (state.time.prep <= 0) $.prepTime.classList.add('incomplete');
    if (state.time.cook < 0) $.cookTime.classList.add('incomplete');
    if (state.steps.length === 0) $.addStep.classList.add('incomplete');
    if (state.ingredients.length === 0) {
      $.ingredients.classList.add('incomplete');
      $.addIngredient.classList.add('incomplete');
    }

    let incompleteInputs = Array.from(document.getElementsByClassName('incomplete'));

    incompleteInputs.forEach(el => {
      el.addEventListener('change', e => {
        if (e.target === $.addIngredient)
          $.ingredients.classList.remove('incomplete');
        else
          e.target.classList.remove('incomplete');
      });
    });
  }

  _blockForm = () => {  this.setState({ _isBlocking: true }); }

  _formatTime = (min) => {
    const toMs = 60000;
    const replacements = {
      hour: 'hr',
      hours: 'hrs',
      minute: 'min',
      minutes: 'min',
      seconds: 'min'
    }

    return humanizeDuration(min * toMs, { conjunction: ' ' }).replace(/hour|minute(s)*|seconds/g, (match) => {
        return replacements[match];
      });
  }

  _preventSubmit = (e) => { if (e.key === 'Enter') e.preventDefault() }

  /* Event Handlers */

  setTitle = (e) => { this.setState({ title: e.target.value }) }

  setThumbnail = (thumbnail) => { 
    this.edit = false;
    this.setState(thumbnail);
  }

  setIngredients = (ingredients) => { this.setState({ ingredients }) }

  setSteps = (steps) => { this.setState({ steps }) }

  setServings = (e) => {
    this.edit = false;
    let servings = parseInt(e.target.value, 10) || '';
    this.setState({ servings });
  }

  setTime = (e) => {
    this.edit = false;
    let type = e.target.id;
    let val = e.target.value;
    let time = parseInt(val, 10) || '';

    this.setState((prevState) => {
      prevState.time[type] = time;
      prevState.time.total = prevState.time.prep + prevState.time.cook;
      prevState.time.formatted[type] = this._formatTime(prevState.time[type]);
      prevState.time.formatted.total = this._formatTime(prevState.time.total);

      return { time: prevState.time }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      let created = Date.now();
      let edited = 0;
  
      if (this.submitEdit) {
        created = prevState.date.created;
        edited = Date.now();
      }

      return {
        title: prevState.title.trim(),
        slug: slug(prevState.title.trim(), { lower: true }) || this.state.id,
        date: { created, edited }
      }
    }, () => {
      let formIsComplete = this.state.title !== '' &&
      this.state.ingredients.length > 0 &&
      this.state.steps.length > 0 &&
      (this.state.servings > 0 || !this.state.servings) &&
      (this.state.time.total > 0 || !this.state.time.total);
  
      if (formIsComplete) 
        this.props.submitRecipe(this.state, this.props.edit);
      else
        this._formIsIncomplete();
    });
  }

  render() {
    if (this.edit) this.state = this.props.state;
    if (this.props.redirect) return <Redirect to={`/recipe/${this.state.id}/${this.state.slug}`} />;

    return (
      <form className="add-recipe" onChange={() => {this.edit = false}} onKeyDown={this._preventSubmit}>
        <input type="text" className="title" placeholder="Recipe Title" onChange={this.setTitle} value={this.state.title} />

        <div className="numericals">
          <div className="numerical-input serves">
            <label className="small">Yields:</label>
            <input type="number" min="0" onChange={this.setServings} value={this.state.servings || ''} />
            <span className="text small">Servings</span>
          </div>

          <div className="numerical-input time">
            <label className="icon"><FontAwesomeIcon icon={faClock} /></label>
            
            <label className="small">Prep:</label>
            <input id="prep" type="number" min="0" onChange={this.setTime} onKeyDown={this.setTime} value={this.state.time.prep || ''} />
            <span className="text small">min</span>

            <label className="small">Cook:</label>
            <input id="cook" type="number" min="0" onChange={this.setTime} onKeyDown={this.setTime} value={this.state.time.cook || ''} />
            <span className="text small">min</span>

            <label className="small">Total:</label>
            <span className="text small">{this.state.time.formatted.total}</span>
          </div>
        </div>

        <div className="col-1">
          <AddThumbnail setThumbnail={this.setThumbnail} file={this.state.thumbnail.file} edit={this.edit} value={this.state.thumbnail} />

          <InputGroup items="ingredients" setItems={this.setIngredients} onChange={this._blockForm} edit={this.edit} value={this.state.ingredients} />
        </div>

        <div className="col-2">
          <InputGroup items="steps" setItems={this.setSteps} onChange={this._blockForm} edit={this.edit} value={this.state.steps} />

          <button className="button submit" onClick={this.onSubmit}>Add Recipe</button>
        </div>

        <Prompt when={this.state._isBlocking} message="Do you want to leave? No changes have been saved yet." />
      </form>
    );
  }
}

export default AddRecipe;