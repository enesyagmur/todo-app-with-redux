import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Spor",
      },
      {
        id: 3,
        name: "Kitap",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
