import React from "react";
import "./task.css";
import { useSelector, useDispatch } from "react-redux";
import { delTodo } from "../redux/slice";

const Task = () => {
  const { items } = useSelector((state) => state.todos);
  // store da ki state imizi çağırıyoruz

  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(delTodo(item.id));
    // dispatch ile çağırdığımız delTodo fonksiyonunun "action.payload" ına item.id veriyoruz
  };
  return (
    <div className="tasks">
      {items.map((item) => (
        <div className="task" key={item.id} onClick={() => remove(item)}>
          {/* remove işlemi yapabilmek çin remove fonksiyonuna item ı da gönderiyoruz */}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Task;
