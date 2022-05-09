import React, { useRef, useEffect } from "react";
import { UseStore, actions } from "../store";

export default function AddTodo() {
  const [state, dispatch] = UseStore();
  const { job, jobs } = state;
  let inputRef = useRef();

  const handleSubmit = () => {
    if (job != "") {
      dispatch(actions.addJob(job));
      dispatch(actions.setJob(""));
      inputRef.current.focus();
    } else {
      alert("Bạn phải nhập công việc vào đây");
    }
  };
  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest text-2xl">Todo List</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          ref={inputRef}
          value={job}
          onChange={(e) => {
            dispatch(actions.setJob(e.target.value));
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
  );
}
