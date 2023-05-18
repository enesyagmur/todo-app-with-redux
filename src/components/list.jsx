import React from "react";
import Task from "./task";
import "./list.css";
import { useSelector } from "react-redux";

const List = () => {
  const { items } = useSelector((state) => state.todos);

  return (
    <div className="list">
      <Task />
    </div>
  );
};

export default List;
