import React, { Component } from "react";
import "./App.css";
import Question from "./containers/QuestionContainer";
import CreateQuestion from "./containers/CreateQuestionContainer";
import Main from "./containers/MainContainer";
//  import QuestionContainer from "./containers/QuestionContainer";
//  import QuestionsContainer from "./containers/QuestionsContainer";
import {Link} from "react-router-dom";

// import semantic from 'semantic-ui';
 import {Button} from "semantic-ui-react";



import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
// import CreateQuestionContainer from "./containers/CreateQuestionContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadQuestions();
  }
  // render() {
  //   return (
  //     <Router>
  //     <div>
  //       Client
  //       <QuestionContainer />
  //       <QuestionsContainer />
  //       <CreateQuestionContainer />


  //       {/* <Link to="/questions"><Button>List Questions</Button></Link> */}
  //       <Switch>
  //       <Route path="/question/:id" component={Question} />
  //       {/* <Route path="/questions" component={Main} /> */}
  //       <Route path="/questions" component={Question} />
  //       </Switch>
  //     </div>
  //     </Router>
  //   );
  // }

  render() {
    return (
      <Router>
        <div>
        <center> 
          <h1>Question Catalog</h1>
          <Link to="/questions"><Button>List questions</Button></Link>
          <Link to="/createquestion"><Button>Create question</Button></Link>
          <Link to="/editquestion"><Button>Edit question</Button></Link>
        </center>
          <Switch>  
            <Route path="/question/:id" component={Question} />
            <Route path="/questions" component={Main} />
            <Route path="/createquestion" component={CreateQuestion} />
            {/* <Route path="/editquestion" component={EditQuestion} /> */}
          </Switch>
        </div>
      </Router>
    );
  }

}
export default (App);


