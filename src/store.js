import {applyMiddleware, createStore} from "redux";

import {thunk} from "redux-thunk";
import rootReducer from "./rootReduser.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

console.log(store.getState())