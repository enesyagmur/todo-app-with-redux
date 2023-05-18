import React from "react";
import "./task.css";
import { useSelector, useDispatch } from "react-redux";
import { delTodo } from "../redux/slice";

const Task = () => {
  const { items } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(delTodo(item.id));
  };
  return (
    <div className="tasks">
      {items.map((item) => (
        <div className="task" key={item.id} onClick={() => remove(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Task;
