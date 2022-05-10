import React, { useEffect } from "react";
import { UseStore, actions } from "../store";

export default function SaveUnsave() {
  const [state, dispatch] = UseStore();
  const { job, jobs, doneJob } = state;
  const SaveList = () => {
    dispatch(actions.saveTasks());
    alert("bạn đã lưu thành công");
  };
  const ResetList = () => {
    useEffect(dispatch(actions.unsaveTask()))
  };
  return (
    <>
      <button
        className=" absolute bottom-20 right-10 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={SaveList}
      >
        Save
      </button>
      <button
        className=" absolute bottom-10 right-10 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={ResetList}
      >
        Reset Task
      </button>
    </>
  );
}
