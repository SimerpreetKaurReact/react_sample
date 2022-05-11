import React from "react";
import "./App.css";
import country from "./country";
const btnValues = [["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"], ["0"]];
const operators = ["+", "-", "%", "/"];
export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange = (value) => {
    this.setState((prevState) => {
      return {
        input: prevState.input + value,
      };
    });
  };
  handleInput = (event) => {
    this.setState((prevState) => {
      return {
        input: event.target.value,
      };
    });
  };
  handleEqual = () => {
    this.setState({ input: eval(this.state.input).toString() });
  };

  render() {
    const calcButtons = btnValues.flat().map((btn, i) => {
      return (
        <button key={i} onClick={() => this.handleChange(btn)}>
          {btn}
        </button>
      );
    });
    const operatorList = operators.map((operator, i) => {
      return (
        <button key={i} onClick={() => this.handleChange(operator)}>
          {operator}
        </button>
      );
    });
    return (
      <div>
        <h1>CALCULATOR</h1>
        <p>{this.state.input || "0"}</p>
        <input
          type="text"
          placeholder="Calculate"
          value={this.state.input}
          name="input"
          onChange={this.handleInput}
        />
        {operatorList}
        {calcButtons}
        <button onClick={() => this.handleEqual()}>=</button>
        <button onClick={() => this.handleEqual()}>Clear</button>
      </div>
    );
  }
}

//react task pagination
