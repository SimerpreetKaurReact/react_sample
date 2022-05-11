import "./App.css";
import ToDoApp from "./ToDoApp";
import ApiCall from "./ApiCall";
import Form from "./Form";
import TravelForm from "./TravelForm";
import ArticleList from "./ArticleList";
import React from "react";
import Meme from "./Meme";
import PhoneNumber from "./PhoneNumber";
import Calculator from "./Calculator";
import Slides from "./Slides";
import AutoComplete from "./Autocomplete";
import { AutoCompleteNew } from "./AutoCompleteNew";
import { ImageGallery } from "./ImageGallery";
import AutoCompleteComponent from "./AutoCompleteComponent";
import Palindrome from "./Palindrome";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appToBeDisplayed: 0,
    };
  }

  handleClick = (id) => {
    console.log("clicked", id);
    this.setState((prevState) => {
      return {
        appToBeDisplayed: id,
      };
    });
  };
  render() {
    return (
      <>
        {this.state.appToBeDisplayed === 1 ? (
          <ToDoApp />
        ) : this.state.appToBeDisplayed === 2 ? (
          <ApiCall />
        ) : this.state.appToBeDisplayed === 3 ? (
          <TravelForm />
        ) : this.state.appToBeDisplayed === 4 ? (
          <Form />
        ) : this.state.appToBeDisplayed === 5 ? (
          <PhoneNumber />
        ) : this.state.appToBeDisplayed === 6 ? (
          <Calculator />
        ) : this.state.appToBeDisplayed === 7 ? (
          <Slides />
        ) : this.state.appToBeDisplayed === 9 ? (
          <ArticleList />
        ) : this.state.appToBeDisplayed === 10 ? (
          <AutoCompleteNew />
        ) : this.state.appToBeDisplayed === 11 ? (
          <ImageGallery />
        ) : this.state.appToBeDisplayed === 12 ? (
          <AutoCompleteComponent />
        ) : this.state.appToBeDisplayed === 13 ? (
          <Palindrome />
        ) : (
          <Meme />
        )}
        <button onClick={() => this.handleClick(1)}>TodoList</button>
        <button onClick={() => this.handleClick(2)}>ApiCall</button>
        <button onClick={() => this.handleClick(3)}>TravelForm</button>
        <button onClick={() => this.handleClick(4)}>Form</button>
        <button onClick={() => this.handleClick(5)}>Phone Number</button>
        <button onClick={() => this.handleClick(6)}>Calculator</button>
        <button onClick={() => this.handleClick(7)}>slides</button>
        <button onClick={() => this.handleClick(9)}>article</button>
        <button onClick={() => this.handleClick(10)}>AutoComplete</button>
        <button onClick={() => this.handleClick(12)}>
          AutoCompleteComponent
        </button>
        <button onClick={() => this.handleClick(13)}>Palindrome</button>
        <button onClick={() => this.handleClick(11)}>ImageGallery</button>

        <button onClick={() => this.handleClick(8)}>Meme Generator</button>
      </>
    );
  }
}
