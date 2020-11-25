//import * as constants from "./constants";
import { constants } from "../../../store/constants";
import { createReducer } from "../../../utils";

const initialState = {
  articles: [],
  error: null,
  selectedArticle: null,
  loading: false,
};

/*export default createReducer (initialState ,{
  [constants.FETCH_ARTICLES.REQUEST](state){
    return {
      ...state,
      loading : true
    }
  },
  [constants.FETCH_ARTICLES.REQUEST](state,action){
    return {
      ...state,
      articles: action.payload,
      loading: false,
      error: null,
    }
  }
})*/

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ARTICLES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_ARTICLES.SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
        error: null,
      };
    case constants.FETCH_ARTICLES.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.FETCH_ARTICLES.CLEARE:
      return {
        ...state,
        articles: null,
      };
    case constants.FETCH_ARTICLE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_ARTICLE.SUCCESS:
      return {
        ...state,
        selectedArticle: action.payload,
        loading: false,
        error: null,
      };

    case constants.FETCH_ARTICLE.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.FETCH_ARTICLE.CLEARE:
      return {
        ...state,
        selectedArticle: null,
      };
    case constants.EDIT_ARTICLES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.EDIT_ARTICLES.SUCCESS:
      return {
        ...state,
        err: null,
        loading: false,
        articles: [...state.articles].map((article) => {
          if (article.id === action.payload.id) {
            return action.payload;
          } else {
            return article;
          }
        }),
      };
    case constants.EDIT_ARTICLES.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case constants.EDIT_ARTICLES.CLEARE:
      return {
        ...state,
        selectedArticle: null,
      };
    case constants.REMOVE_ARTICLES.REQUEST:
    case constants.REMOVE_ARTICLES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].filter(
          (article) => article.id !== action.payload
        ),
      };
    case constants.REMOVE_ARTICLES.FAILURE:
    case constants.REMOVE_ARTICLES.CLEARE:
    case constants.ADD_ARTICLES.REQUEST:
      return {
        ...state,
        loading: true,
        articles: [...state.articles].concat(action.payload),
      };
    case constants.ADD_ARTICLES.SUCCESS:
      return {
        ...state,
        articles: [...state.articles].concat(action.payload),
        loading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};
