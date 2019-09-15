import {
  EDIT_PROFILE,
  LOGIN_USER,
  GET_USER,
  LOGOUT_USER,
  SIGN_IN
} from "./types";
import axios from "axios";
import Axios from "axios";

export const logIn = user => async dispatch => {
  let res;
  try {
    res = await axios.post("http://localhost:8000/api/login", user);
    Axios.defaults.headers["Authorization"] = "Bearer " + res.data.token;
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (error) {
    alert("Login Error : " + error.response.data);
  }
};
export const logout = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/logout");
  console.log(res.data.data);
  dispatch({
    type: LOGOUT_USER
  });
};
export const signin = user => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8000/api/register", {
      ...user
    });
    console.log(res.data.data);
    dispatch({
      type: SIGN_IN,
      payload: { user: user, token: res.data.data }
    });
  } catch (error) {
    let errorString = "";
    error.response.data.errors.forEach(element => {
      errorString += element + "\n";
    });
    alert("Error : " + errorString);
  }
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
