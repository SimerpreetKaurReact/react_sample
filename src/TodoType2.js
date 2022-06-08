import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";

export default class TodoList extends Component {
  state = {
    todos: [
      { isDone: false, Input: "clean house" },
      { isDone: false, Input: "do the dishes" },
    ],
    todoInput: "",
  };

  handleOnChange = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (Boolean(this.state.todoInput) === false) return false;

    this.setState((state) => {
      let newTodos = state.todos.concat({
        isDone: false,
        Input: state.todoInput,
      });
      return {
        todos: newTodos,
        todoInput: "",
      };
    });
    e.preventDefault();
  };

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

  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>

          <form onSubmit={this.handleSubmit}>
            <input
              type="Input"
              value={this.state.todoInput}
              onChange={this.handleOnChange}
            />
            <Button>Add Todo</Button>
          </form>
          <TrackProgress todos={this.state.todos} />
          <ul>
            {this.state.todos.map((element, index) => (
              <li
                key={index}
                onClick={() => this.showToDOCompleted(index)}
                className={element.isDone ? "is-done" : "is-not-done"}
              >
                {element.Input}
              </li>
            ))}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        Input-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (Boolean(this.state.todoInput) === false) return false;

  this.setState((state) => {
    let newTodos = state.todos.concat({
      isDone: false,
      Input: state.todoInput,
    });
    return {
      todos: newTodos,
      todoInput: "",
    };
  });
};
const Title = ({ children }) => <h2>{children}</h2>;
const Button = ({ children }) => (
  <button type="submit" value="Submit">
    {children}
  </button>
);

const InputField = ({ value, handleOnChange }) => {
  return <input type="Input" value={value} onChange={handleOnChange} />;
};

const TrackProgress = ({ todos }) => {
  const isNotDone = todos.filter((todo) => todo.isDone !== true);
  return (
    <p className="task-counter">
      {isNotDone.length} remaining out of {todos.length} tasks
    </p>
  );
};

const DisplayList = ({ todos, manage }) => {
  return (
    <ul>
      {todos.map((element, index) => (
        <li
          key={index}
          onClick={() => manage(index)}
          className={element.isDone ? "is-done" : "is-not-done"}
        >
          {element.Input}
        </li>
      ))}
    </ul>
  );
};
