import React from "react";
import {Dropdown, Input, Button, Grid} from "semantic-ui-react";


class EditCourse extends React.Component {
  constructor() {
    super();
    this.state = {
        fieldsVisible: false,
        nameEditFlagVisible: false,
        subjectEditFlagVisible: false,
        lengthEditFlagVisible: false,
        teacherEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      course: {
        _id:"",
        courseid: "",
        name: "",
        length: "",
        subject: "",
        teacher: "",
      },
    };
  }

  selectID = (e, { value }) => {
    let tempCourse = this.props.courses.filter((c) => { 
        return c.courseid === value; 
    });
    //console.log(tempCourse);
    //console.log(value);
    const course = {_id: tempCourse[0]._id,
                    courseid: value,
                    name: tempCourse[0].name,
                    subject: tempCourse[0].subject,
                    length: tempCourse[0].length,
                    teacher: tempCourse[0].teacher,
                     };
    
    this.setState({
      fieldsVisible: true,
      course: Object.assign(this.state.course,course)
    })
    //console.log(this.state.course);
  }

  render() {
    let courseIDs = [];
    courseIDs = this.props.courses.map(function(c){
        return {
            text: c.courseid + " - " + c.name,
            value: c.courseid
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
    let teacherEditFlag = "";
    if (this.state.teacherEditFlagVisible === true ){
        teacherEditFlag= "Please enter a valid teacher (letters and spaces only)";
    }
    else{
        teacherEditFlag= "";
    }
    let errorEditFlag = "";
    if (this.state.errorEditFlagVisible === true ){
      errorEditFlag= "Cannot edit course. Please fix error first and make sure all fields are populated.";
    }
    else{
      errorEditFlag= "";
    }
    let successEditFlag = "";
    if (this.state.successEditFlagVisible === true ){
        successEditFlag= "Course Successfully Edited";
    }
    else{
        successEditFlag= "";
    }
    let changeFields = "";
    if (this.state.fieldsVisible){
        changeFields = <div>
                            <div>
                                <center>Name:</center><Input placeholder="Letters and Spaces" value={this.state.course.name} onChange={(e) => {
                                    const course = {name: e.target.value,};
                                    this.setState({ 
                                        course: Object.assign(this.state.course,course)
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
                                <center>Subject:</center><Input placeholder="Letters Only" value={this.state.course.subject} onChange={(e) => {
                                    const course = {subject: e.target.value,};
                                    this.setState({
                                        course: Object.assign(this.state.course,course)
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
                                <center>Length:</center><Input placeholder="Number" value={this.state.course.length} onChange={(e) => {
                                    const course = {length: e.target.value,};
                                        this.setState({
                                            course: Object.assign(this.state.course,course)
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
                            <center>Teacher:</center><Input placeholder="Letters and Spaces" value={this.state.course.teacher} onChange={(e) => {
                                        const course = {teacher: e.target.value,};
                                        this.setState({
                                            course: Object.assign(this.state.course,course)
                                        });
                                        if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){    
                                        this.setState({
                                            teacherEditFlagVisible: false,
                                        });
                                        }
                                        else{
                                        this.setState({
                                            teacherEditFlagVisible: true
                                            });

                                    }
                                }} />
                            </div>
                            {teacherEditFlag}
                    </div>
    }


    return (
        
      <div>
          <Grid centered>
            <Grid.Row>
            </Grid.Row>
     
                <Grid.Column computer={2} tablet={2} mobile={2}>
                    <div>
                    <h2>Edit Course</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.updateCourse && this.state.nameEditFlagVisible === false &&
                        this.state.lengthEditFlagVisible === false && this.state.subjectEditFlagVisible === false  && 
                        this.state.teacherEditFlagVisible === false && this.state.course.name !== "" && 
                        this.state.course.length !== "" && this.state.course.subject !== "" && this.state.course.teacher !== "") {
                        
                            this.props.updateCourse(this.state.course);
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
                        Select Course ID to Edit: 
                        <Dropdown placeholder="Courses" fluid selection onChange={this.selectID} options={courseIDs} />
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
export default EditCourse;
