import React, { useState } from "react";

function Articles({ articles, sortBy }) {
  let sortedArticles = articles.sort(
    (a, b) => parseFloat(b.upvotes) - parseFloat(a.upvotes)
  );
  if (sortBy === "upvotes") {
    sortedArticles = articles.sort(
      (a, b) => parseFloat(b.upvotes) - parseFloat(a.upvotes)
    );
  } else {
    sortedArticles = articles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedArticles.map((article) => {
            return (
              <tr data-testid="article" key="article-index">
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
