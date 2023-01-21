const POSTS_FETCHED = "POSTS_FETCHED";
const POSTS_FETCHING = "POSTS_FETCHING";
const FETCHING_ERROR = "FETCHING_ERROR";
const ADD_POST = "ADD_POST";

export const fetchedPosts = (value) => ({
  type: POSTS_FETCHED,
  payload: value,
});
export const fetchingPosts = (value) => ({
  type: POSTS_FETCHING,
  // payload: value,
});
export const fetchingError = (value) => ({ type: "FETCHING_ERROR" });

export const addPost = (value) => ({
  type: ADD_POST,
  payload: value,
});
