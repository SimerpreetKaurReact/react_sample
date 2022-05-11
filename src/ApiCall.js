import React from "react";
import "./App.css";

export default class ApiCall extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: "",
    };
  }
  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            data: res,
          };
        });
      });
  }

  render() {
    return (
      <div className="todo-item">
        <p>{this.state.isLoading ? "Loading..." : this.state.data.name}</p>
      </div>
    );
  }
}
