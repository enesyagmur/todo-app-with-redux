import { clearAll } from "../redux/slice";
import React from "react";
import { useDispatch } from "react-redux";

const Clear = () => {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        backgroundColor: "white",
        border: "none",
        color: "gray",
        cursor: "pointer",
      }}
      onClick={() => dispatch(clearAll())}
    >
      Clear Tasks
    </button>
  );
};

export default Clear;
