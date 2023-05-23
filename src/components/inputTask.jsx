import "./inputTask.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const InputTask = () => {
  const [input, setinput] = useState();
  const dispatch = useDispatch();
  const add = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo({ id: nanoid(), name: input }));
      setinput("");
    }
  };

  return (
    <div className="inputTask">
      <input
        type="text"
        className="input"
        autoFocus
        value={input}
        onChange={(e) => setinput(e.target.value)}
        onKeyDown={(e) => add(e)}
      />
    </div>
  );
};

export default InputTask;
