import React, { useState } from "react";
import "./App.css";

import Articles from "./Articles";
import ArticlesClass from "./ArticlesClass";

const title = "Sorting Articles";
const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];
function App() {
  const [sortBy, setSortBy] = useState("upvotes");
  const handleClick = (id) => {
    setSortBy(id);
  };
  return (
    <div className="App">
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => handleClick("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => handleClick("date")}
        >
          Most Recent
        </button>
        <ArticlesClass articles={articles} sortBy={sortBy} />
      </div>
    </div>
  );
}

export default App;
