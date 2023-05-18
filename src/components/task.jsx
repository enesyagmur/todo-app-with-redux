import React from "react";
import "./task.css";
import { useSelector } from "react-redux";

const Task = () => {
  const { items } = useSelector((state) => state.todos);

  return (
    <div className="tasks">
      {items.map((item) => (
        <div className="task" key={item.id}>
          {item.name} <button>-</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
