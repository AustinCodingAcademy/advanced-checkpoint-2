import React from "react";

class CreateGoat extends React.Component {
  constructor() {
    super();

    this.state = {
      goat: {
        eye: "",
        color: "",
        age: "",
        type: "",
        yoga: ""
      }
    }
  }

  render() {
    return (
      <div>
        <h3>New Goat</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createGoat) {
            this.props.createGoat(this.state.goat);
          }
        }}>
          <div>
            Eye shape: <input onChange={(e) => {
              const goat = {eye: e.target.value};
              this.setState({
                goat: Object.assign(this.state.goat, goat)
              });
            }} />
          </div>
          <div>
            Goat color: <input onChange={(e) => {
              const goat = {color: e.target.value};
              this.setState({
                goat: Object.assign(this.state.goat, goat)
              });
            }} />
          </div>
          <div>
            Age: <input type="number" name="age" min="1" max="100" onChange={(e) => {
              const goat = {age: e.target.value};
              this.setState({
                goat: Object.assign(this.state.goat, goat)
              });
            }} />
          </div>
          <div>
            Type: <select name="types" onChange={(e) => {
              const goat = {type: e.target.value};
              this.setState({
                goat: Object.assign(this.state.goat, goat)
              });
            }} >
              <option value="alpine">Alpine</option>
              <option value="dwarf">Dwarf</option>
              <option value="cashmere">Cashmere</option>
              <option value="pygmy">Pygmy</option>
            </select>
          </div>
          <div>
            Does Yoga? <select name="yoga" onChange={(e) => {
              const goat = {yoga: e.target.value};
              this.setState({
                goat: Object.assign(this.state.goat, goat)
              });
            }} >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button>Create Goat!</button>
        </form>
      </div>
    )
  }
}

export default CreateGoat;
