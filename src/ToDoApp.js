import "./App.css";
import ToDoItem from "./ToDoItem";
import { todosData } from "./tododata";
import React from "react";
export default class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  handleClick = (id) => {
    console.log("clicked", id);
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      console.log("clicked", updatedTodos);
      return {
        todos: updatedTodos,
      };
    });
  };
  render() {
    const todoList = this.state.todos.map((individualTask) => (
      <ToDoItem
        key={individualTask.id}
        item={individualTask}
        handleClick={this.handleClick}
      />
    ));
    return <div className="todo-list">{todoList}</div>;
  }
}
