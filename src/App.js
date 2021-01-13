import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList"

class App extends Component {
  // Setting this.state.friends to the friends json array
  // state = {
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (<div>
      <h1 style = {{backgroundColor: "navy", color: "white", lineHeight: "150%", textAlign: "center"}}>Employee Directory</h1>
      <br></br>
      <br></br>
      <br></br>
      <EmployeeList />
      </div>
    );
      
  
  }
}

export default App;
