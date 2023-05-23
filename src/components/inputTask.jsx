import "./inputTask.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const InputTask = () => {
  const [input, setinput] = useState();
  // inputta bulunan değeri almak ve tutmak için component içinde state kullanıyoruz

  const dispatch = useDispatch();
  const add = (e) => {
    // enter a tıklama ve boş bırakma kontrolü
    if (e.keyCode === 13 && input !== "") {
      dispatch(addTodo({ id: nanoid(), name: input }));
      // distpatch ile addTodo yu çağırıyoruz ve "action.payload" olarak gönderilmesi için değer giriyoruz

      setinput("");
      //text in value değeri input olduğundan setinput u boşalttığımızda text value da boş oluyor
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
        // inputa girilen değeri yakalıyoruz

        onKeyDown={(e) => add(e)}
        // enter a tuşlamasını yakalamak içun add i bu event ile kullanıyoruz
      />
    </div>
  );
};

export default InputTask;
