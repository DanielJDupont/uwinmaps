import { SIGN_OUT_USER } from "./AuthConstants";
import { closeModal } from "../modals/modalActions";
import { SubmissionError, reset } from "redux-form";

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  };
};
