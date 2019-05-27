import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CountryContainer from "./containers/CountryContainer";
import CountriesContainer from "./containers/CountriesContainer";
import CreateCountriesContainer from "./containers/CreateCountriesContainer";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadCars();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/countries"}>List of Countries</Link></li>
                <li><Link to={"/addCountry"}>Add Country</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/countries/:id" component={CountryContainer} />
              <Route path="/countries" component={CountriesContainer} />
              <Route path="/addCountry" component={CreateCountriesContainer} />
              <Route path="/" component={Main} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);

