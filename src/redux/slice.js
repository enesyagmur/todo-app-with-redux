import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    delTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addTodo, delTodo } = todosSlice.actions;
export default todosSlice.reducer;
