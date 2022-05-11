import React from "react";
import { Select, Table, Column, Row, List } from "react-virtualized";
import "./App.css";
import country from "./country";
export default class PhoneNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      country: "",
      countrylist: [],
    };
  }
  handleSubmit = () => {
    alert(`Form Submitted First Name:${this.state.firstName}
    Last Name:${this.state.lastName}`);
  };
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    fetch(
      "https://countriesnow.space/api/v0.1/countries/info?returns=codes,flag,images"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (Array.isArray(response?.data)) {
          const countries = response?.data.map((ele) => ({
            name: ele.name,
            flag: ele.flag,
          }));
          this.setState((prevState) => {
            return {
              ...prevState,
              countrylist: countries,
            };
          });
        }
      });
  }
  renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="flag-container">
        <img
          className="img-item"
          alt={this.state.countrylist[index].name}
          src={this.state.countrylist[index].flag}
        />
        <p className="text-item">{this.state.countrylist[index].name}</p>
      </div>
    );
  };
  render() {
    // var regex = new RegExp(
    //   `${this.state.countrycode}/^(\+?91|0)?[6789]\d{9}$/`
    // );
    // const countrylist = country.map((individualCountry) => {
    //   return (
    //     <option value={individualCountry.name}>
    //       <span>
    //         {" "}
    //         <img src={individualCountry.image} alt="flag" />
    //       </span>
    //       {individualCountry.name}
    //     </option>
    //   );
    // });
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="phone number"
          value={this.state.phoneNumber}
          name="phoneNumber"
          onChange={this.handleChange}
        />
        {this.state.countrylist.length ? (
          <List
            width={500}
            height={300}
            rowHeight={50}
            rowRenderer={this.renderRow}
            rowCount={this.state.countrylist.length}
          />
        ) : (
          <></>
        )}

        {/* {this.state.countrylist.map(this.renderRow)} */}

        {/* <select
          placeholder="Select Country"
          name="country"
          value={this.state.country}
          onChange={this.handleChange}
        >
          {countrylist}
        </select> */}
        <p>{` ${this.state.phoneNumber}`}</p>
        <button>Click to Submit </button>
      </form>
    );
  }
}
