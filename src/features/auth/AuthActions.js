import { SubmissionError, reset } from "redux-form";
import { toastr } from "react-redux-toastr";
import { closeModal } from "../modals/modalActions";
import Swal from "sweetalert2";

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

export const registerUser = user => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    // create the user in auth
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    // update the auth profile
    await createdUser.updateProfile({
      displayName: user.displayName
    });
    // create a new profile in firestore
    let newUser = {
      displayName: user.displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
    throw new SubmissionError({
      _error: error.message
    });
  }
};

export const socialLogin = selectedProvider => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    dispatch(closeModal());
    let user = await firebase.login({
      provider: selectedProvider,
      type: "popup"
    });
    if (user.additionalUserInfo.isNewUser) {
      await firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
      });
    }
    if (user.additionalUserInfo.isNewUser) {
      Swal.fire({
        type: "success",
        title: "Registered Successfully!",
        showConfirmButton: false,
        text: "Welcome to UWinMaps!",
        confirmButtonText: "Great!",
        timer: 2000
      });
    } else {
      Swal.fire({
        type: "success",
        title: "Login Success!",
        showConfirmButton: false,
        text: "Welcome Back to UWinMaps!",
        confirmButtonText: "Great!",
        timer: 2000
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = creds => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  try {
    await user.updatePassword(creds.newPassword1);
    await dispatch(reset("account"));
    toastr.success("Sucess", "Your password has been updated");
    Swal.fire({
      type: "success",
      title: "Success!",
      showConfirmButton: false,
      text: "Your password has been updated!",
      confirmButtonText: "Great!",
      timer: 1500
    });
  } catch (error) {
    throw new SubmissionError({
      _error: error.message
    });
  }
};
