import React, { Component } from 'react';

import image from "../images/image.jpg";

class State extends Component {
    state = {
        Person :{
            fullName: "safa",
            bio: " developper",
            profession: "work",
            src: image
             },
        show: false,
    };
    handleShow = () => {
        // with this keyword we refer to the current state
        this.setState({ show: !this.state.show });
        console.log(this.state.show);
    };



    render() {
  
        return (
            <div>
            <button onClick={this.handleShow} className="button">
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {this.state.show && (
        <div class="card">
      <h1> {this.state.Person.fullName}</h1>
      <h1> {this.state.Person.bio}</h1>
      <h1> {this.state.Person.profession}</h1>
     <img src={this.state.Person.src} id="myImg" width="500" height="500" className='img'/>
     <br/>

       </div>
     )}
             
            </div>
        );
    }
}

export default State;