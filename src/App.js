import "./App.css";

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./MattMiller.png";
import {Navbar, Form, Button, InputGroup, Row, Col} from 'react-bootstrap/Col';
import Navigation from './Components/Navigation';



 /* Porfile Structure */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Matt Miller",
        bio: "Matt Miller was born on July 23, 1963 in Sumatra, Indonesia. He is an actor and director, known for Batman Begins (2005), Seabiscuit (2003) and The Mothman Prophecies (2002). He was previously married to Karen Miller.",
        imgSrc: 
        Profile,
        profession: "Actor",
      },
      shows: false,
      mountTime: null,
    };
  }
/* LifeCycle */


  componentDidMount() {
    this.setState({ mountTime: new Date() });
    this.intervalId = setInterval(() => this.setState({}), 1000); // Update state every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear interval on unmount
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountTime } = this.state;
    const elapsedTime = mountTime ? Math.floor((new Date() - mountTime) / 1000) : 0;

    return (


    /* Navbar */ 


      <div className="App">

<Navigation/>


{/* Profile */}

<div className="ProfileContent">

        <button onClick={this.toggleShow} type="button" class="btn btn-success" >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {elapsedTime} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;