import React from "react";
import "./App.css";

export default class QuestionB extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "male",
      favColor: "blue",
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="first name"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="last name"
          onChange={this.handleChange}
        />
        <p>{`${this.state.firstName}  ${this.state.lastName}`}</p>
        <textarea
          type="text"
          value={this.state.textarea}
          placeholder="write Something about yourself"
          onChange={this.handleChange}
        />
        <label>
          <input
            type="checkbox"
            checked={this.state.isFriendly}
            name="isFriendly"
            onChange={this.handleChange}
          />
        </label>
        <input
          type="radio"
          checked={this.state.gender === "male"}
          name="gender"
          value="male"
          onChange={this.handleChange}
        />
        Male
        <input
          type="radio"
          checked={this.state.gender === "female"}
          name="gender"
          value="female"
          onChange={this.handleChange}
        />
        Female
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}
