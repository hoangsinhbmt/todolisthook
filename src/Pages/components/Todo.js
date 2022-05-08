import React from "react";
import { UseStore, actions } from "../store";

export default function Todo() {
  const [state, dispatch] = UseStore();
  const { job, jobs } = state;
  return (
    <div>
      <div>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">{job}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                  Done
                </button>
                <button
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 transition"
                  onClick={() => dispatch(actions.deleteJob(index))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
