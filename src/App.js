import React from 'react';
import  State  from './components/State'
import "./App.css";

class App extends  React.Component {
  state = { count: 0, intervalId: 0 };

  handleClick = () => {
    if(this.state.intervalId){
      clearInterval(this.state.intervalId);
      this.setState(prevState => {
        return {
          ...prevState,
          intervalId: 0,
        };
      });
      return;
    }
    
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
    
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }
  render() {
    return (
      <div className='App' >
          <h1> {this.state.count} </h1>
          <button onClick={this.handleClick}>
        
         <State/>
        </button>
     
      </div>
    );
  }
}

export default App;