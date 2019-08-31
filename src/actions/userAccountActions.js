import { EDIT_PROFILE, LOGIN_USER, GET_USER } from "./types";
import axios from "axios";
import Axios from "axios";

export const logIn = user => async dispatch => {
  const res = await axios.post("http://localhost:8000/api/login", user);
  Axios.defaults.headers["Authorization"] = "Bearer " + res.data.token;
  dispatch({
    type: LOGIN_USER,
    payload: res.data
  });
};
export const getUser = token => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/user");
  dispatch({
    type: GET_USER,
    payload: res.data
  });
};

export const editProfil = user => dispatch => {
  dispatch({
    type: EDIT_PROFILE,
    payload: user
  });
};
