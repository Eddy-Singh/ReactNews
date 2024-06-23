import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount = async () => {
    console.log("Component Did Mount");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1009d5eaee264c65a90cc70db1ac975b&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, totalResults: data.totalResults });
  };

  handlePrev = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1009d5eaee264c65a90cc70db1ac975b&page=${
      this.state.page - 1
    }&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, page: this.state.page - 1 });
  };
  handleNext = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      console.log("Component Did Mount");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1009d5eaee264c65a90cc70db1ac975b&page=${
        this.state.page + 1
      }&pageSize=20`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ articles: data.articles, page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>ReactNews- Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description
                      ? element.description.length > 120
                        ? element.description.slice(0, 120) + "..."
                        : element.description
                      : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frealitypaper.com%2Fwp-content%2Fuploads%2F2020%2F08%2FCommon-Types-of-News-to-Explore.jpg&f=1&nofb=1&ipt=5f46f041897df3a9b4bed0da7f07810fe5db2c6754970ff28f863db3fa4a5fda&ipo=images"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            <span>&#8592;</span> Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
          >
            Next <span>&#8594;</span>
          </button>
        </div>
      </div>
    );
  }
} //1009d5eaee264c65a90cc70db1ac975b

export default News;
