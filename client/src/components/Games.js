import React, { Component } from "react";
import { Link } from "react-router-dom";

class Games extends Component {
  handleDeleteBtn(game) {
    console.log(game);
    if (this.props.deleteGame) {
      this.props.deleteGame(game._id);
    }
  }

  render() {
    const gamesDiv = this.props.games.map(game => {
      return (
        <div key={game._id}>
          <h1>{game.title}</h1>
          <Link
            to={"/game/" + game._id}
            style={{ marginRight: "5px" }}
            className="btn waves-effect waves-light light-green text-white"
          >
            <i className="large material-icons">view_list</i>
          </Link>
          <button
            className="btn red waves-effect waves-light"
            type="submit"
            name="action"
            onClick={() => this.handleDeleteBtn(game)}
          >
            Delete
            <i className="material-icons right">cancel</i>
          </button>
        </div>
      );
    });
    return <div>{gamesDiv}</div>;
  }
}
export default Games;
