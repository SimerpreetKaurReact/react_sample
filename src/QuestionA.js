import React, { Component } from 'react';
// import './App.css';

import cx from 'classnames';

export default class QuestionA extends Component {
  constructor() {
    super();
    this.state = {
      counter: 42,
    };
  }

  incrementCounter = (event) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <div>
          <h2 className="counter">Counter</h2>
          <p>{this.state.counter}</p>
          <button className="counter-button" onClick={this.incrementCounter}>
            Click
          </button>
        </div>

        <style>{`

            .counter-button {

            font-size: 1rem;

            padding: 5px 10px;

            color: #585858;

            }

          `}</style>
      </>
    );
  }
}
