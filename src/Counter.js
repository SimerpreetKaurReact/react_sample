import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Subtract</button>
      </div>
    );
  }
}
