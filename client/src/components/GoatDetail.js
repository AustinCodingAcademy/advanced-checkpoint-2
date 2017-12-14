import React from "react";

class GoatDetail extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getGoat(id);
  }

  render() {
    if (this.props.goat) {
      return (
        <div>
          <h1>Goat:
          </h1>
          <p>Eye shape: {this.props.goat.eye}</p>
          <p>Goat color: {this.props.goat.color}</p>
          <p>Age: {this.props.goat.age}</p>
          <p>Type: {this.props.goat.type}</p>
          <p>Does yoga? {this.props.goat.yoga}</p>
        </div>
      );
    }
    return <div>Loading Goat.. Please standby!</div>
  }
}

export default GoatDetail;
