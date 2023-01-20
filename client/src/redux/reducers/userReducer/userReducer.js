const initialState = {
  users: [],
  isAuth: false,
  userCredential: {},
};

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: action.payload };
      break;
    case REGISTRATION:
      return {...state, }
    default:
      return state;
  }
};
