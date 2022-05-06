import logo from './logo.svg';
import './App.css';
import React from "react";

import image from "./image/image.jpg";




class App extends React.Component {
  state = {
    fullName: "",
    bio: " ",
    profession: "",
    src: image,
  };
  handleClick=()=>this.setState({fullName:'Safa bhy',
bio: ' web developper', profession: 'work',})
  render() {
    return(
      <div className='conatiner'>
      <h1> {this.state.fullName}</h1>
      <h1> {this.state.bio}</h1>
      <h1> {this.state.profession}</h1>
     <img src={this.state.src} width="500" height="500" className='img'/>
     <br/>
      <button onClick={this.handleClick} className="btn"> ClickMe</button>
      </div>
    )
  }
}

export default App;
