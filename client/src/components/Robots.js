import React from "react";
import RobotListItem from "./RobotListItem";
import Header from "./Header";

/*
const mockData = [
  {
    "name": "Roy Batty",
    "movie": "Blade Runner",
    "friends": "Leon, Pris, Zhora",
    "enemies": "Rick Deckard",
    "movement": "bipedal",
    "notes": "4 year lifespan"
  },
  {
    "name": "T-800",
    "movie": "The Terminator",
    "friends": "",
    "enemies": "Sarah Connor",
    "movement": "bipedal",
    "notes": "Metal exoskeleton with external living tissue"
  },
  {
    "name": "Reprogrammed T-800",
    "movie": "Terminator 2",
    "friends": "Sarah Connor, John Connor",
    "enemies": "T-1000",
    "movement": "bipedal",
    "notes": "Hasta la vista, baby"
  },
  {
    "name": "Johnny 5",
    "movie": "Short Circuit",
    "friends": "Stephanie, Ben",
    "enemies": "NOVA, Captain Skroeder",
    "movement": "tractor tread",
    "notes": "No disassemble!"
  },
  {
    "name": "Robot B-9",
    "movie": "Lost in Space",
    "friends": "Will Robinson",
    "enemies": "",
    "movement": "tractor tread",
    "notes": "Full designation, Class B-9-M-3 General Utility Non-Theorizing Environmental Control Robot"
  },
  {
    "name": "Robby",
    "movie": "Forbidden Planet",
    "friends": "Dr. Morbius, Altaira",
    "enemies": "",
    "movement": "bipedal",
    "notes": "Designed, built, and programmed by Dr. Morbius using knowledge gleaned from his study of the Krell"
  },
  {
    "name": "Cylon",
    "movie": "Battlestar Galactica (1978)",
    "friends": "",
    "enemies": "The Twelve Colonies of Humanity",
    "movement": "bipedal",
    "notes": "Created by an extinct reptilian race that were also called Cylons"
  },
  {
    "name": "Dalek",
    "movie": "Doctor Who",
    "friends": "",
    "enemies": "the Doctor",
    "movement": "levitation",
    "notes": "Mutated extraterrestrial race (Kaleds) inside a tank-like robotic shell"
  },
];
*/

function Robots(props) {

  console.log(props);

  if (props.robots.fetching) {
    return (
      <div>
        <Header />
        <h1>Loading...</h1>
      </div>
    );
  }

  else if (props.robots.fetched) {
    // const robotMarkup = mockData.map(robot => 
    const robotMarkup = props.robots.robots.map(robot => 
      <RobotListItem 
        id={robot._id} 
        key={robot._id} 
        name={robot.name} 
        movie={robot.movie} 
        friends={robot.friends} 
        enemies={robot.enemies} 
        movement={robot.movement} 
        notes={robot.notes} 
        deleteRobot={props.deleteRobot}
      />
    );

    return (
      <div>
        <Header />
        <div className="robotContainer">
          {robotMarkup}
        </div>
      </div>
    );
  }

  else return (<div></div>);
}

export default Robots;