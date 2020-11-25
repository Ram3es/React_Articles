import { actionConstCreator } from "../utils";

const ARTICLES = [
  "FETCH_ARTICLES",
  "FETCH_ARTICLE",
  "EDIT_ARTICLES",
  "REMOVE_ARTICLES",
  "ADD_ARTICLES",
];

const USER = ["FETCH_USER"];

const AUTH = [
  "SIGN_IN",
  "SIGN_UP",
  "RESET",
  "FORGOT",
  "SIGN_OUT",
  "ACTIVATION",
];

export const compose = [...ARTICLES, ...USER, ...AUTH];
export const constants = actionConstCreator(compose);
