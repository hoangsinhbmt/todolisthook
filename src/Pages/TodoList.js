import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./redux/action/action";
import reducer, { initState } from "./redux/reducer/reducer";

//init state

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  let inputRef = useRef();

  const handleSubmit = () => {
    if (job != "") {
      dispatch(addJob(job));
      dispatch(setJob(""));
      inputRef.current.focus();
    } else {
      alert("Bạn phải nhập công việc vào đây");
    }
  };
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest text-2xl">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              ref={inputRef}
              value={job}
              onChange={(e) => {
                dispatch(setJob(e.target.value));
              }}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>
                <div className="flex mb-4 items-center">
                  <p className="w-full text-grey-darkest">{job}</p>
                  <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
                    // onClick={}
                  >
                    Done
                  </button>
                  <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 "
                    onClick={() => dispatch(deleteJob(index))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
