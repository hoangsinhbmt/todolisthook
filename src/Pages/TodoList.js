import React, { useRef } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import DoneJob from "./components/DoneJob";
import SaveUnsave from "./components/SaveUnsave";

//init state

export default function TodoList() {
  return (
    <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <AddTodo />
        <Todo />
        <DoneJob />
        <SaveUnsave />
      </div>
    </div>
  );
}
