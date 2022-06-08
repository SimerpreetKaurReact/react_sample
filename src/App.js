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
import QuestionA from "./QuestionA";
import QuestionB from "./QuestionB";
import TodoType2 from "./TodoType2";
import TreeLeaf from "./TreeLeafNodes";
import BooksApi from "./BooksApi";
import BinaryTreeInsertion from "./BinaryTreeInsertion";
import LoginAction from "./LoginAction";
import LoginForm from "./LoginForm";
import Apifetch from "./Apifetch";
import Todochecklist from "./Todochecklist";
import QuestionC from "./QuestionC";
import Crudfetch from "./crudfetch";
import { AVLTree } from "./AVLTree";

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
      <div>
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
        ) : this.state.appToBeDisplayed === 14 ? (
          <QuestionA />
        ) : this.state.appToBeDisplayed === 15 ? (
          <TodoType2 />
        ) : this.state.appToBeDisplayed === 16 ? (
          <TreeLeaf />
        ) : this.state.appToBeDisplayed === 17 ? (
          <BooksApi />
        ) : this.state.appToBeDisplayed === 18 ? (
          <QuestionB />
        ) : this.state.appToBeDisplayed === 19 ? (
          <BinaryTreeInsertion />
        ) : this.state.appToBeDisplayed === 20 ? (
          <LoginForm />
        ) : this.state.appToBeDisplayed === 21 ? (
          <Apifetch />
        ) : this.state.appToBeDisplayed === 22 ? (
          <QuestionA />
        ) : this.state.appToBeDisplayed === 23 ? (
          <Todochecklist />
        ) : this.state.appToBeDisplayed === 24 ? (
          <QuestionC />
        ) : this.state.appToBeDisplayed === 25 ? (
          <Crudfetch />
        ) : this.state.appToBeDisplayed === 26 ? (
          <AVLTree />
        ) : (
          <Meme />
        )}
        <div className="button-container">
          <button className="button-item" onClick={() => this.handleClick(1)}>
            TodoList
          </button>
          <button className="button-item" onClick={() => this.handleClick(2)}>
            ApiCall
          </button>
          <button className="button-item" onClick={() => this.handleClick(3)}>
            TravelForm
          </button>
          <button className="button-item" onClick={() => this.handleClick(4)}>
            Form
          </button>
          <button className="button-item" onClick={() => this.handleClick(5)}>
            Phone Number
          </button>
          <button className="button-item" onClick={() => this.handleClick(6)}>
            Calculator
          </button>
          <button className="button-item" onClick={() => this.handleClick(7)}>
            slides
          </button>
          <button className="button-item" onClick={() => this.handleClick(9)}>
            article
          </button>
          <button className="button-item" onClick={() => this.handleClick(10)}>
            AutoComplete
          </button>

          <button className="button-item" onClick={() => this.handleClick(12)}>
            AutoCompleteComponent
          </button>
          <button className="button-item" onClick={() => this.handleClick(13)}>
            Palindrome
          </button>
          <button className="button-item" onClick={() => this.handleClick(11)}>
            ImageGallery
          </button>
          <button className="button-item" onClick={() => this.handleClick(14)}>
            QuestionA
          </button>
          <button className="button-item" onClick={() => this.handleClick(15)}>
            TodoType2
          </button>
          <button className="button-item" onClick={() => this.handleClick(16)}>
            TreeLeaf
          </button>
          <button className="button-item" onClick={() => this.handleClick(17)}>
            books
          </button>
          <button className="button-item" onClick={() => this.handleClick(18)}>
            QuestionB
          </button>
          <button className="button-item" onClick={() => this.handleClick(19)}>
            binary tree Insertion
          </button>
          <button className="button-item" onClick={() => this.handleClick(20)}>
            Login form
          </button>
          <button className="button-item" onClick={() => this.handleClick(21)}>
            Api fetch
          </button>
          <button className="button-item" onClick={() => this.handleClick(22)}>
            QuestionA
          </button>
          <button className="button-item" onClick={() => this.handleClick(23)}>
            Todo checklist
          </button>
          <button className="button-item" onClick={() => this.handleClick(24)}>
            QuestionC
          </button>
          <button className="button-item" onClick={() => this.handleClick(25)}>
            crud fetch
          </button>
          <button className="button-item" onClick={() => this.handleClick(26)}>
            Avl Tree
          </button>
          <button className="button-item" onClick={() => this.handleClick(8)}>
            Meme Generator
          </button>
        </div>
      </div>
    );
  }
}
