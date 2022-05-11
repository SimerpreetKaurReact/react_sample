import React from "react";
import "./App.css";

export default class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "male",
      destination: "",
      dietaryRestrictions: {
        isVegetarian: false,
        isLactose: false,
        isKosher: false,
      },
    };
  }
  handleSubmit = () => {
    alert(`Form Submitted First Name:${this.state.firstName}
    Last Name:${this.state.lastName}`);
  };
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              [name]: checked,
            },
          };
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
          placeholder="first name"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="last name"
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          value={this.state.age}
          name="age"
          onChange={this.handleChange}
        />
        <p>Select Gender</p>
        <input
          type="radio"
          checked={this.state.gender === "male"}
          value="male"
          name="gender"
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
        <input
          type="radio"
          checked={this.state.gender === "LGBTQ"}
          value="LGBTQ"
          name="gender"
          onChange={this.handleChange}
        />
        LGBTQ
        <p>{`Select the location you are travelling to `}</p>
        <select
          placeholder="Select destination"
          name="destination"
          value={this.state.destination}
          onChange={this.handleChange}
        >
          <option value="london">London</option>
          <option value="delhi">Delhi</option>
          <option value="paris">Paris</option>
        </select>
        <p>{`Select the dietary option `}</p>
        <input
          type="checkbox"
          name="dietaryRestrictions"
          onChange={this.handleChange}
          checked={this.state.dietaryRestrictions.isKosher}
        />
        kosher
        <input
          type="checkbox"
          name="dietaryRestrictions"
          onChange={this.handleChange}
          checked={this.state.dietaryRestrictions.isVegetarian}
        />
        Vegetarian
        <input
          type="checkbox"
          name="dietaryRestrictions"
          onChange={this.handleChange}
          checked={this.state.dietaryRestrictions.isLactose}
        />
        lactoseFree
        <p>{`${this.state.firstName} ${this.state.lastName}`}</p>
        <p>{`The Selected Gender is  ${this.state.gender}`}</p>
        <p>{`The Selected Location is  ${this.state.destination}`}</p>
        <p>{`The Selected dietary restriction is  ${this.state.dietaryRestrictions.isKosher} ${this.state.dietaryRestrictions.isVegetarian} ${this.state.dietaryRestrictions.isLactose}`}</p>
        <button>Click to Submit </button>
      </form>
    );
  }
}
