import React from "react";
import MemeGenerator from "./MemeGenerator";
function Meme() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}
function Header() {
  return (
    <header>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <p>Meme Generator</p>
    </header>
  );
}

export default Meme;
