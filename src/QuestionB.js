import React from "react";
import "./App.css";

export default class QuestionB extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "",
      countryList: [],
      isLoading: true,
      filterCountryList: [],
      fetchApi: false,
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    setTimeout(async () => {
      await this.fetchCountries();
    }, 10000);
  };

  fetchCountries = async () => {
    if (this.state.fetchApi) {
      fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        .then((response) => response.json())
        .then(async (res) => {
          console.log(res);
          if (Array.isArray(res?.data)) {
            const countries = res.data
              .map((ele) => ({
                name: ele?.name,
                flag: ele?.flag,
              }))
              .sort();
            this.setState((prevState) => ({
              ...prevState,
              countryList: countries,
              fetchApi: false,
            }));
            const fetchquery = await this.filterCountry();
            console.log("newCountryList", fetchquery);
            this.setState((prevState) => ({
              filterCountryList: fetchquery,
              isLoading: false,
            }));
          }
        });
    } else
      this.setState((prevState) => ({
        ...prevState,
        fetchApi: true,
      }));
  };

  // filterCountry = async () => {
  //   const promise = new Promise((resolve) => {
  //     console.log("country", this.state.country, this.state.countryList);
  //     if (this.state.country === "") {
  //       resolve([]);
  //     } else {
  //       const regex = new RegExp(this.state.country, "i");
  //       console.log("country regex", regex);
  //       // const newCountryList = this.state.countryList.filter((ele) =>
  //       //   regex.test(ele)
  //       // );
  //       const newCountryList = this.state.countryList.filter((entry) =>
  //         regex.test(entry.name)
  //       );
  //       console.log(" regex newCountryList", newCountryList);
  //       resolve(newCountryList);
  //     }
  //   });
  //   return promise;
  // };
  filterCountry = async () => {
    if (this.state.country === "") {
      return;
    } else {
      const regex = new RegExp(this.state.country, "i");
      const newCountryList = this.state.countryList.filter((ele) =>
        regex.test(ele.name)
      );
      return newCountryList;
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="country"
          value={this.state.country}
          placeholder="country"
          onChange={this.handleChange}
        />

        <p>{`${this.state.country}  `}</p>
        {this.state.isLoading ? (
          "loading..."
        ) : (
          <DisplayList countryList={this.state.filterCountryList} />
        )}
      </div>
    );
  }
}
const DisplayList = ({ countryList }) => {
  return (
    <ul>
      {countryList?.map((element, index) => (
        <li key={index} className={element.isDone ? "is-done" : "is-not-done"}>
          {element.name}
        </li>
      ))}
    </ul>
  );
};
