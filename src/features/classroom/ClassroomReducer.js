import { createReducer } from "../../app/common/util/reducer.Utils";
import {
  CREATE_CLASSROOM,
  UPDATE_CLASSROOM,
  DELETE_CLASSROOM,
  FETCH_CLASSROOMS
} from "./ClassroomConstants";

const initialState = [];

const createClassroom = (state, payload) => {
  return [...state, payload.classroom];
};

const updateClassroom = (state, payload) => {
  return [
    ...state.filter(classroom => classroom.id !== payload.classroom.id),
    payload.classroom
  ];
};

const deleteClassroom = (state, payload) => {
  return [...state.filter(classroom => classroom.id !== payload.classroomId)];
};

const fetchClassrooms = (state, payload) => {
  return payload.classrooms;
};

export default createReducer(initialState, {
  [CREATE_CLASSROOM]: createClassroom,
  [UPDATE_CLASSROOM]: updateClassroom,
  [DELETE_CLASSROOM]: deleteClassroom,
  [FETCH_CLASSROOMS]: fetchClassrooms
});
