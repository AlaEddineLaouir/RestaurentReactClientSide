import {
  GET_USER_ORDERS,
  SET_ORDER_TO_EDIT,
  CANCEL_ORDER,
  MAKE_ORDER,
  EDIT_ORDER
} from "./types";

import axios from "axios";
import Axios from "axios";

export const getUserOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/user/orders");

  dispatch({
    type: GET_USER_ORDERS,
    payload: res.data.data
  });
};
export const setEditOrder = order => dispatch => {
  dispatch({
    type: SET_ORDER_TO_EDIT,
    payload: order
  });
};
export const cancelOrder = orderId => async dispatch => {
  const res = await axios.delete(
    "http://localhost:8000/api/user/deleteOrder/" + orderId
  );

  dispatch({
    type: CANCEL_ORDER,
    payload: orderId
  });
};

export const makeOrder = orders => async dispatch => {
  const res = await axios.post("http://localhost:8000/api/user/makeOrder", {
    orders: orders
  });

  dispatch({
    type: MAKE_ORDER,
    payload: res.data.data
  });
};

export const editOrder = order => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/user/editOrder", {
    order
  });

  dispatch({
    type: EDIT_ORDER,
    payload: res.data.data
  });
};
