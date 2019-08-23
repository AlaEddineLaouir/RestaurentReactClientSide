import { EDIT_PROFILE } from "../actions/types";

const initialState = {
  User: {
    name: "mehdi",
    email: "ala@ala.a",
    phone: "0541863592",
    token: "sdklfjqsifdklfnclmkvoxjvcxwv"
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE:
      return { ...state, User: Object.assign({}, state.User, action.payload) };
    default:
      return state;
  }
}
