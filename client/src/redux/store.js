import { combineReducers, createStore } from "redux";
import {
  authReducer,
  homeworkReducer,
  postsReducer,
  userReducer,
} from "./reducers";

const rootStore = combineReducers({
  homework: homeworkReducer,
  user: userReducer,
  posts: postsReducer,
  auth: authReducer,
});

const store = createStore(rootStore);
export default store;
