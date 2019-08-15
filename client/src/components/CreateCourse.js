import React from "react";
import {Input, Button, Dropdown, Grid} from "semantic-ui-react";

class CreateCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      idFlagVisible: false,
      nameFlagVisible: false,
      lengthFlagVisible: false,
      teacherFlagVisible: false,
      errorFlagVisible: false,
      successFlagVisible: false,
      course: {
        courseid: "",
        name: "",
        length: "",
        subject: "",
        teacher: "",
      },
    };
  }

  subjectSelect = (e, { value }) => {
    const course = {subject: value};
    this.setState({
      course: Object.assign(this.state.course,course)
    });
    
  }
  render() {
    let idFlag = "";
    if (this.state.idFlagVisible === true ){
      idFlag = "Please enter a valid ID (5 digit number)";
    }
    else{
      idFlag = "";
    }
    let nameFlag = "";
    if (this.state.nameFlagVisible === true ){
      nameFlag= "Please enter a valid name (letters only)";
    }
    else{
      nameFlag = "";
    }
    let lengthFlag = "";
    if (this.state.lengthFlagVisible === true ){
      lengthFlag= "Please enter a valid length (numbers only)";
    }
    else{
      lengthFlag = "";
    }
    let teacherFlag = "";
    if (this.state.teacherFlagVisible === true ){
        teacherFlag= "Please enter a valid teacher name (letters and spaces only)";
    }
    else{
        teacherFlag = "";
    }
    let errorFlag = "";
    if (this.state.errorFlagVisible === true ){
      errorFlag= "Cannot create. Please fix errors first and make sure all fields are populated.";
    }
    else{
      errorFlag = "";
    }
    let successFlag = "";
    if (this.state.successFlagVisible === true ){
      successFlag= "Course Created Successfully!";
    }
    else{
      successFlag = "";
    }

    let subjectFields = [
      {
          text: "Math",
          value: "Math"
      },
      {
          text: "CS",
          value: "CS" 
      },
      {
          text: "Science",
          value: "Science" 
      },
      {
        text: "Language",
        value: "Language"
      },
      {
        text: "History",
        value: "History"
      },
    ]
    return (
      <div>
        <Grid centered>
        <Grid.Row>
        </Grid.Row>
     
          <Grid.Column computer={2} tablet={2} mobile={2}>
              <div>
                <h2>Create Course</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (this.props.createCourse && this.state.idFlagVisible === false && this.state.nameFlagVisible === false &&
                    this.state.lengthFlagVisible === false && this.state.teacherFlagVisible === false 
                    && this.state.course.courseid !== "" && this.state.course.name !== "" && this.state.course.length !== "" && 
                    this.state.course.subject !== "" && this.state.course.teacher !== "") {
                    this.props.createCourse(this.state.course);
                    this.setState({
                            errorFlagVisible: false,
                            successFlagVisible: true
                          });
                  }
                  else{
                    this.setState({
                            errorFlagVisible: true,
                            successFlagVisible: false
                          });
                  }
                }}>
                  <div>
                  <center>ID:</center><Input placeholder="5 Digit Number" onChange={(e) => {
                      if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length === 5) || e.target.value === ""){
                        const course = {courseid: e.target.value};
                        this.setState({
                          idFlagVisible: false,
                          course: Object.assign(this.state.course,course)
                        });
                      }
                      else{
                          this.setState({
                            idFlagVisible: true
                          });
                        }
                    }} />
                  </div>
                  {idFlag}
                  <div>
                    <center>Name:</center><Input placeholder="Letters And Spaces" onChange={(e) => {
                      if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
                        const course = {name: e.target.value};
                        this.setState({
                          nameFlagVisible: false,
                          course: Object.assign(this.state.course,course)
                        });
                      }
                      else{
                        this.setState({
                          nameFlagVisible: true
                          });
                      }
                    }} />
                  </div>
                  {nameFlag}
                  <div>
                  <center>Length:</center><Input placeholder="Number" onChange={(e) => {
                      if (/^[0-9]+$/.test(e.target.value) || e.target.value === ""){
                        const course = {length: e.target.value};
                        this.setState({
                          lengthFlagVisible: false,
                          course: Object.assign(this.state.course,course)
                        });
                      }
                      else{
                        this.setState({
                          lengthFlagVisible: true
                          });
                      }
                    }} />
                  </div>
                  {lengthFlag}
                  <div className="dropdown">
                  <center>Subject:</center><Dropdown placeholder="Select Subject" fluid selection onChange={this.subjectSelect} options={subjectFields} />
                  </div> 
                  <div>
                  <center>Teacher:</center><Input placeholder="Letters And Spaces" onChange={(e) => {
                      if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
                        const course = {teacher: e.target.value};
                        this.setState({
                          teacherFlagVisible: false,
                          course: Object.assign(this.state.course,course)
                        });
                      }
                      else{
                        this.setState({
                          teacherFlagVisible: true
                          });
                      }
                    }} />
                  </div>
                  {teacherFlag}
                  
                  <div><center><Button>Create</Button></center></div>
                  {errorFlag}
                  {successFlag}
                </form>
              </div>  
            </Grid.Column>
        </Grid>
      </div>
      
    );
  }
}
export default CreateCourse;
