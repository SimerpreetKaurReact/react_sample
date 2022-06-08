import PropTypes from "prop-types";
import React, { Component } from "react";

export default class BooksApi extends Component {
  //   static propTypes = { second: third };
  constructor() {
    super();
    this.state = {
      keyword: "",
      totalSearchResponses: 0,
      items: [],
      isLoading: true,
    };
  }
  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      async () => {
        await this.getBooks();
      }
    );

    return;
  };

  getBooks = async () => {
    console.log("Keyword: ", this.state.keyword);
    if (this.state.keyword === "" || this.state.keyword.trim().length === 0) {
      console.log("Empty keyword: ", this.state.keyword);
      this.setState((prevState) => ({
        totalSearchResponses: 0,
        items: [],
      }));
    } else {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}&key=AIzaSyB10oFcukPeLUqUqbfWgRId8HSWzewOL8U`
      )
        .then((respone) => respone.json())
        .then(async (res) => {
          console.log(res);
          this.setState((prevState) => ({
            totalSearchResponses: Number(res.totalItems),
            items: res.items,
            isLoading: false,
          }));
        });
    }
    return;
  };
  render() {
    return (
      <div>
        <h1>BooksApi</h1>
        <input
          value={this.state.keyword}
          placeholder="Add keyword for selecting book"
          name="keyword"
          onChange={this.handleChange}
        />
        <h2>{this.state.totalSearchResponses}</h2>
        {this.state.isLoading ? (
          "loading..."
        ) : this.state.totalSearchResponses ? (
          <Results items={this.state.items} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
class Results extends React.Component {
  render() {
    return (
      <div className="results-container">
        <ul>
          {this.props.items.map((item, index) => (
            <div key={index} className="result-block">
              <h2>{item.volumeInfo.title}</h2>
              <h2>{item.volumeInfo.subtitle}</h2>
              <img
                src={`${item.volumeInfo.imageLinks?.smallThumbnail}`}
                alt={item.volumeInfo.title}
              />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
// fruits.splice(2, 0, "Lemon", "Kiwi");
