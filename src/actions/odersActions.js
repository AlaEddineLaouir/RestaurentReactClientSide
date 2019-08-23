import {
  GET_USER_ORDERS,
  SET_ORDER_TO_EDIT,
  CANCEL_ORDER,
  MAKE_ORDER,
  EDIT_ORDER
} from "./types";

export const getUserOrders = () => dispatch => {
  dispatch({
    type: GET_USER_ORDERS
  });
};
export const setEditOrder = order => dispatch => {
  dispatch({
    type: SET_ORDER_TO_EDIT,
    payload: order
  });
};
export const cancelOrder = orderId => dispatch => {
  dispatch({
    type: CANCEL_ORDER,
    payload: orderId
  });
};

export const makeOrder = orders => dispatch => {
  const order = {
    id: 3,
    state: "nonValide",
    date: "30/12/2019",
    total: 2000,
    orders
  };
  dispatch({
    type: MAKE_ORDER,
    payload: order
  });
};

export const editOrder = order => dispatch => {
  dispatch({
    type: EDIT_ORDER,
    payload: order
  });
};
