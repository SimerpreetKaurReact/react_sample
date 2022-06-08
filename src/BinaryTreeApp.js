import React, { Component } from "react";
import BinaryTreeNode from "./BinaryTreeInsertion";

export default class BinaryTreeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insertKey: "",
      insertValue: "",
      find: "",
      remove: "",
      bTree: new BinaryTreeNode(),
      operation_time: 0,
      activateArrows: true,
    };
  }
  insert() {
    this.state.bTree.insert(this.state.insertKey, this.state.insertValue);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <input
          id="add-content"
          className="pull-left"
          placeholder="Key"
          value={this.state.insertKey}
          onChange={this.onChangeInsertKey}
        />
        <input
          id="add-content"
          className="pull-left"
          placeholder="Value"
          value={this.state.insertValue}
          onChange={this.onChangeInsertValue}
        />
        <button onClick={this.insert} className="btn btn-default pull-left">
          Insert O(n)
        </button>
        <input
          id="find"
          className="pull-left"
          value={this.state.find}
          onChange={this.onChangeFind}
        />
        <button onClick={this.find} className="btn btn-default pull-left">
          Find O(n)
        </button>
        <div className="pull-left col-md-5">
          <input
            id="remove"
            className="pull-left"
            value={this.state.remove}
            onChange={this.onChangeRemove}
          />
          <button onClick={this.remove} className="btn btn-default pull-left">
            Remove O(n)
          </button>
          <button onClick={this.clear} className="btn btn-default pull-left">
            Clear O(n)
          </button>
        </div>
        <div className="App-canvas col-md-12">
          <div className="content">
            <div className="bTree"></div>
          </div>
        </div>
      </div>
    );
  }
}
