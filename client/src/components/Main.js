import React, { Component } from "react";
import QuestionsContainer from "../containers/QuestionsContainer";
import SearchQuestionsContainer from "../containers/SearchQuestionsContainer";


class Main extends Component {
  constructor() {
    super();
  } 

  render() {
      return (
        <div>
          <div style={{float: "left", width: "49%"}}>
            <center><h2>Questions List </h2></center>
            <QuestionsContainer />
          </div>
          <div style={{float: "left", width: "49%"}}>
            {/*}<div><CreateQuestionContainer /></div>{*/}
            <div><SearchQuestionsContainer /></div>
            {/*}<div><EditQuestionContainer /></div>{*/}
          </div>
        </div>
      );
    }
}
export default Main;
