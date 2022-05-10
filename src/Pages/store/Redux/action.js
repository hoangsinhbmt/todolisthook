import { ADD_JOB, DELETE_DONE_JOB, DELETE_JOB, DONE_JOB, SAVE_LIST, SET_JOB, UNSAVE_LIST, UN_DONE_JOB } from "./constant";

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
export const deleteDoneJob = (payload) => {
  return {
    type: DELETE_DONE_JOB,
    payload,
  };
};
export const doneJob = (payload)=>{
  return{
    type: DONE_JOB,
    payload,
  }
}
export const unDoneJob = (payload)=>{
  return{
    type: UN_DONE_JOB,
    payload,
  }
}
export const saveTasks = () => ({
  type: SAVE_LIST
})

export const unsaveTask = () => ({
  type: UNSAVE_LIST,
})

