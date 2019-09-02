import {
  GET_USER_ORDERS,
  SET_ORDER_TO_EDIT,
  CANCEL_ORDER,
  MAKE_ORDER,
  EDIT_ORDER
} from "../actions/types";

const initialState = {
  Orders: [],
  NewOrder: {},
  EditOrder: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return {
        ...state,
        Orders: action.payload
      };
    case SET_ORDER_TO_EDIT:
      return { ...state, EditOrder: action.payload };
    case CANCEL_ORDER:
      return {
        ...state,
        Orders: state.Orders.filter(order => order.id !== action.payload)
      };
    case MAKE_ORDER:
      return {
        ...state,
        NewOrder: {},
        Orders: state.Orders.concat(action.payload)
      };
    case EDIT_ORDER:
      return {
        ...state,
        Orders: state.Orders.map(order => {
          if (order.id === action.payload.id) {
            return Object.assign({}, order, action.payload);
          } else {
            return order;
          }
        })
      };
    default:
      return state;
  }
}
