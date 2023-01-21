const initialState = {
  isAuth: false,
  isAdmin: false,
  token: null
};

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "LOGIN":
    //   break;
    // case "REGISTRATION":
    //   break;
    // case "ADMIN":
    //   break;
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        isAuth: true
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuth: false
      };
    default:
      return state
  }
};

export default authReducer;
