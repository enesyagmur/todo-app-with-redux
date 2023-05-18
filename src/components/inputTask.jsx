import "./inputTask.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const InputTask = () => {
  const [input, setinput] = useState();
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: nanoid(), name: input }));
  };

  return (
    <div className="inputTask">
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default InputTask;
