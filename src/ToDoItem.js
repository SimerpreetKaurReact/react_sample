import React from "react";
import "./App.css";

export default class ToDoItem extends React.Component {
  completedStyle = {
    fontWeight: "bold",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleClick(this.props.item.id)}
        />
        <p style={this.props.item.completed ? this.completedStyle : null}>
          {this.props.item.text}
        </p>
      </div>
    );
  }
}
