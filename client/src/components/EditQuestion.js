import React from "react";
import {Dropdown, Input, Button, Grid} from "semantic-ui-react";


class EditQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
        fieldsVisible: false,
        nameEditFlagVisible: false,
        subjectEditFlagVisible: false,
        lengthEditFlagVisible: false,
        difficultyEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      question: {
        _id:"",
        questionid: "",
        name: "",
        length: "",
        subject: "",
        difficulty: "",
      },
    };
  }

  selectID = (e, { value }) => {
    let tempQuestion = this.props.questions.filter((c) => { 
        return c.questionid === value; 
    });
    //console.log(tempquestion);
    //console.log(value);
    const question = {_id: tempQuestion[0]._id,
                    questionid: value,
                    name: tempQuestion[0].name,
                    subject: tempQuestion[0].subject,
                    length: tempQuestion[0].length,
                    difficulty: tempQuestion[0].difficulty,
                     };
    
    this.setState({
      fieldsVisible: true,
      question: Object.assign(this.state.question,question)
    })
    //console.log(this.state.question);
  }

  render() {
    let questionIDs = [];
    questionIDs = this.props.questions.map(function(c){
        return {
            text: c.questionid + " - " + c.name,
            value: c.questionid
        }
    });
    let nameEditFlag = "";
    if (this.state.nameEditFlagVisible === true ){
      nameEditFlag= "Please enter a valid name (letters and spaces only)";
    }
    else{
      nameEditFlag = "";
    }
    let subjectEditFlag = "";
    if (this.state.subjectEditFlagVisible === true ){
      subjectEditFlag= "Please enter a valid subject (letters only)";
    }
    else{
      subjectEditFlag= "";
    }
    let lengthEditFlag = "";
    if (this.state.lengthEditFlagVisible === true ){
      lengthEditFlag= "Please enter a valid length (numbers only)";
    }
    else{
      lengthEditFlag= "";
    }
    let difficultyEditFlag = "";
    if (this.state.difficultyEditFlagVisible === true ){
        difficultyEditFlag= "Please enter a valid difficulty (letters and spaces only)";
    }
    else{
        difficultyEditFlag= "";
    }
    let errorEditFlag = "";
    if (this.state.errorEditFlagVisible === true ){
      errorEditFlag= "Cannot edit question. Please fix error first and make sure all fields are populated.";
    }
    else{
      errorEditFlag= "";
    }
    let successEditFlag = "";
    if (this.state.successEditFlagVisible === true ){
        successEditFlag= "question Successfully Edited";
    }
    else{
        successEditFlag= "";
    }
    let changeFields = "";
    if (this.state.fieldsVisible){
        changeFields = <div>
                            <div>
                                <center>Name:</center><Input placeholder="Letters and Spaces" value={this.state.question.name} onChange={(e) => {
                                    const question = {name: e.target.value,};
                                    this.setState({ 
                                        question: Object.assign(this.state.question,question)
                                    });
                                    if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){    
                                        this.setState({
                                            nameEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                            nameEditFlagVisible: true
                                            });

                                    }
                                }} />
                            </div>
                            {nameEditFlag}
                            <div>
                                <center>Subject:</center><Input placeholder="Letters Only" value={this.state.question.subject} onChange={(e) => {
                                    const question = {subject: e.target.value,};
                                    this.setState({
                                        question: Object.assign(this.state.question,question)
                                    });
                                    if (/^[a-zA-Z]+$/.test(e.target.value) || e.target.value === ""){   
                                        this.setState({
                                        subjectEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                        subjectEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {subjectEditFlag}
                            <div>
                                <center>Length:</center><Input placeholder="Number" value={this.state.question.length} onChange={(e) => {
                                    const question = {length: e.target.value,};
                                        this.setState({
                                            question: Object.assign(this.state.question,question)
                                        });
                                    if (/^[0-9]+$/.test(e.target.value) || e.target.value === ""){    
                                        this.setState({
                                            lengthEditFlagVisible: false,
                                        });
                                        }
                                        else{
                                        this.setState({
                                            lengthEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {lengthEditFlag}
                            <div>
                            <center>difficulty:</center><Input placeholder="Letters and Spaces" value={this.state.question.difficulty} onChange={(e) => {
                                        const question = {difficulty: e.target.value,};
                                        this.setState({
                                            question: Object.assign(this.state.question,question)
                                        });
                                        if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){    
                                        this.setState({
                                            difficultyEditFlagVisible: false,
                                        });
                                        }
                                        else{
                                        this.setState({
                                            difficultyEditFlagVisible: true
                                            });

                                    }
                                }} />
                            </div>
                            {difficultyEditFlag}
                    </div>
    }


    return (
        
      <div>
          <Grid centered>
            <Grid.Row>
            </Grid.Row>
     
                <Grid.Column computer={2} tablet={2} mobile={2}>
                    <div>
                    <h2>Edit question</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.updatequestion && this.state.nameEditFlagVisible === false &&
                        this.state.lengthEditFlagVisible === false && this.state.subjectEditFlagVisible === false  && 
                        this.state.difficultyEditFlagVisible === false && this.state.question.name !== "" && 
                        this.state.question.length !== "" && this.state.question.subject !== "" && this.state.question.difficulty !== "") {
                        
                            this.props.updatequestion(this.state.question);
                            this.setState({
                                errorEditFlagVisible: false,
                                successEditFlagVisible: true
                            });
                        }
                        else{
                            this.setState({
                                errorEditFlagVisible: true,
                                successEditFlagVisible: false
                                });
                        }
                        }
                    }>
                        <div className="dropdown">
                        Select question ID to Edit: 
                        <Dropdown placeholder="questions" fluid selection onChange={this.selectID} options={questionIDs} />
                        </div>
                        {changeFields}
                        <div><center><Button>Edit</Button></center></div>
                        {errorEditFlag}
                        {successEditFlag}
                    </form>     
                </div>
            </Grid.Column>
        </Grid>
    </div>
      
    );
  }
}
export default EditQuestion;
