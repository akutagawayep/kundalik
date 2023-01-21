const initialState = {
  users: [],
  loading: "idle",
};

const USERS_FETCHED = "USERS_FETCHED";
const USERS_FETCHING = "USERS_FETCHING";
const ADD_USER = "ADD_USER";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHING:
      return { ...state, loading: "loading" };
    case USERS_FETCHED:
      return { ...state, loading: "fullfiled", users: action.payload };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "ERROR":
      return {
        ...state,
        loading: "error",
      };
    default:
      return state;
  }
};

export default userReducer;
