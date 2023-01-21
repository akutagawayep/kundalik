const initialState = {
  posts: [],
  loading: "idle",
  fulfied: false,
};

const POSTS_FETCHED = "POSTS_FETCHED";
const POSTS_FETCHING = "POSTS_FETCHING";
const FETCHING_ERROR = "FETCHING_ERROR";
const ADD_POST = "ADD_POST";

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case value:
    //   break;

    // default:
    //   break;
    case POSTS_FETCHING:
      return { ...state, loading: "loading" };
    case POSTS_FETCHED:
      return { ...state, loading: "fullfiled", posts: action.payload };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading: "error",
      };
    default:
      return state;
  }
};

export default postsReducer;
