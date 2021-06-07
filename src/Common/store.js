import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import timelineReducer from "../TimeLine/state";
import friendReducer from "../Friend/state";
import timelineSaga from "../TimeLine/state/saga";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([timelineSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
