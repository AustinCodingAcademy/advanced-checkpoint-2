import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import ListOfIpadsContainer from './containers/ListOfIpadsContainer';
import IpadDetailContainer from './containers/IpadDetailContainer';
import CreateIpadFormContainer from './containers/CreateIpadFormContainer';
import DeletedIpad from './components/DeletedIpad';

class App extends Component {
  constructor() {
    super();
    this.state = {ipads: []};
  }
  componentDidMount() {
    this.props.loadIpads();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to={"/createipad"}>new ipad</Link><br/>
            <Link to={"/listofipads"}>list of ipads</Link>
            <Switch>

              <Route path="/deletedipad" component={DeletedIpad} />
              <Route path="/createipad" component={CreateIpadFormContainer} />
              <Route path="/ipad/:id" component={IpadDetailContainer} />
              <Route path="/listofipads" component={ListOfIpadsContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);
