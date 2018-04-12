import React, { Component } from "react";
import "./App.css";
import Question from "./containers/QuestionContainer";
 import QuestionContainer from "./containers/QuestionContainer";
 import QuestionsContainer from "./containers/QuestionsContainer";

// import semantic from 'semantic-ui';
// import {Button} from "semantic-ui-react";



import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadQuestions();
  }
  render() {
    return (
      <Router>
      <div>
        Client
        <QuestionContainer />
        <QuestionsContainer />


        {/* <Link to="/questions"><Button>List Questions</Button></Link> */}
        <Switch>
        <Route path="/question/:id" component={Question} />
        {/* <Route path="/questions" component={Main} /> */}
        <Route path="/questions" component={Question} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default (App);


