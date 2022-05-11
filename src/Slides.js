import React from "react";
import { useState } from "react";
import "./App.css";

function Slides() {
  const slides = [
    { title: "title 0", text: "text 0" },

    { title: "title 1", text: "text 1" },

    { title: "title 2", text: "text 2" },

    { title: "title 3", text: "text 3" },

    { title: "title 4", text: "text 4" },

    { title: "title 5", text: "text 5" },

    { title: "title 6", text: "text 6" },

    { title: "title 7", text: "text 7" },

    { title: "title 8", text: "text 8" },

    { title: "title 9", text: "text 9" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(slides.length);

  const handleRestart = () => {
    setCurrentSlide(0);
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };
  const handleNext = () => {
    console.log(currentSlide, totalSlide);
    if (currentSlide < totalSlide) {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div className="slides">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={currentSlide !== totalSlide - 1}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={currentSlide === 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={currentSlide === totalSlide - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        {console.log(
          slides[currentSlide],
          slides[currentSlide].text,
          currentSlide,
          slides[currentSlide].title
        )}
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{`${slides[currentSlide].text}`}</p>
      </div>
    </div>
  );
}

export default Slides;
