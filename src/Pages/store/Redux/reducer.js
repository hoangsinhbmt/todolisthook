import {
  ADD_JOB,
  DELETE_DONE_JOB,
  DELETE_JOB,
  DONE_JOB,
  SET_JOB,
} from "./constant";

const initState = {
  job: "",
  jobs: [
    {
      name: "task 1",
      id: 1,
      status: true,
    },
    {
      name: "task 2",
      id: 2,
      status: false,
    },
    {
      name: "task 3",
      id: 3,
      status: true,
    },
    {
      name: "task 4",
      id: 4,
      status: false,
    },
  ],
  doneJob: [],
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
          jobs: [
            ...state.jobs,
            {
              name: action.payload,
              id: action.payload,
              status: false,
            },
          ],
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
    case DELETE_DONE_JOB:
      const newDoneJobs = [...state.doneJob];
      newDoneJobs.splice(action.payload, 1);
      newState = {
        ...state,
        doneJob: newDoneJobs,
      };
      break;
    case DONE_JOB:
      const undoneJob = [...state.jobs];
      const doneJob = [...state.doneJob];
      let unDone = undoneJob.splice(action.payload, 1);
      let unDone1 = unDone[0];
      doneJob.push(unDone1);
      newState = {
        ...state,
        doneJob: doneJob,
        jobs: undoneJob,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};
export { initState };

export default reducer;
