import { EDIT_PROFILE } from "./types";

export const editProfil = user => dispatch => {
  dispatch({
    type: EDIT_PROFILE,
    payload: user
  });
};
