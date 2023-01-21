const initialState = {
  isAuth: false,
  isAdmin: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      break;
    case "REGISTRATION":
      break;
      case "ADMIN":
        break;
    default:
      break;
  }
};

export default authReducer;
