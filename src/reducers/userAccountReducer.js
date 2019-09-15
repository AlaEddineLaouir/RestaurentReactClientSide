import {
  EDIT_PROFILE,
  LOGIN_USER,
  GET_USER,
  LOGOUT_USER,
  SIGN_IN
} from "../actions/types";

const initialState = {
  User: {},
  token: "",
  isLoggedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        User: action.payload.user,
        token: action.payload.token
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        User: {},
        token: ""
      };
    case SIGN_IN:
      return {
        ...state,
        User: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true
      };
    case GET_USER:
      return {
        ...state,
        User: action.payload
      };
    case EDIT_PROFILE:
      return { ...state, User: Object.assign({}, state.User, action.payload) };
    default:
      return state;
  }
}
