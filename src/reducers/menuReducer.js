import { GET_MENU } from "../actions/types";
const initialState = {
  categories: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
