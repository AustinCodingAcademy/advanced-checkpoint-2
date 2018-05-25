import React from "react";
import Textarea from "react-textarea-autosize";
import arrayMove from "array-move";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTimes } from '@fortawesome/fontawesome-free-solid';

class AddItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }

    if (this.props.items === 'steps') {
      this.itemType = 'step';
      this.itemTypes = 'steps';
      this.itemInput = <Textarea id="add-step" 
        placeholder="Add Step"
        onKeyDown={this.keyboardFunctions} 
        onChange={this.props.onChange} />
    } else {
      this.heading = <h3>Ingredients:</h3>;
      this.itemType = 'ingredient';
      this.itemTypes = 'ingredients';
      this.itemInput = <input type="text" 
        id="add-ingredient" 
        placeholder="Add Ingredient" 
        autoComplete="off" 
        onKeyDown={this.keyboardFunctions} 
        onChange={this.props.onChange} />
    }

    this.edit = this.props.edit;
  }

  componentDidUpdate() {
    this.lastItemId = this.state.items.length - 1;
    this.edit = false;
  }

  /* Utilities */

  _focusOnInput() {
    document.getElementById('add-' + this.itemType).focus();
  }

  _deleteItem(id) {
    this.setState((prevState) => {
      prevState.items.splice(id, 1);
      return { items: prevState.items }
    }, () => {
      this.props.setItems(this.state.items);
    });
  }

  /* Template Functions */

  list = (inner) => (
    this.props.items === 'steps' ? <ol className="step-list">{inner}</ol> : <ul className="ingredient-list">{inner}</ul>
  );

  listNumber = (i) => {
    if (this.props.items === 'steps') return <span className="step-number">{i + 1}.</span>
  }

  /* Event Handlers */

  keyboardFunctions = (e) => {
    if (e.key === 'Enter') {
      if (e.target.id === 'add-' + this.itemType) {
        const item = e.target.value.trim();
        if (item !== '') this.addItem(item);
        e.target.value = '';
        this.props.items === 'steps' ? e.target.classList.remove('incomplete') : e.target.parentElement.classList.remove('incomplete');
      } else { 
        this._focusOnInput();
      }
    }

    const currId = parseInt(e.target.dataset.id, 10);

    if (e.key === 'ArrowUp' && e.target.selectionStart === 0) {
      e.preventDefault();

      const prevId = currId - 1;
      const lastItem = document.querySelector(`textarea.${this.itemType}[data-id="${this.lastItemId}"]`);
      const el = document.querySelector(`textarea.${this.itemType}[data-id="${prevId}"]`);

      if (e.target.id === 'add-' + this.itemType && this.state.items.length > 0) {
        lastItem.focus();
      } else if (el) { 
        el.focus();
      }
    }
    
    if (e.key === 'ArrowDown' && e.target.selectionEnd === e.target.value.length) {
      e.preventDefault();

      const nextId = currId + 1;
      const el = document.querySelector(`textarea..${this.itemType}[data-id="${nextId}"]`);

      el ? el.focus() : this._focusOnInput();
    }
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item]
    }), () => {
      this.props.setItems(this.state.items);
    });
  }

  editItem = (e) => {
    const id = e.target.dataset.id;
    const val = e.target.value;

    this.setState((prevState) => {
      prevState.items[id] = val;
      return { items: prevState.items }
    }, () => {
      this.props.setItems(this.state.items);
    });

    if (val === '') this._deleteItem(id);
  }

  deleteItem = (e) => {
    e.preventDefault();

    const id =  e.currentTarget.dataset.id;

    this._deleteItem(id);
  }

  moveUp = (e) => {
    e.preventDefault();
    e.currentTarget.blur();

    const currId = parseInt(e.currentTarget.dataset.id, 10);
    const prevId = currId - 1;

    if (currId !== 0) {
      this.setState((prevState) => ({  
        items: arrayMove(prevState.items, currId, prevId)
      }), () => {
        this.props.setItems(this.state.items);
      });
    }
  }

  moveDown = (e) => {
    e.preventDefault();
    e.currentTarget.blur();

    const currId = parseInt(e.currentTarget.dataset.id, 10);
    const nextId = currId + 1;

    if (currId !== this.lastItemId) {
      this.setState((prevState) => ({  
        items: arrayMove(prevState.items, currId, nextId)
      }), () => {
        this.props.setItems(this.state.items);
      });
    }
  }

  render() {
    if (this.edit) {
      this.state = { items: this.props.value }
    }

    return (
      <div className={this.itemTypes}>
        {this.heading}

        {this.list(
          this.state.items.map((item, i) => {
            return <li key={i}>
              <button className="delete" data-id={i} onClick={this.deleteItem}><FontAwesomeIcon icon={faTimes} /></button>

              <Textarea data-id={i} className={this.itemType} onKeyDown={this.keyboardFunctions} onChange={this.editItem} value={item} />

              <span className="arrows">
                <span>
                  <button className="arrow" data-id={i} onClick={this.moveUp}><FontAwesomeIcon icon={faChevronUp} /></button>
                  <button className="arrow" data-id={i} onClick={this.moveDown}><FontAwesomeIcon icon={faChevronDown} /></button>
                </span>
              </span>

              {this.listNumber(i)}
            </li>
          })
        )}

        {this.itemInput}
      </div>
    );
  }
}

AddItems.defaultProps = {
  items: 'ingredients'
}

export default AddItems;
