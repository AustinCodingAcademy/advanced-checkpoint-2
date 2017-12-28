import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CarContainer from "./containers/CarContainer";
import CarsContainer from "./containers/CarsContainer";
import CreateCarsContainer from "./containers/CreateCarsContainer";
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
                <li><Link to={"/cars"}>Cars</Link></li>
                <li><Link to={"/addCar"}>Add Car</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/cars/:id" component={CarContainer} />
              <Route path="/cars" component={CarsContainer} />
              <Route path="/addCar" component={CreateCarsContainer} />
              <Route path="/" component={Main} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);


