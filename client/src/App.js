import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import Part from "./Containers/PartContainer";
import Parts from "./Containers/PartsContainer";
import MissingParts from "./Containers/MissingPartsContainer";
import ResolvedParts from "./Containers/ResolvedPartsContainer";
import LabelParts from "./Containers/LabelPartsContainer";
import CreateParts from "./Containers/CreatePartsContainer";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {parts: []};
  }
  componentDidMount() {
    console.log("app this.props: ",this.props)
    this.props.loadParts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <center>
          <h1>Parts Inventory</h1>
          <Link to="/"><b>Main</b></Link>
          <br /> <Link to="/parts"><b>List Parts</b></Link>
          <br /> <Link to="/missingparts"><b>Missing Parts</b></Link>
          <Link to="/labelparts"><b>Label Parts</b></Link>
          <Link to="/resolvedparts"><b>Resolved Parts</b></Link>
          <Link to="/createPart"><b>Create Part</b></Link>
          <Switch>
            <Route path="/parts/:id" component={Part} />
            <Route path="/parts" component={Parts} />
            <Route path="/missingparts" component={MissingParts} />
            <Route path="/labelparts" component={LabelParts} />
            <Route path="/resolvedparts" component={ResolvedParts} />
            <Route path="/createPart" component={CreateParts} />
            <Route path="/" component={Main} />
          </Switch>
          </center>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
