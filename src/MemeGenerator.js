import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomImage = this.state.allMemeImgs[randomNum].url;
    this.setState({
      randomImg: randomImage,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        const { memes } = res.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="top text"
          value={this.state.topText}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="bottom text"
          value={this.state.bottomText}
          onChange={this.handleChange}
        />

        <button>GEN</button>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </form>
    );
  }
}

export default MemeGenerator;
