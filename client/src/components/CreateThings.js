import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {
        title: "",
        genre: "",
        year: "",
        console: "",
        image: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Save A Game: </h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.props.createGame) {
                this.props.createGame(this.state.game);
              }
              this.state = {
                game: {
                  title: "",
                  genre: "",
                  year: "",
                  console: "",
                  image: ""
                }
              };
              e.target.reset();
            }}
          >
            <div>
              Title:{" "}
              <input
                onChange={e => {
                  const game = { title: e.target.value };
                  this.setState({
                    game: Object.assign(this.state.game, game)
                  });
                }}
              />
            </div>
            <div>
              Genre:{" "}
              <input
                onChange={e => {
                  const game = { genre: e.target.value };
                  this.setState({
                    game: Object.assign(this.state.game, game)
                  });
                }}
              />
            </div>
            <div>
              Year:{" "}
              <input
                onChange={e => {
                  const game = { year: e.target.value };
                  this.setState({
                    game: Object.assign(this.state.game, game)
                  });
                }}
              />
            </div>
            <div>
              Console:{" "}
              <input
                onChange={e => {
                  const game = { console: e.target.value };
                  this.setState({
                    game: Object.assign(this.state.game, game)
                  });
                }}
              />
            </div>
            <div>
              Image:{" "}
              <input
                onChange={e => {
                  const game = { image: e.target.value };
                  this.setState({
                    game: Object.assign(this.state.game, game)
                  });
                }}
              />
            </div>
            <button className="btn green waves-effect waves-light" type="submit" name="action">
              <i className="material-icons right">save</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateThings;
