export const fetching = (value) => ({ type: "LOADING" });
export const fetchedUsers = (value) => ({
  type: "USERS_FETCHED",
  payload: value,
});
export const fetchedPosts = (value) => ({
  type: "POSTS_FETCHED",
  payload: value,
});
export const fetchingError = (value) => ({ type: "FETCHING_ERROR" });
