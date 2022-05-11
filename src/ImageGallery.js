//Gallery

// Grid to show images using CSS Grid or Flex
// Route for single image and all images
// Add Links to previous and next image
import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import hotel1 from "./img/hotel-1.jpg";
import hotel2 from "./img/hotel-2.jpg";
import hotel3 from "./img/hotel-3.jpg";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Link,
  useHistory,
} from "react-router-dom";

export class ImageGallery extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Routes>
            <Route
              exact
              path={`/singleImage:${image?.id}`}
              render={(props) => <IndividualImage {...props} />}
            />
            <Route
              exact
              path="/allImages"
              render={(props) => <AllImage image={image} />}
            />
            <Route
              exact
              path="/gridofallImages"
              element={<GridofallImages image={image} />}
            />
          </Routes>
        </main>
      </Router>
    );
  }
}

const image = [
  { name: "1st image", src: { hotel1 } },
  { name: "2nd image", src: { hotel2 } },
  { name: "1st image", src: { hotel3 } },
];
class AllImage extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      images: this.props.image,
      total: this.props.image.length(),
    };
  }
  getPrevious = () => {};
  getNext = () => {};
  getSingleImagePage = () => {
    <Link
      style={{ color: "white" }}
      to={`/singleImage:${this.state.images[this.state.current].name}`}
    />;
  };
  getAllImagePage = () => {
    <Link style={{ color: "white" }} to={`/gridofallImages`} />;
  };

  render() {
    return (
      <div>
        <img src="" alt={image[this.state.current].name}>
          {image[this.state.current].src}
        </img>
        <p>{image[this.state.current].name}</p>
        <button onClick={this.getPrevious}>"Previous"</button>
        <button onClick={this.getNext}>"NextImage"</button>
        <button onClick={this.getSingleImagePage}>
          "See individual Image"
        </button>
        <button onClick={this.getAllImagePage}>"See all Images"</button>
      </div>
    );
  }
}

class GridofallImages extends React.Component {
  render() {
    return (
      <div className="grid-container">
        {this.props.image.map((image) => {
          return (
            <img src={this.props.image.src} alt={this.props.image.name}></img>
          );
        })}
      </div>
    );
  }
}

class IndividualImage extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <img src={this.props.image.src} alt={this.props.image.name}></img>
      </div>
    );
  }
}
