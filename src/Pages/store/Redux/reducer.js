import LocalSer from "../SaveToLocal";
import {
  ADD_JOB,
  DELETE_DONE_JOB,
  DELETE_JOB,
  DONE_JOB,
  SAVE_LIST,
  SET_JOB,
  UNSAVE_LIST,
  UN_DONE_JOB,
} from "./constant";

const initState = LocalSer.getLocal() ? LocalSer.getLocal() : (
  {
    job: "",
    jobs: [
      {
        name: "Rửa Bát",
        id: 1,
        status: true,
      },
      {
        name: "Giặt đồ",
        id: 2,
        status: false,
      },
      {
        name: "Lau Nhà",
        id: 3,
        status: true,
      },
      {
        name: "Học Bài",
        id: 4,
        status: false,
      },
    ],
    doneJob: [],
  }
)

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
    case UN_DONE_JOB:
      const doneJob2 = [...state.doneJob];
      const undoneJob2 = [...state.jobs];
      let done = doneJob2.splice(action.payload, 1);
      let done1 = done[0];
      undoneJob2.push(done1);
      newState = {
        ...state,
        doneJob: doneJob2,
        jobs: undoneJob2,
      };
      break;
    case SAVE_LIST:
          LocalSer.setLocal(state);
          newState = {...state};
          break;
    case UNSAVE_LIST:
          LocalSer.deleLocal();
          newState = { ...state };
          break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};
export { initState };

export default reducer;
