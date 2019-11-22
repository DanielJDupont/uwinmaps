// This class reduces the amount of boilerplate in the EventActions.js file.

// The shape of the data that will be sent to firestore after a new event is created.
export const createNewEvent = (user, photoURL, event) => {
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || "/assets/user.png",
    created: new Date(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: new Date(),
        photoURL: photoURL || "assets/user.png",
        host: true
      }
    }
  };
};
