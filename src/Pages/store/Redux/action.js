import { ADD_JOB, CHECKED_JOB, DELETE_JOB, SET_JOB } from "./constant";

export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

