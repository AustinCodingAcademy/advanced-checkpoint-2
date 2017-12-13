import React, { Component } from "react";
import "./App.css";
import CreateGoatContainer from "./containers/CreateGoatContainer";
import ListofGoatsContainer from "./containers/ListofGoatsContainer";
import GoatDetail from "./components/GoatDetail";
import {Link} from "react-router-dom";
import {
 BrowserRouter,
 Route,
 Switch
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadGoats();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/goats"}>View all Goats</Link></li>
              <li><Link to={"/creategoat"}>Make a new Goat</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/goat/:id" component={GoatDetail} />
            <Route path="/goats" component={ListofGoatsContainer} />
            <Route path="/creategoat" component={CreateGoatContainer} />
          </Switch>
          {/* <div>
            <h2>testing</h2>
            <CreateGoat />
            <ListofGoats goats={['one']} />
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
