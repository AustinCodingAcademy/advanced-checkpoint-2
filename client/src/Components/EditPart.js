import React from "react";
import {Dropdown, Input, Button, Grid} from "semantic-ui-react";


class EditPart extends React.Component {
  constructor() {
    super();
    this.state = {
        fieldsVisible: false,
        locationEditFlagVisible: false,
        onHandEditFlagVisible: false,
        isMissingEditFlagVisible: false,
        teacherEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      part: {
        _id: "",
        partNumber: "",
        location: "",
        onHand: "",
        issue: "",
      },
    };
  }

  selectID = (e, { value }) => {
    let tempPart = this.props.parts.filter((p) => {
        return p.partNumber === value;
    });
    //console.log(tempPart);
    //console.log(value);
    const part = {_id: tempPart[0]._id,
                    partNumber: value,
                    location: tempPart[0].location,
                    onHand: tempPart[0].onHand,
                    length: tempPart[0].length,
                    teacher: tempPart[0].teacher,
                     };

    this.setState({
      fieldsVisible: true,
      part: Object.assign(this.state.part,part)
    })
    //console.log(this.state.part);
  }

  render() {
    let partIDs = [];
    partIDs = this.props.parts.map(function(p){
        return {
            text: p.partNumber + " - " + p.location,
            value: p.partNumber
        }
    });
    let locationEditFlag = "";
    if (this.state.locationEditFlagVisible === true ){
      locationEditFlag= "Please enter a valid location (letters and spaces only)";
    }
    else{
      locationEditFlag = "";
    }
    let onHandEditFlag = "";
    if (this.state.onHandEditFlagVisible === true ){
      onHandEditFlag= "Please enter a valid onHand (numbers only)";
    }
    else{
      onHandEditFlag= "";
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
      errorEditFlag= "Cannot edit part. Please fix error first and make sure all fields are populated.";
    }
    else{
      errorEditFlag= "";
    }
    let successEditFlag = "";
    if (this.state.successEditFlagVisible === true ){
        successEditFlag= "Part Successfully Edited";
    }
    else{
        successEditFlag= "";
    }
    let changeFields = "";
    if (this.state.fieldsVisible){
        changeFields = <div>
                            <div>
                                <center>Name:</center><Input placeholder="Letters and Spaces" value={this.state.part.location} onChange={(e) => {
                                    const part = {location: e.target.value,};
                                    this.setState({
                                        part: Object.assign(this.state.part,part)
                                    });
                                    if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
                                        this.setState({
                                            locationEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                            locationEditFlagVisible: true
                                            });

                                    }
                                }} />
                            </div>
                            {locationEditFlag}
                            <div>
                                <center>Subject:</center><Input placeholder="Letters Only" value={this.state.part.onHand} onChange={(e) => {
                                    const part = {onHand: e.target.value,};
                                    this.setState({
                                        part: Object.assign(this.state.part,part)
                                    });
                                    if (/^[a-zA-Z]+$/.test(e.target.value) || e.target.value === ""){
                                        this.setState({
                                        onHandEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                        onHandEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {onHandEditFlag}
                            <div>
                                <center>Length:</center><Input placeholder="Number" value={this.state.part.length} onChange={(e) => {
                                    const part = {length: e.target.value,};
                                        this.setState({
                                            part: Object.assign(this.state.part,part)
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
                            <center>Teacher:</center><Input placeholder="Letters and Spaces" value={this.state.part.teacher} onChange={(e) => {
                                        const part = {teacher: e.target.value,};
                                        this.setState({
                                            part: Object.assign(this.state.part,part)
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
                    <h2>Edit Part</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.updatePart && this.state.locationEditFlagVisible === false &&
                        this.state.lengthEditFlagVisible === false && this.state.onHandEditFlagVisible === false  &&
                        this.state.teacherEditFlagVisible === false && this.state.part.location !== "" &&
                        this.state.part.length !== "" && this.state.part.onHand !== "" && this.state.part.teacher !== "") {

                            this.props.updatePart(this.state.part);
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
                        Select Part ID to Edit:
                        <Dropdown placeholder="Parts" fluid selection onChange={this.selectID} options={partIDs} />
                        </div>
                        {changeFields}
                        <div><center><Button>Edit</Button></center></div>
                        {errorEditFlag}
                        {successEditFlag}
                    </form>
                    <button onClick={
                      (e) => {
                          props.removePart(p._id);
                      }
                    }>Delete</button>
                </div>
            </Grid.Column>
        </Grid>
    </div>

    );
  }
}
export default EditPart;
