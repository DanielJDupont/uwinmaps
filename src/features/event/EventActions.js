import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "./EventConstants";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";
import { toastr } from "react-redux-toastr";

import { createNewEvent } from "../../app/common/util/helpers";

export const createEvent = event => {
  // async will automatically return a promise from what is inside.
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL; // Current user's photo inside store.
    const newEvent = createNewEvent(user, photoURL, event); // Auth profile vs store profile not the same, photoURL for safety.
    try {
      let createdEvent = await firestore.add("events", newEvent); // createdEvent snapshot will be returned.
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      });

      toastr.success("Success!", "Event Has Been Created!");
      return createdEvent; // async returns the promise of a createdEvent object.
    } catch (error) {
      toastr.error(
        "Opps...",
        "Something Went Wrong With EventActions.js createEvent"
      );
      console.log(error);
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success("Success!", "Event Has Been Updated!");
    } catch (error) {
      toastr.error("Oops...", "Something Went Wrong!");
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
