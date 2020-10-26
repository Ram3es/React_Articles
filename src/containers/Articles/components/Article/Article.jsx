import React from "react";
import "./index.scss";
import Button from "@material-ui/core/Button";

export default ({ article: { image, title, description } }) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{description}</div>
      <div>
        <Button className="btn" variant="contained" color="primary">
          {"View"}
        </Button>
        <Button variant="contained">{"Edit"} </Button>
        <Button variant="contained" color="secondary">
          {"Remove"}
        </Button>
      </div>
    </div>
  );
};
