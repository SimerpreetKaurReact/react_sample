import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 100,
      activeLike: 1,
      activeDislike: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      console.log(prevState, prevState.activeLike);
      if (prevState.activeLike) {
        return { likes: prevState.likes + 1, activeDislike: 1, activeLike: 0 };
      } else {
        return { likes: prevState.likes - 1, activeDislike: 0, activeLike: 1 };
      }
    });
  };
  render() {
    return (
      <>
        <div>
          <h2>Like Button</h2>
        </div>
        <button
          className={`like-button ${this.state.activeDislike ? "liked" : ""}`}
          onClick={this.handleClick}
        >
          Like | <span className={"likes-counter"}>{this.state.likes}</span>
        </button>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
