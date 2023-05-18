import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const { items } = useSelector((state) => state.todos);
  console.log(items);

  return <div>{items.length}</div>;
};

export default Count;
