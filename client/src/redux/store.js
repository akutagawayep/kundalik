import { combineReducers } from "redux";
import { homeworkReducer, postsReducer, userReducer } from "./reducers";

const store = combineReducers({
  homework: homeworkReducer,
  user: userReducer,
  posts: postsReducer,
});

export default store;
