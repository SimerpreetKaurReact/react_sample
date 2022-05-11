import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.isLoggedIn ? "user Logged IN" : "User Logged Out"}</h1>
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }
}

export default App;
