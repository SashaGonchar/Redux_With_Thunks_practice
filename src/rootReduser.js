import {combineReducers} from "redux";
import userListReducer from "./features/usersList/userListSlice.js";
import userDetailReducer from "./features/userDetails/userDetailSlice.js";

const rootReducer = combineReducers({
    userData: userListReducer,
    userDetail: userDetailReducer,
})

export default rootReducer;