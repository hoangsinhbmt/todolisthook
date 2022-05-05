import { ADD_JOB, DELETE_JOB, SET_JOB } from "../constant/constant";

export const initState = {
  job: "",
  jobs: ["Lau Nhà", "Rửa Bát", "Giặt Đồ"],
};
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      {
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      } 
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      return { ...state };
  }
  return newState;
};

export default reducer;
