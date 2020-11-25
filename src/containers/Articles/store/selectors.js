import { createSelector } from "reselect";

const selectArticlesState = (state) => state.articlesReducer;

export const getAllArticles = () =>
  createSelector(selectArticlesState, (state) => state.articles);

export const getArticle = (id) =>
  createSelector(selectArticlesState, (state) =>
    state.articles.find((article) => article.id === id)
  );
