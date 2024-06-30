import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${props.category}- ReactNews`;

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    let response = await fetch(url);
    props.setProgress(30);
    let data = await response.json();
    props.setProgress(70);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);

    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    setPages(pages + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
  }, []);

  // componentDidMount = async () => {
  //   // console.log("Component Did Mount");
  //   // this.setState({ loading: true });
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //   // let response = await fetch(url);
  //   // let data = await response.json();
  //   // this.setState({
  //     //   articles: data.articles,
  //     //   totalResults: data.totalResults,
  //     //   loading: false,
  //     // });
  //   };

  // const handlePrev = async () => {
  //   // this.setState({ loading: true });
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=${props.apiKey}&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pageSize}`;
  //   // let response = await fetch(url);
  //   // let data = await response.json();
  //   // this.setState({
  //   //   articles: data.articles,
  //   //   page: this.state.page - 1,
  //   //   loading: false,
  //   // });
  //   setPages(pages - 1);
  //   updateNews();
  // };
  // const handleNext = async () => {
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / props.pageSize)
  //   //   )
  //   // ) {
  //   //   this.setState({ loading: true });
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     props.country
  //   //   }&category=${
  //   //     props.category
  //   //   }&apiKey=${props.apiKey}&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${props.pageSize}`;
  //   //   let response = await fetch(url);
  //   //   let data = await response.json();
  //   //   this.setState({
  //   //     articles: data.articles,
  //   //     page: this.state.page + 1,
  //   //     loading: false,
  //   //   });
  //   // }
  //   setPages(pages + 1);
  //   updateNews();
  // };

  return (
    <>
      {loading && <Spinner />}
      <h2 style={{ marginLeft: "120px" }}>
        ReactNews - Top {props.category} Headlines
      </h2>{" "}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {
              /* {!this.state.loading && }*/
              Array.isArray(articles) &&
                articles.map((element) => {
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
                        author={element.author ? element.author : "Unknown"}
                        date={
                          element.publishedAt ? element.publishedAt : "Unknown"
                        }
                        source={element.source.name}
                      />
                    </div>
                  );
                })
            }
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
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
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / props.pageSize)
            }
            >
            Next <span>&#8594;</span>
            </button>
            </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
