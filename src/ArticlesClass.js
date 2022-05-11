import React, { useState } from "react";

class ArticlesClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      sortedArticles: this.props.articles.sort(
        (a, b) => parseFloat(b.upvotes) - parseFloat(a.upvotes)
      ),
    };
  }
  handleSortChange = () => {
    if (this.props.sortBy === "upvotes") {
      this.setState(
        this.props.articles.sort(
          (a, b) => parseFloat(b.upvotes) - parseFloat(a.upvotes)
        )
      );
    } else {
      this.setState(
        this.props.articles.sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.sortBy !== this.props.sortBy) {
      this.handleSortChange();
    }
  }

  render() {
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
            {this.state.sortedArticles.map((article, index) => {
              return (
                <tr data-testid="article" key={index}>
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
}

export default ArticlesClass;
