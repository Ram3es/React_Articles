import { createStore, applyMiddleware, compose } from "redux";

import history from "../history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();

window.devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.devToolsExtention ? window.devToolsExtention() : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
