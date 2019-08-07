import { GET_MENU } from "./types";
import axios from "axios";
export const getMenu = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/welcom");
  dispatch({
    type: GET_MENU,
    payload: res.data.data
  });
};
