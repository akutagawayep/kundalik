const initialState = {
  posts: [],
  users: [],
  userDetail: [],
  loadingStatus: "idle",
  isAuth: false,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOADING":
//       return { ...state, loadingStatus: "loading" };
//     case "USERS_FETCHED":
//       return { ...state, loadingStatus: "loaded", users: action.payload };
//     case "POSTS_FETCHED":
//       return { ...state, loadingStatus: "loaded", posts: action.payload };
//     case "FETCHING_ERROR":
//       return { ...state, loadingStatus: "error" };
//     case "ADD_POST":
//       return { ...state, posts: [action.payload, ...state.posts] };
//     case "ADD_USER":
//       return { ...state, users: [action.payload, ...state.users] };
    // case "DELETE_POST":
    //   return { ...state, list: action.payload };
    // case "USER_DETAIL_FETCHED":
    //   return { ...state, loadingStatus: "loaded", userDetail: action.payload };
    // case "USER":
    //   console.log("Working");
    //   return { ...state, isAuth: true };
    // case "LOGOUT":
    //   console.log("Working");
    //   return { ...state, isAuth: false };
//     default:
//       return state;
//   }
// };

// export default reducer;
