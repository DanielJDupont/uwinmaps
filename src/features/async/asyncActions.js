import { ASYNC_ACTION_START } from "./asyncConstants";
import { ASYNC_ACTION_FINISH } from "./asyncConstants";
import { ASYNC_ACTION_ERROR } from "./asyncConstants";

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};

export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  };
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
