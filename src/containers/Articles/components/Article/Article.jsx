import React from "react";
import "./index.scss";

export default ({ article: { image, title, description } }) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{description}</div>
      <div>
        <button type="button">View</button>
        <button type="button">Edit</button>
        <button type="button">Remove</button>
      </div>
    </div>
  );
};
