import { clearAll } from "../redux/slice";
import React from "react";
import { useDispatch } from "react-redux";

const Clear = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(clearAll())}>Clear Tasks</button>;
};

export default Clear;
