import React from "react";

export default class Palindrome extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      palindrome: "",
      result: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    // const result = names.filter((ele) => regex.test(ele));
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  reverseWord = () => {
    console.log(
      "inside reverse word",
      this.state,
      this.state.query.split("").reverse()
    );

    this.setState((prevState) => ({
      ...prevState,
      palindrome: this.state.query.split("").reverse().join(""),
    }));
  };
  concatWord = () => {
    this.setState((prevState) => ({
      ...prevState,
      palindrome: prevState.palindrome.join(""),
    }));
    return;
  };
  confirmMatch = () => {
    console.log("inside confirm word", this.state);
    if (this.state.palindrome === this.state.query) {
      this.setState((prevState) => ({
        ...prevState,
        result: true,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        result: false,
      }));
    }
  };
  handleClick = async (event) => {
    event.preventDefault();
    const check = await this.reverseWord();
    this.confirmMatch();
  };
  render() {
    return (
      <>
        <input
          placeholder="Enter Name"
          name="query"
          value={this.state.query}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>Submit</button>
        {this.state.result ? <p>RESult:yayy</p> : <p>RESult:nayy</p>}
      </>
    );
  }
}
