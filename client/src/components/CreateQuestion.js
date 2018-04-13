import React from "react";
// import {Input, Button, Dropdown, Grid} from "semantic-ui-react";

class CreateQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
    //   idFlagVisible: false,
    //   nameFlagVisible: false,
    //   lengthFlagVisible: false,
    //   difficultyFlagVisible: false,
    //   errorFlagVisible: false,
    //   successFlagVisible: false,
      question: {
        questionid: "",
        name: "",
        length: "",
        subject: "",
        difficulty: "",
      },
    };
  }

//   subjectSelect = (e, { value }) => {
//     const question = {subject: value};
//     this.setState({
//       question: Object.assign(this.state.question,question)
//     });
    
//   }

  render() {
    return (
      <div>


        <div>
          <h1>Add Question</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createQuestion) {
              this.props.createQuestion(this.state.question);
            }
          }}>
            <div>
              questionid: <input onChange={(e) => {
                // const question = {questionid: e.target.value};
                this.setState({
                    questionid: e.target.value
                });
              }} />
            </div>
            <div>
              name: <input onChange={(e) => {
                // const question = {name: e.target.value};
                this.setState({
                    name: e.target.value
                    //   question: Object.assign(this.state.question,question)
                });
              }} />
            </div>
            <div>
              length: <input onChange={(e) => {
                // const question = {length: e.target.value};
                this.setState({
                    length: e.target.value
                });
              }} />
            </div>
            <div>
              subject: <input onChange={(e) => {
                // const question = {subject: e.target.value};
                this.setState({
                    subject: e.target.value
                });
              }} />
            </div>
            <div>
              difficulty: <input onChange={(e) => {
                // const question = {difficulty: e.target.value};
                this.setState({
                    difficulty: e.target.value
                });
              }} />
            </div>
            <button>Add</button>
          </form>
        </div>


     
      </div>
      
    );
  }

  
  //render
//   render() {
//     let idFlag = "";
//     if (this.state.idFlagVisible === true ){
//       idFlag = "Please enter a valid ID (5 digit number)";
//     }
//     else{
//       idFlag = "";
//     }
//     let nameFlag = "";
//     if (this.state.nameFlagVisible === true ){
//       nameFlag= "Please enter a valid name (letters only)";
//     }
//     else{
//       nameFlag = "";
//     }
//     let lengthFlag = "";
//     if (this.state.lengthFlagVisible === true ){
//       lengthFlag= "Please enter a valid length (numbers only)";
//     }
//     else{
//       lengthFlag = "";
//     }
//     let difficultyFlag = "";
//     if (this.state.difficultyFlagVisible === true ){
//         difficultyFlag= "Please enter a valid difficulty name (letters and spaces only)";
//     }
//     else{
//         difficultyFlag = "";
//     }
//     let errorFlag = "";
//     if (this.state.errorFlagVisible === true ){
//       errorFlag= "Cannot create. Please fix errors first and make sure all fields are populated.";
//     }
//     else{
//       errorFlag = "";
//     }
//     let successFlag = "";
//     if (this.state.successFlagVisible === true ){
//       successFlag= "question Created Successfully!";
//     }
//     else{
//       successFlag = "";
//     }

//     let subjectFields = [
//       {
//           text: "Arrays",
//           value: "Arrays"
//       },
//       {
//           text: "CS",
//           value: "CS" 
//       },
//       {
//           text: "Stacks",
//           value: "Stacks" 
//       },
//       {
//         text: "Java Language",
//         value: "Java Language"
//       },
//       {
//         text: "System Design",
//         value: "System Design"
//       },
//     ]
//     return (
//       <div>
//         <Grid centered>
//         <Grid.Row>
//         </Grid.Row>
     
//           <Grid.Column computer={2} tablet={2} mobile={2}>
//               <div>
//                 <h2>Create question</h2>
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   if (this.props.createquestion && this.state.idFlagVisible === false && this.state.nameFlagVisible === false &&
//                     this.state.lengthFlagVisible === false && this.state.difficultyFlagVisible === false 
//                     && this.state.question.questionid !== "" && this.state.question.name !== "" && this.state.question.length !== "" && 
//                     this.state.question.subject !== "" && this.state.question.difficulty !== "") {
//                     this.props.createquestion(this.state.question);
//                     this.setState({
//                             errorFlagVisible: false,
//                             successFlagVisible: true
//                           });
//                   }
//                   else{
//                     this.setState({
//                             errorFlagVisible: true,
//                             successFlagVisible: false
//                           });
//                   }
//                 }}>
//                   <div>
//                   <center>ID:</center><Input placeholder="5 Digit Number" onChange={(e) => {
//                       if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length === 5) || e.target.value === ""){
//                         const question = {questionid: e.target.value};
//                         this.setState({
//                           idFlagVisible: false,
//                           question: Object.assign(this.state.question,question)
//                         });
//                       }
//                       else{
//                           this.setState({
//                             idFlagVisible: true
//                           });
//                         }
//                     }} />
//                   </div>
//                   {idFlag}
//                   <div>
//                     <center>Name:</center><Input placeholder="Letters And Spaces" onChange={(e) => {
//                       if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
//                         const question = {name: e.target.value};
//                         this.setState({
//                           nameFlagVisible: false,
//                           question: Object.assign(this.state.question,question)
//                         });
//                       }
//                       else{
//                         this.setState({
//                           nameFlagVisible: true
//                           });
//                       }
//                     }} />
//                   </div>
//                   {nameFlag}
//                   <div>
//                   <center>Length:</center><Input placeholder="Number" onChange={(e) => {
//                       if (/^[0-9]+$/.test(e.target.value) || e.target.value === ""){
//                         const question = {length: e.target.value};
//                         this.setState({
//                           lengthFlagVisible: false,
//                           question: Object.assign(this.state.question,question)
//                         });
//                       }
//                       else{
//                         this.setState({
//                           lengthFlagVisible: true
//                           });
//                       }
//                     }} />
//                   </div>
//                   {lengthFlag}


//                   {/* const TestComponent = props => ( <Form> <Field name="dropdownName" component={ DropdownFormField} label="Dropdown Test" /> </Form> ) const DropdownFormField = props => ( <Form.Field> <Dropdown selection {...props.input} value={props.input.value} onChange={(param,data) => props.input.onChange(data.value)} placeholder={props.label} /> </Form.Field> )
//                   const TestComponent = props => ( <Form> <Field name="dropdownName" component={ DropdownFormField} label="Dropdown Test" /> </Form> ) const DropdownFormField = props => ( <Form.Field> <Dropdown selection {...props.input} value={props.input.value} onChange={(param,data) => props.input.onChange(data.value)} placeholder={props.label} /> </Form.Field> ) */}

//                   <div className="dropdown">
//                   <center>Subject:</center><Dropdown placeholder="Select Subject" fluid selection onChange={this.subjectSelect} options={subjectFields} />
//                   </div> 
//                   <div>
//                   <center>difficulty:</center><Input placeholder="Letters And Spaces" onChange={(e) => {
//                       if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
//                         const question = {difficulty: e.target.value};
//                         this.setState({
//                           difficultyFlagVisible: false,
//                           question: Object.assign(this.state.question,question)
//                         });
//                       }
//                       else{
//                         this.setState({
//                           difficultyFlagVisible: true
//                           });
//                       }
//                     }} />
//                   </div>
//                   {difficultyFlag}
                  
//                   <div><center><Button>Create</Button></center></div>
//                   {errorFlag}
//                   {successFlag}
//                 </form>
//               </div>  
//             </Grid.Column>
//         </Grid>
//       </div>
      
//     );
//   }


}
export default CreateQuestion;
