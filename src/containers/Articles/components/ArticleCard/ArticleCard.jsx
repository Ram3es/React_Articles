import React from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { actions } from "../../../../store/actions";

export default ({ image_url, title, description, id }) => {
  const dispatch = useDispatch();

  const handleRemoveArticle = () => {
    dispatch(actions.REMOVE_ARTICLES.REQUEST(id));
  };
  return (
    <div className="article">
      <img src={image_url} alt={title} />
      <h2>{title}</h2>
      <div>{description}</div>
      <div>
        <button type="button">View</button>
        <button
          type="button"
          onClick={() => {
            dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`));
          }}
        >
          Edit
        </button>
        <button type="button" onClick={handleRemoveArticle}>
          Remove
        </button>
      </div>
    </div>
  );
};
