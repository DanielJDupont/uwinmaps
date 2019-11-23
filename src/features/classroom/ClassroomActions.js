import { FETCH_CLASSROOMS } from "./ClassroomConstants";
import { createNewClassroom } from "../../app/common/util/helpers";
import firebase from "../../app/config/firebase";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncActions";
import { toastr } from "react-redux-toastr";

export const createClassroom = classroom => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newClassroom = createNewClassroom(user, photoURL, classroom);
    try {
      let createdClassroom = await firestore.add("classrooms", newClassroom);
      await firestore.set(
        `classroom_attendee/${createdClassroom.id}_${user.uid}`,
        {
          classroomId: createdClassroom.id,
          userUid: user.uid,
          classroomDate: classroom.date,
          host: true
        }
      );
      toastr.success("Success!", "Classroom has been created");
      return createdClassroom;
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const updateClassroom = classroom => {
  return async (dispatch, getState) => {
    const firestore = firebase.firestore();
    try {
      dispatch(asyncActionStart());
      let classroomDocRef = firestore
        .collection("classrooms")
        .doc(classroom.id);
      let dateEqual = getState().firestore.ordered.classrooms[0].date.isEqual(
        classroom.date
      );
      if (!dateEqual) {
        let batch = firestore.batch();
        batch.update(classroomDocRef, classroom);

        let classroomAttendeeRef = firestore.collection("classroom_attendee");
        let classroomAttendeeQuery = await classroomAttendeeRef.where(
          "classroomId",
          "==",
          classroom.id
        );
        let classroomAttendeeQuerySnap = await classroomAttendeeQuery.get();

        for (let i = 0; i < classroomAttendeeQuerySnap.docs.length; i++) {
          let classroomAttendeeDocRef = firestore
            .collection("classroom_attendee")
            .doc(classroomAttendeeQuerySnap.docs[i].id);

          batch.update(classroomAttendeeDocRef, {
            classroomDate: classroom.date
          });
        }
        await batch.commit();
      } else {
        await classroomDocRef.update(classroom);
      }
      dispatch(asyncActionFinish());
      toastr.success("Success!", "Classroom has been updated");
    } catch (error) {
      dispatch(asyncActionError());
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const cancelToggle = (cancelled, classroomId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const message = cancelled
    ? "Are you sure you want to cancel the classroom?"
    : "This will reactivate the classroom, are you sure?";
  try {
    toastr.confirm(message, {
      onOk: async () =>
        await firestore.update(`classrooms/${classroomId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};

export const getClassroomsForDashboard = lastClassroom => async (
  dispatch,
  getState
) => {
  let today = new Date();
  const firestore = firebase.firestore();
  const classroomsRef = firestore.collection("classrooms");
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastClassroom &&
      (await firestore
        .collection("classrooms")
        .doc(lastClassroom.id)
        .get());
    let query;

    lastClassroom
      ? (query = classroomsRef
          .where("date", ">=", today)
          .orderBy("date")
          .startAfter(startAfter)
          .limit(2))
      : (query = classroomsRef
          .where("date", ">=", today)
          .orderBy("date")
          .limit(2));

    let querySnap = await query.get();

    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }

    let classrooms = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      classrooms.push(evt);
    }
    dispatch({ type: FETCH_CLASSROOMS, payload: { classrooms } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const addClassroomComment = (classroomId, values, parentId) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const profile = getState().firebase.profile;
  const user = firebase.auth().currentUser;
  let newComment = {
    parentId: parentId,
    displayName: profile.displayName,
    photoURL: profile.photoURL || "/assets/user.png",
    uid: user.uid,
    text: values.comment,
    date: Date.now()
  };
  try {
    await firebase.push(`classroom_chat/${classroomId}`, newComment);
  } catch (error) {
    console.log(error);
    toastr.error("Oops", "Problem adding comment");
  }
};
