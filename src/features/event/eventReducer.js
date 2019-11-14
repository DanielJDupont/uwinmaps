import { createReducer } from "../../app/common/util/reducer.Utils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "1",
    title: "How to Code in React in 10 Hours",
    date: "2020-03-27",
    category: "technology",
    description: "The best library in the world",
    city: "San Francisco, California, United States of America",
    venue: "Apple Dome",
    hostedBy: "Jimmy",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Amy",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "JavaScript For Advanced Users",
    date: "2020-03-23",
    category: "technology",
    description: "The best programming language in the world",
    city: "Windsor, Ontario, Canada",
    venue: "University of Windsor",
    hostedBy: "Jimmy",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Amy",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
