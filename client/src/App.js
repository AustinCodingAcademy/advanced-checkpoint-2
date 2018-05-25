import React, { Component } from "react";
import ListRecipesContainer from "./containers/ListRecipesContainer";
import AddRecipeContainer from "./containers/AddRecipeContainer";
import DisplayRecipeContainer from "./containers/DisplayRecipeContainer";
import EditRecipeContainer from "./containers/EditRecipeContainer";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Headroom from "headroom.js";

import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.loadRecipes();

    var myElement = document.getElementsByClassName('site-header')[0];

    var headroom  = new Headroom(myElement, {
      offset: 115,
      tolerance: 5
    });

    headroom.init();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          
          <main>
            <Switch>
              <Route exact path="/add" component={AddRecipeContainer} />
              <Route exact path="/recipe/:id/:slug" component={DisplayRecipeContainer} />
              <Route exact path="/edit/:id/:slug" component={EditRecipeContainer} />
              <Route exact path="/delete" component={ListRecipesContainer} />
              <Route exact path="/" component={ListRecipesContainer} />
              <Route component={ErrorPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);
