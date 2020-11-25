import { put, call, takeLatest, select } from "redux-saga/effects";
//import * as constants from "./constants";
//import * as actions from "./actions";
import * as selects from "./selectors";
import { constants } from "../../../store/constants";
import { actions } from "../../../store/actions";
import { sagaAssessor } from "../../../utils";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001/api",
});

const fetchAllArticles = ({ _, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const URL = "/articles";
        const { data } = yield call(() => api.get(URL));
        console.log(data, "data");
        yield put(actions.FETCH_ARTICLES.SUCCESS(data));
      },
    actions.FETCH_ARTICLE.FAILURE,
    callback
  );
/*function* fetchAllArticles({ callback }) {
  try {
    /
    const data = [
      {
        id: 0,
        title: "Article 001",
        description: "Article description",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 1,
        title: "Article 002",
        description: "Article description",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 2,
        title: "Article 003",
        description: "Article description",
        image: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 3,
        title: "Article 004",
        description: "Article description",
        image: "https://picsum.photos/id/237/200/300",
      },
    ];

    yield put(actions.FETCH_ARTICLES.SUCCESS(data));
  } catch (err) {
    yield put(actions.FETCH_ARTICLES.FAILURE(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}*/

const fetchArticle = ({ payload, callback }) => {
  sagaAssessor(
    () =>
      function* () {
        const URL = `/articles/${payload}`;
        const { data } = yield call(() => api.get(URL));
        yield put(actions.FETCH_ARTICLE.SUCCESS(data));
      },
    actions.FETCH_ARTICLE.FAILURE,
    callback
  );
};
/*function* fetchArticle({ payload, callback }) {
  try {
    const article = yield select(selects.getArticle(payload));

    yield put(actions.FETCH_ARTICLE.SUCCESS(article));
  } catch (err) {
    yield put(actions.FETCH_ARTICLE.FAILURE(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}*/
const editArticle = ({ payload, callback }) => {
  sagaAssessor(
    () =>
      function* () {
        const { id, ...rest } = payload;
        const URL = `/articles/${id}`;
        const { data } = yield call(() => api.put(URL, rest));
        yield put(actions.EDIT_ARTICLES.SUCCESS(data)); // instead payload put data
        yield put(actions.EDIT_ARTICLES.CLEARE());
      },
    actions.EDIT_ARTICLES.FAILURE,
    callback
  );
};
/*function* editArticle({ payload, callback }) {
  try {
    yield put(actions.EDIT_ARTICLES.SUCCESS(payload));
    yield put(actions.EDIT_ARTICLES.CLEARE());
  } catch (err) {
    yield put(actions.EDIT_ARTICLES.FAILURE(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}*/

const removeArticleById = ({ payload, callback }) => {
  sagaAssessor(
    () =>
      function* () {
        const { id } = payload;
        const URL = `/articles/${id}`;
        const { data } = yield call(() => api.delete(URL));
        yield put(actions.REMOVE_ARTICLES.SUCCESS(data.id)); // instead payload put data.id
      },
    actions.REMOVE_ARTICLES.FAILURE,
    callback
  );
};
const addNewArticle = ({ payload, callback }) => {
  sagaAssessor(
    () =>
      function* () {
        console.log(payload, "payload");
        const URL = "/articles";
        const { data } = yield call(() => api.post(URL, payload));
        console.log(data);
        yield put(actions.ADD_ARTICLES.SUCCESS(data)); // instead 'payload' have to send { data }
      },
    actions.ADD_ARTICLES.FAILURE,
    callback
  );
};

/*function* removeArticleById({ payload, callback }) {
  try {
    yield put(actions.REMOVE_ARTICLES.SUCCESS(payload));
  } catch (err) {
    yield put(actions.REMOVE_ARTICLES.FAILURE(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}*/

/*function* addNewArticle({ payload, callback }) {
  try {
    yield put(actions.ADD_ARTICLES.SUCCESS(payload));
  } catch (err) {
    yield put(actions.ADD_ARTICLES.FAILURE(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}*/

export default function* articlesWatcher() {
  yield takeLatest(constants.FETCH_ARTICLES.REQUEST, fetchAllArticles);
  yield takeLatest(constants.FETCH_ARTICLE.REQUEST, fetchArticle);
  yield takeLatest(constants.EDIT_ARTICLES.REQUEST, editArticle);
  yield takeLatest(constants.REMOVE_ARTICLES.REQUEST, removeArticleById);
  yield takeLatest(constants.ADD_ARTICLES.REQUEST, addNewArticle);
}
