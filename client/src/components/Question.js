import React, { Component } from "react";
// import semantic from 'semantic-ui';
// import {Grid} from "semantic-ui-react";

class Question extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getQuestion(id);
  }

  // render() {
  //   //console.log(this.props);
  //   return (
  //     <div>
  //       <Grid centered>
  //         <Grid.Row>
  //         </Grid.Row>
     
  //         <Grid.Column computer={2} tablet={2} mobile={2}>
  //           <h2>Question Detail</h2>
  //             <div><b>ID:</b> {this.props.question.questionid}</div>
  //             <div><b>Name:</b> {this.props.question.name}</div>
  //             <div><b>Length:</b> {this.props.question.length}</div>
  //             <div><b>Subject:</b> {this.props.question.subject}</div>
  //             <div><b>difficulty:</b> {this.props.question.difficulty}</div>
  //         </Grid.Column>
  //       </Grid>
  //     </div>
  //   );
  // }

  //hello
    render() {
      
    console.log(this.props.question._id);
      return (
        
        <div>
       
     
          
            <h2>Question Detail</h2>
              <div><b>ID:</b> {this.props.question.questionid}</div>
              <div><b>Name:</b> {this.props.question.name}</div>
              <div><b>Length:</b> {this.props.question.length}</div>
              <div><b>Subject:</b> {this.props.question.subject}</div>
              <div><b>Difficulty:</b> {this.props.question.difficulty}</div>
         
        
        </div>
    );
  }



  //end
}
export default Question;