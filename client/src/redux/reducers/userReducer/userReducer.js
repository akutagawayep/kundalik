const initialState = {
  users: [],
  isAuth: false,
  loading: "idle",
};

const USERS_FETCHED = "USERS_FETCHED";
const USERS_FETCHING = "USERS_FETCHING";
const ADD_USER = "ADD_USER";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHING:
      return { ...state, loading: "loading" };
      break;
    case USERS_FETCHED:
      return { ...state, loading: "fullfiled" };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
