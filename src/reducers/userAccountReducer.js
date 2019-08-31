import { EDIT_PROFILE, LOGIN_USER, GET_USER } from "../actions/types";

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
