import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import users from "./reducers/users";

const middleware = compose(applyMiddleware(thunk, logger));

const reducers = combineReducers({
  users,
});

export default createStore(reducers, middleware);
