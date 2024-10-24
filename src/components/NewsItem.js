import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imageUrl ? imageUrl : "https://via.placeholder.com/1000"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span
              className="position-absolute top-0 start-100 badge rounded-pill bg-danger"
              style={{
                transform: "translateX(-100%) translateY(-50%)",
                zIndex: 1,
              }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {author} on {new Date(date).toUTCString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
