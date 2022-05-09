import React from "react";
import { actions, UseStore } from "../store";

export default function DoneJob() {
  const [state, dispatch] = UseStore();
  const { job, jobs, doneJob } = state;
  return (
    <div>
      <h1 className="text-2xl">Done Job</h1>
      <ul>
        {doneJob.map((job, index) => (
          <li key={index}>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">{job.name}</p>
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500"
                onClick={() => dispatch(actions.unDoneJob(index))}
              >
                UnDone
              </button>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 transition"
                onClick={() => dispatch(actions.deleteDoneJob(index))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
