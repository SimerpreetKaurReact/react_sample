import React, { Component } from "react";
// import './App.css';

import cx from "classnames";

export default class QuestionA extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todolist: [{ done: false, todo: "something" }],
    };
  }
  showToDOCompleted = (itemIndex) => {
    this.setState((state) => {
      const newTodos = state.todos.map((todo, index) => {
        if (index === itemIndex) {
          return { isDone: !todo.isDone, Input: todo.Input };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  };

  handleClick = (index) => {
    this.setState((prevState) => {
      const newTodos = prevState.todolist.map((ele, i) => {
        if (index === i) {
          return { done: !ele.done, todo: ele.todo };
        }
        return ele;
      });
      return { todolist: newTodos };
    });
  };
  submitTodo = (e) => {
    e.preventDefault();
    if (Boolean(this.state.todo) === false) return false;

    this.setState((prevState) => ({
      todo: "",
      todolist: [...prevState.todolist, { done: false, todo: prevState.todo }],
    }));
    console.log(this.state);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(this.state.todo);
  };

  render() {
    return (
      <div>
        <p>TO DO LIST</p>
        <input
          type="Input"
          name="todo"
          placeholder="Enter new todo"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button onClick={this.submitTodo}>Add todo</button>
        <ul>
          {this.state.todolist?.length ? (
            this.state.todolist?.map((ele, index) => (
              <li onClick={() => this.handleClick(index)} key={index}>
                {ele.todo}
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
        <TrackProgress todos={this.state.todolist} />
      </div>
    );
  }
}
const TrackProgress = ({ todos }) => {
  console.log(todos);
  const filterTodos = todos?.filter((ele) => ele.done === true);

  return (
    <p>
      {filterTodos?.length} completed out of {todos?.length}
    </p>
  );
};
