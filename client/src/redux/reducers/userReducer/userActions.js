const USERS_FETCHED = "USERS_FETCHED";
const USERS_FETCHING = "USERS_FETCHING";
const ADD_USER = "ADD_USER";

export const fetchingError = (value) => ({ type: "ERROR", payload: value });
export const fetchedUsers = (value) => ({
  type: USERS_FETCHED,
  payload: value,
});
// export const fetchedPosts = (value) => ({
//   type: "POSTS_FETCHED",
//   payload: value,
// });
export const fetchingUsers = (value) => ({
  type: USERS_FETCHING,
  // payload: value,
});
// export const fetchingError = (value) => ({ type: "FETCHING_ERROR" });

export const addUser = (value) => ({
  type: ADD_USER,
  payload: value,
});
