import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slice";
// slice ın default export una istediğimiz ismi vererek çağırıyoruz

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    // state imizin genel ismini belirleyerek slice ın default export una eşitliyoruz
  },
});
